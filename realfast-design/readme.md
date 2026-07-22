# *realfast* Design System

The house style for everything ***realfast*** (Ontic Pte Ltd) puts in front of a reader — proposals, reports, articles, and one-pagers. One look, applied consistently, so anything we send out is unmistakably ours.

---

## The look in one line

**A modern editorial style — like a serious business newspaper.** White and warm-cream paper, a classic serif for headlines and reading, a crisp condensed sans for labels and captions, a single confident **red** accent, clean hairline rules instead of heavy boxes, and square corners. Calm, credible, and content-first.

**Three rules that keep us on-brand:**

- The name is always lowercase and italic: ***realfast***.
- **No emoji**, ever.
- Voice is plain-spoken and specific — real numbers, no hype.

---

## What you can make (and how)

The system ships **ready-to-fill templates**. You don't design anything — you open a template, replace the placeholder words and numbers with yours, and you have a finished, on-brand document. Find them under the **Templates** picker.

### 1 · Presentation Deck

A polished slide deck for **proposals and pitches**. Comes with a title slide, the opportunity, your approach, outcomes, a roadmap table, a proof/case-study slide, pricing, and a closing ask — eight slides in all.

- **Use it for:** client proposals, sales pitches, QBRs, investment decks.
- **How:** edit the words on each slide; swap the cover image; the slide thumbnails on the side let you reorder, duplicate, or skip slides. Export to PDF or PowerPoint when you're done.

### 2 · Weekly Sprint Report

A clean one-page **status report**. A dated masthead, a red/amber/green summary, a tracker for each workstream (what shipped, what's next, what's pending), and a table of items waiting on the client.

- **Use it for:** weekly delivery updates, project status, steering-committee notes.
- **How:** update the week and dates, set each item's status colour, fill in the bullets. Hide the pending table if you don't need it.

### 3 · Editorial Article

The full **"newspaper article"** layout — section rubric, big serif headline, standfirst, a drop-capped opening, body copy at a comfortable reading width, and a pull-quote.

- **Use it for:** blog posts, thought-leadership, long-form points of view.
- **How:** replace the headline, byline, date, and body text; drop in one of the brand illustrations as the hero.

> **Tip:** every template has a small **Tweaks** panel (top toolbar) for quick changes like swapping the accent colour. You can also click directly on any text to edit it.

### 4 · Case Study

A long-scroll **client case study** with the fixed narrative spine — hero outcome, the problem, why it mattered, what we did, the build, the metric moved (the boldest data moment), a client quote, and what's next. `case-study-apac/` is a fully filled example.

- **Use it for:** client results, proof stories, sales collateral.
- **How:** lead with the outcome, keep every metric visual, and pull all copy from the source. Ships with a book-a-demo form and a PDF download.

### 5 · Social & Content

A system that turns any blog, case study, or thought-leadership piece into ready-to-post, on-brand assets. Content types: **case study carousel**, **blog carousel**, **thought-leadership** (single image + 3-slide), and the **metric infographic**. All light-led, logo on the first and last frame, data drawn from the chart palette, copy run through the voice editor.

- **Use it for:** LinkedIn / X carousels and single images from existing source material.
- **How:** see `foundations/social-content-system.html` — supply content type, source, platform, and audience; the system handles design, data viz, and voice. Never invents claims not in the source.

---

## The brand kit, briefly

**Colours.** Four brand colours: **red** `#E3120B` (the accent — used sparingly), **blue** `#362CFF`, **navy** `#191970`, and **ink** `#111111` (near-black text). Backgrounds are white or warm cream. The four canonical brand colours remain for UI; the muted illustration shades (dusty blue, slate navy, dusty violet, warm charcoal/grey, pale blue, bone) are an illustration-only extension (pending sign-off) and live under the `--rf-illus-*` tokens. Don't introduce colours beyond these.

**Type.** Two typefaces do all the work: **Source Serif 4** (headlines, body, quotes) and **IBM Plex Sans Condensed** (labels, dates, captions). Figures and code use a plain monospace.

**Imagery.** The signature look is a **muted risograph spot illustration on a pure-white background** (with only a faint warm-cream tint) — warm-charcoal/grey mass, muted brand shades (dusty blue `#7D97B5`, slate navy `#3E4C6E`, dusty violet `#8B84A8`) leading the accents, and signal-red `#E3120B` reserved for a single rare focal detail. Chalky screen-print grain, gentle low contrast, generous negative space. Avoid glossy stock photography.

**Logo.** The realfast wordmark lives in `assets/logos/`. On our light paper it always renders in ink (dark). Never recolour it.

---

## For designers & developers

The rest of this folder is the machine-readable source for the look above — link `styles.css` and the rest follows:

- **`styles.css`** — the single stylesheet to link; pulls in all tokens and the self-hosted fonts (Source Serif 4, IBM Plex Sans Condensed).
- **`tokens/`** — the raw values: `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`. Semantic aliases (`--surface-page`, `--text-body`, `--accent`, `--border`, …) are the editorial light surface and need no theme wrapper.
- **`foundations/*.html`** — specimen cards (Colours, Type, Spacing, Effects, Brand) that populate the **Design System** tab.
- **`components/`** — React primitives on `window.RealfastDesignSystem_e02a4e`: `core/` (Button, Badge, Card) and `editorial/` (Rubric, ShareButton, PullQuote, EditorialBlogCard, ArticleHeader, AuthorBio). Buttons offer red / blue / navy / ink fills plus outline and ghost; everything sits on uniform 2px corners.
- **`templates/`** — the starting points described above: `presentation/`, `weekly-sprint-report/`, `editorial-article/`, `case-study/` (+ `case-study-apac/` example), and the social set (`social-case-study-carousel/`, `social-blog-carousel/`, `social-thought-leadership/`, `social-infographic/`).

### Writing voice (for accurate copy)

Plain-spoken, opinionated, technically credible, a little dry — an engineer-operator writing for other operators. Titles are claims, not topics. Back every claim with a specific number. Product names are camel-cased (ExoCode, ExoWork, ExoCortex); the company name is always lowercase **realfast**. British/Commonwealth spelling is fine if kept consistent. No emoji, no exclamation-mark marketing.

### Icons

Use **[Lucide](https://lucide.dev)** outline icons (24×24, \~2px stroke). Don't mix in a second icon set, and never hand-draw bespoke SVG icons to fake one.

### Source of truth

Derived from the realfast `New-Website` editorial blog theme and the live site (`realfast.ai/blog`). Brand colours and fonts were provided; five editorial illustrations and the wordmark are included in `assets/`.
