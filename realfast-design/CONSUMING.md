# Consume and update the system

## Production React

Import from `realfast-design/index.js` through your application's JSX-capable bundler and link `realfast-design/styles.css`. React is a host dependency. `index.d.ts` exports the matching declarations. The browser-global `_ds_bundle.js` is for previews and expects `window.React` before it loads.

```jsx
import { Button, Card, AuthorBio } from './realfast-design/index.js';
<Button as="a" href="/contact">Contact us</Button>
<Button type="submit">Send request</Button>
<Card interactive onClick={openDetails}>Open details</Card>
<AuthorBio name="Author" headingAs="h1" />
```

Interactive Card supports Enter and Space and is a single action; do not place links or buttons inside it. Prefer a native link for navigation. AuthorBio defaults to h2 for article-footer use. Style props merge with base styling. Shared behavior requires styles.css.

## Preview boundaries

Use a local HTTP server; no authoring host is required to inspect the HTML references. React/ReactDOM/Babel in the template support runtime are downloaded from a CDN, so previews require network access. Editor-only tweaks, slide management and PowerPoint export depend on the authoring host and are not promised by the standalone server.

Case-study forms validate fields and show a preview message only. They do not send or save data. Production adoption requires a real submission endpoint, pending/error/success states, and a verified destination. PDF controls open the browser print dialog; verify pagination before sharing. Fixed-size social canvases should be exported at their defined dimensions.

## Upgrade notes for this revision

- Style overrides now retain component styling. Consumers relying on full replacement should explicitly override the relevant properties.
- Button defaults to type="button". Forms must explicitly request type="submit".
- Disabled link buttons lose href and leave the tab order. Enabled links retain native behavior.
- `--rf-red` now resolves to canonical #E3120B; the previous #F7394D remains `--rf-red-400`.
- Link/faint text aliases are darker; small red text uses `--text-accent`. Blue buttons now use canonical brand blue.
- Button spacing uses the 4px token scale. Card's top rule is 2px. Blog thumbnails use 2px corners and grids collapse below 640px.
- AuthorBio defaults to h2; standalone author pages should explicitly pass headingAs="h1".

From the repo root: `npm ci` then `npm run check`. Commit source, the lockfile, and regenerated bundle/manifest together. Copy-based consumers should pin a git revision and review these migration notes before replacing their installed folder.

The asset catalog is `assets/catalog.json`. Approval/provenance fields marked unverified are not clearance to republish. Manrope files are retained as legacy assets outside the active font system.
