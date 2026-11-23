---
name: realfast-design
description: Use this skill to generate well-branded interfaces and assets for realfast (Ontic Pte Ltd), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, UI components, and ready-to-fill templates for the realfast light "Economist" editorial style.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view. If working on production code,
you can copy assets and read the rules here to become an expert in designing with this
brand.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.

## Quick orientation

realfast uses **one look — a light, serif "Economist"-style editorial system**. There
is no dark/app theme.
- White / warm-cream paper, **Source Serif 4** (headlines + body) + **IBM Plex Sans
  Condensed** (labels, meta, UI), a single red brand flag `#E3120B`, drop-cap ledes, muted
  risograph spot illustrations (pure-white background, charcoal/grey mass, muted brand shades leading, red a
  rare spark), hairline rules, square 2px corners, 660px
  reading measure.
- Each colour has one job: red `#E3120B` is the brand flag (one small mark per view,
  never a button, never a number, never on navy or blue); ultramarine `#2E3AC8` is every
  action; logo blue `#362CFF` is the logo only; navy `#191970` fills dark bands; ink
  `#111111` is text; greys come from one warm stone ramp (`--rf-stone-*`) and one cream.
  Status uses the Jewel set (`--rf-good/warn/bad` + `-text` + `-tint`); charts use the
  validated `--chart-*` palette. The muted `--rf-illus-*` shades are illustration-only.
- **Buttons and links are ultramarine, never red.** Primary = ultramarine light
  leak, secondary = periwinkle tint with pale light, links = ultramarine underlined,
  destructive = pale red tint (the only red button). Use `<Button>` in React or
  `.rf-btn` / `.rf-btn--secondary` / `.rf-btn--destructive` / `.rf-link` in plain
  HTML (add `.rf-on-dark` on navy bands). One primary per view; decks use the
  primary only; no arrows. See `foundations/buttons.html` and `tokens/buttons.css`.

The brand name is **always lowercase** (`realfast`). **No emoji.** Voice is
plain-spoken, opinionated, specific (real numbers). Icons are **Tabler**.

## Key files
- `readme.md` — full guide: the look, the templates, content fundamentals, brand kit.
- `styles.css` — the one stylesheet to link; pulls in tokens + self-hosted fonts.
- `tokens/` — colors, typography, spacing, effects custom properties, and `buttons.css`
  (button tokens + plain-CSS `.rf-btn` classes).
- `assets/` — fonts, the white-fill logo, five editorial illustrations.
- `components/` — Button, Badge, Card, Rubric, ShareButton, PullQuote,
  EditorialBlogCard (React; exported on `window.RealfastDesignSystem_e02a4e`).
- `templates/` — ready-to-fill starting points: `presentation/` (proposal/pitch deck),
  `weekly-sprint-report/` (status report), `editorial-article/` (blog article),
  `case-study/` (client case study) + `case-study-apac/` (filled example),
  and the social set — `social-case-study-carousel/`, `social-blog-carousel/`,
  `social-thought-leadership/`, `social-infographic/`.
- `foundations/` — specimen cards incl. `data-viz.html` (chart palette),
  `website-design-language.html` (the web layer) and `social-content-system.html`
  (the Social & Content generation system: templates, formats, data, voice editor,
  workflow, and how-to-prompt guide).

When in doubt, match the foundation specimen cards in `foundations/` and the prose in
`readme.md` rather than inventing new colors, type, or motifs.
