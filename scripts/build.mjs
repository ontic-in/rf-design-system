import { build } from 'esbuild';
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const root = new URL('../realfast-design/', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('_ds_manifest.json', root)));
const components = manifest.components;
const exports = components.map(c => `export { ${c.name} } from './${c.sourcePath}';`).join('\n') + '\n';
await writeFile(new URL('index.js', root), exports);
await writeFile(new URL('index.d.ts', root), components.map(c => `export * from './${c.sourcePath.replace('.jsx', '')}';`).join('\n') + '\n');
const hashes = {};
for (const c of components) hashes[c.sourcePath] = createHash('sha256').update(await readFile(new URL(c.sourcePath, root))).digest('hex').slice(0, 12);
const result = await build({
  entryPoints: [new URL('index.js', root).pathname], bundle: true, write: false,
  format: 'iife', globalName: '__rfExports', jsx: 'transform', target: 'es2020',
  plugins: [{ name: 'host-react', setup(b) {
    b.onResolve({ filter: /^react$/ }, () => ({ path: 'react', namespace: 'host' }));
    b.onLoad({ filter: /.*/, namespace: 'host' }, () => ({ contents: 'export default new Proxy({}, { get: (_, key) => window.React[key] });', loader: 'js' }));
  }}],
});
const header = { format: 4, namespace: manifest.namespace, components, sourceHashes: hashes, inlinedExternals: [], unexposedExports: [] };
await writeFile(new URL('_ds_bundle.js', root), `/* @ds-bundle: ${JSON.stringify(header)} */\n${result.outputFiles[0].text}\nwindow.${manifest.namespace} = Object.assign(window.${manifest.namespace} || {}, __rfExports);\n`);
const previous = new Map(manifest.tokens.map(t => [t.name, t]));
manifest.tokens = [];
for (const file of ['colors', 'typography', 'spacing', 'effects']) {
  const css = await readFile(new URL(`tokens/${file}.css`, root), 'utf8');
  for (const [, name, value] of css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
    const token = previous.get(name) || { name, kind: file === 'typography' ? 'font' : file === 'spacing' ? 'spacing' : 'color', definedIn: `tokens/${file}.css` };
    manifest.tokens.push({ ...token, value: value.trim(), ...(file === 'colors' ? { kind: 'color' } : {}) });
  }
}
await writeFile(new URL('_ds_manifest.json', root), JSON.stringify(manifest) + '\n');
// Keep exported inventory accurate. Native DOM attributes are checked by TypeScript,
// not a generated list that incorrectly rejects onClick, href, aria-* or data-*.
const config = JSON.parse(await readFile(new URL('_adherence.oxlintrc.json', root)));
config.rules['no-restricted-syntax'] = config.rules['no-restricted-syntax'].filter(x => typeof x === 'string' || !x.selector.startsWith('JSXOpeningElement'));
config['x-omelette'].components = Object.fromEntries(components.map(c => [c.name, { replaces: [] }]));
config['x-omelette'].tokens = manifest.tokens.map(t => t.name).sort();
config['x-omelette'].tokenKinds = Object.fromEntries(manifest.tokens.map(t => [t.name, t.kind]));
await writeFile(new URL('_adherence.oxlintrc.json', root), JSON.stringify(config, null, 2) + '\n');
console.log(`Built ${components.length} components and ${manifest.tokens.length} tokens.`);
