# realfast design-system review

Follow-up: implementation fixes and their validation are recorded in [the HTML change report](changes.html). The findings below preserve the original audit baseline.

Reviewed 9 September 2026 against the current working tree, including existing uncommitted changes.

The system has a distinctive editorial identity and unusually detailed content direction. Its main weakness is the gap between that direction and a dependable implementation contract. It currently works best as a branded authoring kit. Production reuse needs clearer rule precedence, stronger component behavior, and a reproducible packaging workflow.

## Scope and evidence

- Read all nine React component implementations, the core tokens, entry-point documentation, website/video/anti-slop guidance, and representative template implementations; inventoried all nine templates.
- Counted 161 tokens: 73 color/semantic, 44 typography, 28 spacing/layout/border/radius, and 16 effect/motion/layer tokens. Categories follow their source files.
- Found nine React components, nine templates, 22 HTML foundation specimens, 48 PNG illustrations, and eight self-hosted WOFF2 font files.
- All nine source SHA-256 prefixes match the compiled bundle metadata. All 161 manifest token values match the CSS declarations.
- No unresolved variable names in the combined CSS/JSX/HTML scan; this does not prove correct scope or loading order. Literal relative HTML resource references checked exist locally.
- Executed the compiled component functions in Node with a minimal React element factory to inspect emitted properties. This confirms property composition, not browser rendering or React integration.
- Calculated solid-color contrast using relative luminance. Browser verification was unavailable: the browser tool failed with a sandbox-configuration error. Mobile layout, screen readers, print/PPTX output, and visual regressions remain unverified.
- No existing source files changed. This report is the only added file.

## What is working

**A coherent identity.** Source Serif 4 for reading and claims, IBM Plex Sans Condensed for furniture, restrained red, white/cream paper, and risograph imagery form a recognizable combination. The reading measure, type roles, and editorial rhythm are explicitly recorded.

**Content architecture is part of the system.** Case studies have a narrative sequence; social assets have format-specific guidance; video specifies beats, text timing, and source discipline. These are valuable reusable decisions, beyond visual styling.

**Useful separation of assets and primitives.** Illustration-only colors have their own namespace. Fonts are self-hosted. There is a single CSS import entry point, component declarations and usage notes, and a compiled preview bundle whose source hashes are currently correct.

**Appropriate restraint in component scope.** An editorial/marketing kit does not automatically need every application widget. Add primitives because real templates require them, rather than expanding into an unrelated dashboard library.

## Priority findings

### 1. High: ordinary style overrides remove component styling

Affected: `Badge`, `Button`, `Card`, `PullQuote`, `Rubric`, and `ShareButton`.

These components emit a `style` property and then spread `...rest`, which still contains the caller's `style`. The latter replaces the entire style object. Several components attempt to merge `rest.style` first, but the final spread undoes that merge.

Confirmed against the shipped bundle: passing `style={{ marginTop: 12 }}` leaves the root with **only** `marginTop` in all six components. This can remove typography, padding, background, borders, and layout. It already affects internal composition: `ArticleHeader.jsx:27` passes a margin override to `Rubric`.

Fix: extract `style` from the remaining DOM props, spread those props first, and explicitly merge base styles with the override. Compose event handlers where internal behavior must survive consumer handlers. Add regression checks for these public customization paths.

Evidence: [Button](realfast-design/components/core/Button.jsx#L66), [Rubric](realfast-design/components/editorial/Rubric.jsx#L24), [ArticleHeader](realfast-design/components/editorial/ArticleHeader.jsx#L27).

### 2. High: Button's link and form contracts are incomplete

`<Button as="a" disabled href="…">` still emits a live href, with no activation guard or disabled semantics. Its dimmed appearance misrepresents its behavior. The default native button also has no explicit type, so inside a form it can submit unexpectedly.

The declaration extends `React.HTMLAttributes<HTMLElement>` rather than native button/anchor attributes. It exposes `as="a"` without declaring `href`, and does not provide the correct native button `type` contract. The runtime also accepts a `signal` compatibility alias missing from the declared variant union.

Fix: define separate button and anchor prop branches; settle disabled-link behavior; default action buttons to `type="button"`; preserve explicit submit usage. Verify actual keyboard and pointer activation when a browser is available.

Evidence: [Button source](realfast-design/components/core/Button.jsx), [Button types](realfast-design/components/core/Button.d.ts).

### 3. High: newer rules contradict each other

The core's light editorial surface and a website-specific dark band can coexist. The problem is that exceptions and authority are not consistently declared.

| Subject | Competing instructions |
|---|---|
| Glow | Website §4 requires radial red glows; anti-slop §2 bans radial halos/glowing accents with “no case-by-case exceptions.” Its override list does not exempt website glows. |
| Corners | Core spacing tokens prescribe 2px on every button/card, with pills only for rubric badges; website §10 prescribes pill CTAs. |
| Gradient placement | Anti-slop permits accent words only on dark bands; website §11 describes a cream mission band with a red-gradient closing phrase. |
| Brand spelling/style | Root guide requires lowercase; inner guide adds mandatory italic; its later voice section only repeats lowercase. |
| Illustration status | Inner guide calls muted colors “pending sign-off”; the skill presents them as the default illustration direction. |
| Review logic | Anti-slop §1 asks whether the piece could belong to any company, then says any “no” means unfinished. For that first question, “no” is the desired answer. |

Fix: give each channel a declared scope and exception table. Resolve actual contradictions instead of asking authors or agents to infer which document wins. Correct the inverted first audit question.

Evidence: [core guide](realfast-design/readme.md), [website language](realfast-design/foundations/website-design-language.md), [anti-slop](realfast-design/foundations/anti-slop.md).

### 4. High: some text colors miss their intended contrast target

Calculated from the defined opaque colors:

| Pair | Ratio | Interpretation |
|---|---:|---|
| White on editorial blue `#1370FB` | 4.43:1 | Below normal-text AA; used by the blue Button at 13–16px. |
| Editorial red `#E3120B` on white | 4.82:1 | Passes normal-text AA. |
| Editorial red on cream `#F5F3EF` | 4.35:1 | Below normal-text AA when used as small text. |
| Faint `#9A9A9A` on white | 2.81:1 | Below both normal and large-text AA. |
| Faint on cream | 2.54:1 | Below both thresholds. |
| Muted `#6E6E6E` on cream | 4.60:1 | Passes normal-text AA, with little margin. |

The weekly report uses faint text for meaningful milestone labels/status text, so this is more than a hypothetical token misuse. Disabled and decorative elements have different requirements; these results do not declare every use of a color a failure.

Fix: publish approved foreground/background pairs and introduce accessible text/action aliases per surface. Keep brand and illustration colors available without implying they are safe for all text roles.

Threshold reference: [W3C Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), 4.5:1 for normal text and 3:1 for large text. Ratios shown rounded for readability; comparisons use unrounded values.

### 5. Medium: tokens exist but do not control most component geometry

Across all nine JSX files, the only consumed `--type-*`, `--space-*`, `--radius-*`, or `--focus-*` token is `--type-rubric-size`. Other sizes, spacing, radii, and much of the typography are literals. Changing the token scale therefore leaves most components unchanged.

Color identity also has ambiguity: the guides call `#E3120B` canonical red, but `--rf-red` is `#F7394D`. Website documentation labels `--rf-red-400` as `#F0524D`, while CSS defines `#F7394D`. The blue Button uses editorial link blue rather than canonical brand blue, despite its “four canonical brand colors” description.

Fix: settle canonical aliases, then adopt role tokens in primitives. Define intentional component-specific sizes where the general scale does not fit. Avoid mechanically replacing every numeric value, especially intrinsic illustration and export dimensions.

Evidence: [colors](realfast-design/tokens/colors.css), [typography](realfast-design/tokens/typography.css), [spacing](realfast-design/tokens/spacing.css), [Button](realfast-design/components/core/Button.jsx).

### 6. Medium: interaction and accessibility contracts need completion

- `Card interactive` renders a `div` with hover treatment and a pointer cursor, but provides no native activation or keyboard behavior. Use a link/button composition for genuinely actionable cards.
- Core hover/press behavior is mouse-event driven. A focus-ring token exists but is not consumed by the components; there is no shared component focus-visible or reduced-motion rule. Native focus may remain, so this is not a claim that every control lacks focus indication.
- Case-study labels are siblings of inputs without `for`/`id` association.
- `AuthorBio` always emits an `h1`, including its documented article-footer use. Make heading level contextual.
- `EditorialBlogCard` uses fixed two-column inline grids without a supplied mobile collapse rule, and uses an 8px thumbnail radius contrary to the default shape rule. Mobile impact needs rendering verification.

Evidence: [Card](realfast-design/components/core/Card.jsx), [AuthorBio](realfast-design/components/editorial/AuthorBio.jsx), [EditorialBlogCard](realfast-design/components/editorial/EditorialBlogCard.jsx), [case-study template](realfast-design/templates/case-study/CaseStudy.dc.html#L244).

### 7. Medium: the production handoff is underspecified

The case-study submit listener prevents submission, hides the form, and displays success without a request. Its PDF action calls `window.print()`. These are reasonable preview behaviors if explicitly described, but “ships with a book-a-demo form” can imply a functioning lead path.

The installation guide correctly warns against shipping prototype HTML directly. Extend that boundary into each template: describe which interactions are previews, which host/editor capabilities are required, and which production integrations remain.

The preview runtime loads React, ReactDOM, and Babel from a CDN. Self-hosted fonts do not make the complete preview offline-capable. Standalone usage and editor-hosted usage should each have a documented, verified path.

Evidence: [submit handler](realfast-design/templates/case-study/CaseStudy.dc.html#L308), [installation guide](INSTALL.md), [runtime](realfast-design/support.js#L1073).

### 8. Medium: enforcement metadata is unreliable

The adherence configuration tells consumers to import from `index.js`, but the repository has no such entry point. It treats `AuthorBioLink`, a TypeScript data interface, as a component while omitting the actual `AuthorBio` component from that component-rule map. Prop allowlists also warn on legitimate DOM props such as Button `onClick` and `href`.

There is no package manifest or checked-in build/test workflow to run these rules or regenerate the bundle and metadata. The current hashes matching is good evidence about today's files, not a reproducible release process.

Fix: document the supported consumption mode; provide an entry point if source imports are intended; generate rules from actual exports with native prop support; add one documented validation command. Cover style composition, disabled behavior, token/manifest parity, and resource existence first.

Evidence: [adherence config](realfast-design/_adherence.oxlintrc.json), [AuthorBio declaration](realfast-design/components/editorial/AuthorBio.d.ts), [bundle metadata](realfast-design/_ds_bundle.js).

### 9. Medium: onboarding describes an older package

Root README and INSTALL still advertise three templates and five illustrations; the actual package contains nine templates and 48 illustrations. Some component comments still require an editorial wrapper that the tokens explicitly make unnecessary. README also promises editor controls without explaining how a repo consumer launches that editor.

Fix: maintain one inventory and generate or link onboarding summaries from it. Specify copy-based consumption, preview launch, dependency requirements, upgrade procedure, and what counts as a breaking visual change.

### 10. Follow-up: asset and output governance

The additional `fonts/Manrope-*.ttf` files sit outside the active two-family font system. Illustration names mix descriptive filenames with `a1.png` through `a36.png`, making content selection and provenance harder. The newer illustration palette is marked pending approval in one guide.

Add an asset catalog with purpose, intended background, approval state, and source/usage rights. Mark unused assets as legacy before removing anything. Define a small output-verification matrix: narrow article, wide website, print report, slide export, and fixed-size social image. Fixed social canvases need export checks, not arbitrary responsive breakpoints.

## Proposed structure and order of work

Preserve the editorial identity. Make the system easier to apply consistently:

1. **Core:** canonical colors, fonts, spacing, semantic text/surface pairs, brand voice, source discipline, and asset policy.
2. **Channel profiles:** editorial/documents, marketing website, social, and video. Each declares its differences from core: dark bands, radii, gradients, typography scale, motion, and output sizes.
3. **Components and patterns:** primitives implement the shared behavior contract; templates compose channel patterns and clearly label demonstration interactions.
4. **Distribution and checks:** reproducible bundle/manifest generation, supported consumption instructions, and a small regression suite.

Recommended sequence: fix the six style-composition defects and Button semantics; resolve contradictory guidance and accessible color aliases; repair metadata and onboarding; then verify representative browser/export outputs. Expand component coverage only after these foundations hold.

No numerical maturity score is assigned: the browser and export checks needed to make such a score defensible were not available in this review.
