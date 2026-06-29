# Realfast Design System

The house style for everything **realfast** (Ontic Pte Ltd) puts in front of a reader — proposals, reports, articles, and one-pagers. One look, applied consistently, so anything we send out is unmistakably ours.

---

## The look in one line

**A modern editorial style — like a serious business newspaper.** White and warm-cream paper, a classic serif for headlines and reading, a crisp condensed sans for labels and captions, a single confident **red** accent, clean hairline rules instead of heavy boxes, and square corners. Calm, credible, and content-first. 

**Three rules that keep us on-brand:**

- The name is always lowercase: **realfast**.
- **No emoji**, ever.
- Voice is plain-spoken and specific — real numbers, no hype.

---

## Install & use

This system ships as a [Claude Code skill](https://docs.claude.com/en/docs/claude-code/skills) — Claude Code auto-discovers it, reads the brand rules, and builds on-brand HTML or production UI from the terminal.

**Install** — copy the `realfast-design/` folder into a skills directory (keep it intact; `SKILL.md` is the entry point):

```bash
# Per repo (shared with anyone who clones — recommended)
mkdir -p .claude/skills && cp -R realfast-design .claude/skills/

# Or for all your projects (personal)
mkdir -p ~/.claude/skills && cp -R realfast-design ~/.claude/skills/
```

**Use** — name it directly, or let Claude pull it in when a request matches:

```
> use the realfast-design skill to build a pricing page
```

See [`INSTALL.md`](INSTALL.md) for the full guide.

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

---

## The brand kit, briefly

**Colours.** Four brand colours: **red** `#E3120B` (the accent — used sparingly), **blue** `#362CFF`, **navy** `#191970`, and **ink** `#111111` (near-black text). Backgrounds are white or warm cream. That's it — please don't introduce new colours.

**Type.** Two typefaces do all the work: **Source Serif 4** (headlines, body, quotes) and **IBM Plex Sans Condensed** (labels, dates, captions). Figures and code use a plain monospace.

**Imagery.** The signature look is **grainy black-and-white illustration with one red detail** picked out of the scene (a crack, a crane, a finish-line tape). Five are included in `assets/illustrations/`. Avoid glossy stock photography.

**Logo.** The realfast wordmark lives in `assets/logos/`. On our light paper it always renders in ink (dark). Never recolour it.

---

## For designers & developers

The rest of this folder is the machine-readable source for the look above — link `styles.css` and the rest follows:

- **`styles.css`** — the single stylesheet to link; pulls in all tokens and the self-hosted fonts (Source Serif 4, IBM Plex Sans Condensed).
- **`tokens/`** — the raw values: `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`. Semantic aliases (`--surface-page`, `--text-body`, `--accent`, `--border`, …) are the editorial light surface and need no theme wrapper.
- **`foundations/*.html`** — specimen cards (Colours, Type, Spacing, Effects, Brand) that populate the **Design System** tab.
- **`components/`** — React primitives on `window.RealfastDesignSystem_e02a4e`: `core/` (Button, Badge, Card) and `editorial/` (Rubric, ShareButton, PullQuote, EditorialBlogCard). Buttons offer red / blue / navy / ink fills plus outline and ghost; everything sits on uniform 2px corners.
- **`templates/`** — the three starting points described above (`presentation/`, `weekly-sprint-report/`, `editorial-article/`).

### Writing voice (for accurate copy)

Plain-spoken, opinionated, technically credible, a little dry — an engineer-operator writing for other operators. Titles are claims, not topics. Back every claim with a specific number. Product names are camel-cased (ExoCode, ExoWork, ExoCortex); the company name is always lowercase **realfast**. British/Commonwealth spelling is fine if kept consistent. No emoji, no exclamation-mark marketing.

### Icons

Use **[Lucide](https://lucide.dev)** outline icons (24×24, \~2px stroke). Don't mix in a second icon set, and never hand-draw bespoke SVG icons to fake one.

### Source of truth

Derived from the realfast `New-Website` editorial blog theme and the live site (`realfast.ai/blog`). Brand colours and fonts were provided; five editorial illustrations and the wordmark are included in `assets/`.
