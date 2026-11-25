# Design system overhaul: status and decisions

Last updated 25 Nov 2026. Work is **paused pending sign-offs**. This note records every decision so far, what is waiting for approval, and what comes next.

## Waiting on sign-off

| Item | Where | Ask |
|---|---|---|
| Button system | PR #3 (`design/button-system` → `main`) | Approve and merge |
| Colour tokens | PR #4 (`design/colour-tokens` → PR #3) | Approve and merge after #3 |
| Typeface pairing | This branch, `type-explorations/` | Pick a pairing (see Type below) |

Merge order: #3, then #4 (its base switches to `main`), then this branch once type is decided. Releasing means merging, then bumping `version` in `.claude-plugin/plugin.json` (already 1.2.0 on #4).

## 1. Buttons (PR #3, decided)

- Four kinds, each with a light and a navy-band look:
  - **Primary:** ultramarine "light leak", a deep `#1C2286` base lit from below. One per view.
  - **Secondary:** periwinkle tint `#DCE0FF` with near-white light from below.
  - **Link:** ultramarine `#2E3AC8`, medium weight, underlined. On hover it fills with the secondary tint ("tinted pill"). On navy it is white text with a 2px periwinkle `#9AA6FF` underline.
  - **Destructive:** pale red tint with light from below. It is the only red button.
- **Rules:**
  - No red or black CTAs, and no arrows on buttons.
  - 2px corners.
  - A subtle sharp text shadow on filled buttons.
- **Decks are sent, not presented,** so slides use the primary button only: one style on every slide, and no text links on content slides.
- **Code:** `tokens/buttons.css` (`.rf-btn`, `.rf-btn--secondary`, `.rf-btn--destructive`, `.rf-link`, `.rf-on-dark`) and the React `<Button variant onDark size>`.

## 2. Colour tokens (PR #4, decided)

One job per colour:

| Colour | Token | Job |
|---|---|---|
| Ultramarine `#2E3AC8` | `--rf-ultramarine`, `--link`, `--border-focus` | Anything you can click |
| Navy `#191970` | `--rf-navy` | Dark bands |
| Red `#E3120B` | `--brand-flag` (`--rf-red-500`) | One small brand mark per view. Never a button, a number, or on navy or blue |
| Logo blue `#362CFF` | `--rf-blue` | The logo only |
| Ink `#111111` | `--rf-ink`, `--text-strong` | Text |

- **Red ramp:** 50–700, built from `#E3120B`. Tints 50–200 for light surfaces only.
- **Neutrals:** one warm stone ramp, `--rf-stone-50…900`, plus `450` (`#8F8A80`) for input borders. Text roles are set to steps that pass contrast:
  - Body: stone-800.
  - Muted: stone-600, which passes on cream.
  - Faint: stone-500, on white only.
  - Disabled: stone-400.
- **Cream:** a single cream, `#F5F3EF` (`--surface-raised`, `--surface-inset`).
- **Status ("Jewel"):** each status has a mark, a text shade and a tint. The text shades pass 4.5:1.

  | Status | Mark | Text | Tint |
  |---|---|---|---|
  | Good | `#0FA968` | `#0B7A50` | `#E1F5EC` |
  | Warn | `#E8A317` | `#8F6100` | `#FCF2DC` |
  | Bad | `#E5484D` | `#C42B35` | `#FDEAEA` |

  Always pair status colour with an icon, arrow or word. Never use the brand red for status.
- **Charts** (`--chart-*`, validated for lightness, chroma, colour-blind and normal-vision separation):
  - **Categorical:** indigo `#444EAD`, teal `#32A99D`, purple `#8C57AE`, orange `#F0883D`, magenta `#CA518F`.
    - Use them in this order and never cycle them.
    - Scatter plots and maps use cat-1, 2 and 4 only.
    - Teal and orange are under 3:1 on white, so charts that use them print their values or offer a table.
  - **Ordered:** slate `#B5B3D6` → `#41396F`. The alternative is teal `#8EBCC2` → `#004D54`.
  - **Diverging:** indigo arm, grey mid `#DADAE0`, teal arm. Never red and green.
  - **Highlight:** context `#D3D2E7`, focus `#6D5DA5`.
- **Badges:**
  - neutral (stone).
  - product (navy tint `#E3E4F3`, so ultramarine stays the action colour).
  - category (stone with a red dot).
  - good, warn and bad (Jewel).
- **Card:** the `accentTop` line is an ink rule, never red.
- **Deprecated aliases,** kept for one release: `--rf-ed-*`, `--rf-neutral-*`, `--rf-paper-cream-2`, `--accent`.

## 3. Type (exploring, not decided)

**Problem.** Pages carry three voices: Source Serif 4, IBM Plex Sans Condensed and mono.
- Condensed is used at 9–13px for labels and captions, where it is hardest to read.
- Mono has crept into numbers and meta lines.
- Source Serif 4 is set too tight by our own tokens (−0.015 to −0.02em), and its display cut has a lot of stroke contrast.

**Target.** Two families:
- A serif for titles and subtitles.
- A regular-width sans for body, labels, data and buttons.
- Mono for code only.
- Free fonts only.

**Combos explored** (scores are futuristic, AI authority and excellence, out of 5):

| | Pairing | F / A / E | Note |
|---|---|---|---|
| A | Literata + IBM Plex Sans | 2 / 4 / 4 | Calm, readable, closest to today; reads "publication" |
| B | Newsreader + Geist | 3 / 5 / 5 | Polished and mature, several weights, on Google Fonts. **Safer pick** |
| C | Instrument Serif + Instrument Sans | 4 / 3 / 4 | The current AI-startup look; generic |
| D | Geist only | 5 / 4 / 3 | One family, very engineered; loses the editorial voice |
| E | Sora + IBM Plex Sans | 5 / 3 / 2 | Least gravitas for finance and ops buyers |
| F | **Geist Serif + Geist** | 5 / 4 / 5 | **Strongest match.** See risks below |

**Geist Serif facts.**
- Released by Vercel on 30 Oct 2026, under the OFL licence.
- Ships via npm `geist` (v1.9.2) and GitHub releases.
- One weight only: the variable font's axis is a shape axis, not weight.
- Not on Google Fonts yet. Vercel says it is coming.

**Risks with F.**
- One weight, so only use it at 26px and up.
- We must self-host it, and deck builders need it installed for PPTX.
- Geist + Geist Serif is Vercel's own look.

**Tooling note.** The pen.dev canvas only renders Google Fonts and ignores fonts installed on the computer (tested after a restart), so Geist Serif can't be designed on the canvas. F is reviewed as HTML instead.

**Sample page.** `type-explorations/case-study-F/index.html` is the higher-ed case study set in F:
- It uses the PR #4 colour tokens and the PR #3 button classes.
- Fonts, tokens and logos are copied into the folder so it opens offline.
- The chat exchange in "The problem" is illustrative, not real.
- The "Download the PDF" button, the "Built on" list and the "Or read another case study" link were added for the mock.

**Decisions needed.**
1. Pairing: F (recommended for the brief) or B (safer).
2. Long blog articles: keep a serif body, or the sans everywhere? Recommendation: sans everywhere, so there is one rule.
3. If F is picked, decide whether to keep Geist or pair Geist Serif with a different sans to avoid the Vercel look.

**Once decided, the type work needs:**
- **Font tokens:** update `tokens/fonts.css` and `tokens/typography.css`.
- **Buttons:** change `--btn-font`. `buttons.css` and its header comment still name IBM Plex Sans Condensed.
- **Letter spacing:** remove the negative tracking tokens.
- **Labels:** retire condensed and mono labels.
- **Templates:** sweep them for type.

## 4. Backlog after sign-off

1. Merge #3 and #4, then delete the `pr-assets` branch, which only holds the PR screenshots.
2. **Red misuse clean-up.** Remove:
   - Rubric red.
   - Red words in headlines.
   - Red hover and active states.
   - Red glows on dark bands.

   Then update the website-design-language rules.
3. **Template sweep.** 19 templates, about 256 red references, plus type once decided.
4. Type tokens, after the type decision.
5. Plain-HTML starters, an `rf-check` linter, a diagram kit, and a decision tree in SKILL.md.

## 5. Where the design work lives

- **Canvas:** `branding_canvas.pen` at the repo root. It is local and not committed (see `.gitignore`). Frames:
  - "Red CTA fix"
  - "Buttons: final system"
  - Palette and moodboard
  - "Colour tokens: cleanup"
  - "Status, data and dark-band calls"
  - "Neutrals, charts, badges, dark link"
  - "Chart sections: website mockups"
  - "Type: two families"
  - "Type: combos"
- **Canvas images:** `images/` (moodboard, type renders). Local only.
- **Analysis report** of the eight example artefacts, with Slack feedback: https://claude.ai/artifact/QFyAATTpyLAUvdbNhCh8zn
- **Fonts on this Mac:** Geist Serif is installed in `~/Library/Fonts/` for desktop apps.
