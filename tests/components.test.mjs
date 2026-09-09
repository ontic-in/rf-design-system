import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
const context = vm.createContext({ window: { React } });
const bundle = fs.readFileSync('realfast-design/_ds_bundle.js', 'utf8');
vm.runInContext(bundle, context);
const ds = context.window.RealfastDesignSystem_e02a4e;
for (const name of ['Button','Badge','Card','Rubric','PullQuote','ShareButton']) {
  test(`${name}: overrides preserve base style, class and DOM props`, () => {
    const element = ds[name]({ style: { marginTop: 12 }, className: 'consumer', 'aria-label': 'Audit', children: 'Example', section: 'Insights' });
    assert.equal(element.props.style.marginTop,12);
    assert.ok(Object.keys(element.props.style).length > 2);
    assert.match(element.props.className,/rf-component/);
    assert.match(element.props.className,/consumer/);
    assert.equal(element.props['aria-label'],'Audit');
    assert.ok(renderToStaticMarkup(element).length > 0);
  });
}
test('Button supports native form semantics and blocks disabled link activation', () => {
  assert.equal(ds.Button({}).props.type,'button');
  assert.equal(ds.Button({type:'submit'}).props.type,'submit');
  let invoked=0, prevented=0;
  const link=ds.Button({as:'a',href:'/target',disabled:true,onClick:()=>invoked++});
  assert.equal(link.props.href,undefined);
  assert.equal(link.props['aria-disabled'],true);
  assert.equal(link.props.tabIndex,-1);
  link.props.onClick({preventDefault:()=>prevented++,stopPropagation(){}});
  assert.equal(invoked,0);assert.equal(prevented,1);
  const enabled=ds.Button({as:'a',href:'/target',onClick:()=>invoked++});
  enabled.props.onClick({});assert.equal(invoked,1);assert.equal(enabled.props.href,'/target');
});
test('Card supports keyboard activation and respects prevented/nested events', () => {
  const card=ds.Card({interactive:true});let clicks=0;
  const target={click:()=>clicks++};
  assert.equal(card.props.role,'button');assert.equal(card.props.tabIndex,0);
  for(const key of ['Enter',' ']) card.props.onKeyDown({key,target,currentTarget:target,preventDefault(){}});
  assert.equal(clicks,2);
  card.props.onKeyDown({key:'Enter',target:{},currentTarget:target,preventDefault(){}});
  assert.equal(clicks,2);
  ds.Card({interactive:true,onKeyDown:e=>e.defaultPrevented=true}).props.onKeyDown({key:'Enter',target,currentTarget:target});
  assert.equal(clicks,2);
});
test('ArticleHeader rubric retains typography and AuthorBio heading is contextual', () => {
  const html=renderToStaticMarkup(React.createElement(ds.ArticleHeader,{title:'A claim',author:'Author'}));
  assert.match(html,/font-family:var\(--font-sans\)/);
  assert.match(renderToStaticMarkup(React.createElement(ds.AuthorBio,{name:'Author'})),/<h2/);
  assert.match(renderToStaticMarkup(React.createElement(ds.AuthorBio,{name:'Author',headingAs:'h1'})),/<h1/);
});
test('solid foreground/background pairs meet normal text contrast', () => {
  const css=fs.readFileSync('realfast-design/tokens/colors.css','utf8');
  const tokens=Object.fromEntries([...css.matchAll(/(--[\w-]+):\s*([^;]+);/g)].map(m=>[m[1],m[2]]));
  const resolve=n=>tokens[n].startsWith('var(')?resolve(tokens[n].slice(4,-1)):tokens[n];
  const lum=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4).reduce((s,c,i)=>s+c*[.2126,.7152,.0722][i],0);
  const contrast=(a,b)=>{const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
  for(const foreground of ['--text-body','--text-muted','--text-faint','--text-accent','--link'])
    for(const background of ['--surface-page','--surface-raised'])
      assert.ok(contrast(resolve(foreground),resolve(background))>=4.5,`${foreground} on ${background}`);
  for(const background of ['--rf-ed-red','--rf-blue','--rf-navy','--rf-ed-ink'])
    assert.ok(contrast('#ffffff',resolve(background))>=4.5,`button ${background}`);
});
test('all sources match bundle hashes; manifest token values match CSS', async () => {
  const {createHash}=await import('node:crypto');
  const meta=JSON.parse(bundle.match(/@ds-bundle: (.*?) \*\//)[1]);
  for(const [path,hash] of Object.entries(meta.sourceHashes)) assert.equal(createHash('sha256').update(fs.readFileSync(`realfast-design/${path}`)).digest('hex').slice(0,12),hash);
  const manifest=JSON.parse(fs.readFileSync('realfast-design/_ds_manifest.json'));
  for(const token of manifest.tokens) assert.ok(fs.readFileSync(`realfast-design/${token.definedIn}`,'utf8').includes(`${token.name}: ${token.value};`),token.name);
});

test('preview bundle supports React loading after the bundle', () => {
  const late = vm.createContext({window:{}});
  vm.runInContext(bundle, late);
  late.window.React = React;
  assert.match(renderToStaticMarkup(late.window.RealfastDesignSystem_e02a4e.Button({children:'Ready'})), /Ready/);
});
