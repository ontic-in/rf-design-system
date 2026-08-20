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
  Condensed** (labels, meta, UI), a single red accent `#E3120B`, drop-cap ledes, muted
  risograph spot illustrations (pure-white background, charcoal/grey mass, muted brand shades leading, red a
  rare spark), hairline rules, square 2px corners, 660px
  reading measure.
- The four brand colours — red `#E3120B`, blue `#362CFF`, navy `#191970`, ink
  `#111111` — are used as accents on the light surface. The semantic tokens are the
  editorial surface by default; no theme wrapper is needed. The muted illustration
  shades (`--rf-illus-*`) are an illustration-only extension, not UI colours.

The brand name is **always lowercase** (`realfast`). **No emoji.** Voice is
plain-spoken, opinionated, specific (real numbers). Icons are **Tabler**.

## Key files
- `readme.md` — full guide: the look, the templates, content fundamentals, brand kit.
- `styles.css` — the one stylesheet to link; pulls in tokens + self-hosted fonts.
- `tokens/` — colors, typography, spacing, effects custom properties.
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
  workflow, and how-to-prompt guide) and `anti-slop.md` (the patterns that make
  work read as machine-generated, the four we deliberately override, and how to
  run the detector).

When in doubt, match the foundation specimen cards in `foundations/` and the prose in
`readme.md` rather than inventing new colors, type, or motifs.

Before shipping anything, read `foundations/anti-slop.md`. It is the list of patterns
that make an interface read as machine-generated - gradient text outside the published
recipe, glow accents, icon tiles above headings, thick side-tab borders, buzzword copy -
plus the four flagged patterns (gradient accent words, cream paper, rubrics, serif
display) that *realfast* runs on purpose, and the guardrails that keep them honest.
