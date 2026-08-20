# *realfast* Website Design Language

An extension to the core *realfast* editorial design system, dedicated to the **marketing website** (About, People & Culture, Security, and future long-scroll pages). The core system defines the print/editorial look; this layer defines how that look behaves on a **dark-punctuated, animated, full-bleed scrolling web page**.

Everything here is additive - the core rules still hold: name always lowercase + italic (*realfast*), single spaced hyphens (no em-dashes), US spelling fine if consistent, no emoji, one red accent used sparingly, plain-spoken and specific voice.

---

## 1 · The website look in one line

**An editorial newspaper that scrolls like a story.** Warm paper and cream sections alternate down the page, punctuated by a few deliberately premium near-black bands. Serif headlines carry gradient-filled accent words. Everything arrives on scroll with restrained motion. No boxes, no divider lines - sections flow into one another on soft shadow alone.

Three website-specific rules:
1. **Dark bands are never flat black.** They always carry a layered gradient + red glow + hairline highlight (see §4).
2. **Sections never touch with a hard line.** Continuity comes from a soft shadow the band casts onto the next, not a `border` or `<hr>`.
3. **Accent words are gradient-filled**, not flat color (see §3).

---

## 2 · Color (website usage)

Built on the core tokens; the website leans on these semantic roles:

| Role | Value | Use |
|---|---|---|
| Accent red | `#E3120B` (`--accent` / `--rf-red-500`) | CTAs, rubrics, active states, focal detail |
| Light red (on dark) | `#F0524D` (`--rf-red-400`) | accent words / rubrics on dark bands |
| Ink base | `#111111` | body text on light |
| Paper | white `#FFFFFF` | primary light band |
| Cream | `--surface-raised` (warm off-white) | alternating light band |
| Dark-band charcoals | `#1d1c1a → #121211 → #0c0c0b` | premium ink gradient (see §4) |
| Final CTA black | from `#050505` | deepest band, page close |

Alternating light sections **white → cream → white** create reading rhythm. Warm greys (`#57534A`) carry secondary UI (icon glyphs at rest) so red stays reserved.

---

## 3 · Gradient accent words (signature)

The website's single most recognizable device. Key words inside serif headlines on dark bands are **gradient-filled via `background-clip:text`** instead of a flat color.

```css
/* red accent words: "metric", "shipped", "AI", "senior engineer", "honest", "safe", "foundation" */
background: linear-gradient(100deg, #ffb3ae 0%, var(--rf-red-400) 55%, #c00d07 100%);
-webkit-background-clip: text; background-clip: text; color: transparent;

/* white accent words: "features", "humans", "architects" */
background: linear-gradient(100deg, #ffffff 15%, #d8d3c8 85%);
-webkit-background-clip: text; background-clip: text; color: transparent;

/* mission / closing phrase (longer, warmer sweep) */
background: linear-gradient(100deg, #f0554f 0%, #E3120B 45%, #a30b06 100%);
```

Rules:
- Use only on **1-2 words per headline** - the contrast word pair (e.g. AI *vs* humans, features *vs* metric). Never gradient a whole line.
- On italic words add `padding-right:.05em` so the clip doesn't crop the terminal stroke.
- Base headline color stays a dim white (`rgba(255,255,255,.66)` / `--rf-ed-faint`) so the gradient words pop.
- The pattern encodes meaning: on this site red = machine/AI, white = human judgment. Keep that mapping consistent.

---

## 4 · Premium dark bands

Dark sections (hero, final CTA, the occasional ink chapter) are **never flat `background:#111`**. They stack:

```css
background:
  radial-gradient(ellipse 85% 65% at 50% -12%, rgba(227,18,11,.22), transparent 62%),  /* red glow from top edge */
  radial-gradient(ellipse 60% 45% at 85% 110%, rgba(227,18,11,.08), transparent 65%),  /* faint secondary glow */
  linear-gradient(180deg, #1d1c1a 0%, #121211 55%, #0c0c0b 100%);                       /* charcoal vertical gradient */
box-shadow:
  inset 0 1px 0 rgba(255,255,255,.07),        /* hairline top highlight */
  inset 0 -40px 80px rgba(0,0,0,.35);         /* soft bottom vignette */
```

Variants:
- **Hero**: glow radiates from the **top** edge (entering the page).
- **Final CTA band**: glow rises from the **bottom** behind the buttons; gradient runs dark-to-warm downward; starts from `#050505`.
- **Inline ink chapter** (e.g. a metric/quote section mid-page): milder - glow `.16`, gradient `#1c1b1a → #0e0e0d`, plus a faint light border so it reads as an elevated dark card within light surroundings.

The intent: depth and warmth, so dark bands feel like premium print stock, not a PowerPoint black slide.

---

## 5 · Seamless section flow (no rules, no boxes)

Full-bleed sections stack edge to edge. **Never** separate them with a `border`, `<hr>`, or a floating card with margins. Continuity is a soft shadow each band casts onto the next:

```css
/* light band */
box-shadow: 0 24px 40px -32px rgba(17,17,17,.14);
position: relative; z-index: 1;

/* inset variant (chapter-style, shadow reads at the top of the receiving band) */
box-shadow: inset 0 28px 32px -30px rgba(17,17,17,.18);   /* ink band: rgba(0,0,0,.55) */
```

Chapters/sections are **full-bleed alternating white/cream** - not rounded cards. (An earlier iteration used floating rounded cards with borders; that was removed. Content cards *inside* a section still exist - see §6 - but the section shells themselves do not.)

Rubrics get **no hairline rule** beside them.

---

## 6 · Cards (the "premium" content-card system)

For content blocks *within* a light section (principle cards, strip cards, panels):

```css
border: 4px solid #fff;
background: linear-gradient(165deg, #ffffff 0%, var(--surface-raised) 60%);  /* not flat cream */
border-radius: 24px;  /* 20px mobile · 12px tiles/avatars · 999px pills */
box-shadow: 0 6px 18px rgba(17,17,17,.08), 0 20px 44px rgba(17,17,17,.1);   /* layered: tight contact + soft ambient */
transition: transform .35s ease, box-shadow .35s ease;
```

- **Hover:** lift `translateY(-3px)`, shadow deepens.
- **Padding:** roomy - desktop ~36-44px sides / 40-48px bottom; mobile ~34px 30px 38px. Cards must breathe.
- **No internal seams:** an illustration container inside a card has **no background of its own** and no divider line between image and text.
- Portrait/photo cards: 4px white border + the layered shadow, B&W at rest → color on hover, lift `-5px`.

---

## 7 · Iconography

Core system uses Tabler outline; the website adds a **premium icon-chip treatment** for repeated icon buttons (social/profile links, feature chips):

```css
/* 34px desktop · 40px mobile circle */
background: linear-gradient(145deg, #ffffff, var(--surface-raised));
border: 1px solid var(--border);
box-shadow: inset 0 1px 0 rgba(255,255,255,.9), 0 2px 6px rgba(17,17,17,.06);
color: #57534A;  /* warm-grey glyph at rest - NOT red */
```

- **Hover:** red border + red glyph + red-tinted shadow + `-1px` lift.
- Feature/section icons: 56px gradient chips, hairline ring + inner highlight, finer 1.75px strokes in deep warm ink, duotone soft fills inside closed shapes.
- Red is **reserved** - icons rest in warm grey, red only on hover or for CTAs/rubrics.
- Filled Bootstrap-style 13px glyphs are acceptable inside the small profile chips (LinkedIn / GitHub / blog-author RSS) where a consistent filled set reads better at tiny sizes.

---

## 8 · Typography (website scale)

Core faces unchanged - **Source Serif 4** (headlines/body/quotes), **IBM Plex Sans Condensed** (labels/rubrics), monospace (counts/figures).

**Rubrics / kickers are SENTENCE CASE.** No `text-transform:uppercase`, no letterspacing. Bold, red, sans. E.g. "About realfast", "Our mission", "How we're built", "The model", "Join us". They should stand out by weight and color, not by shouting.
*(Exception: tiny meta rows like a city-name strip under a map may stay small uppercase.)*

Indicative scale:

| Element | Desktop | Mobile |
|---|---|---|
| Hero headline (serif) | 68-74px | 34-44px |
| Section headline (serif) | 44-88px | 28-46px |
| Standfirst / lede | 21-33px | 16.5-21px |
| Body | 17-18px | 15.5-16px |
| Rubric (sans) | 15-17px | 14px |
| Rail numeral (serif) | 44px | 32px |

Titles are claims, not topics. Back claims with real numbers.

---

## 9 · Motion

Restrained, editorial, one-shot. Decorative motion cheapens the tone.

- **Scroll reveal:** IntersectionObserver, threshold ~0.08-0.1, fade-up 14-16px, 550-600ms `cubic-bezier(.22,.61,.36,1)`, fires once. Re-observe rows rendered after filter/accordion changes.
- **Cards:** rise with a subtle scale-in (`translateY(30px) scale(.97)` → none).
- **Directional sweep (desktop long-scroll):** alternating chapters slide in from opposite sides (`translateX(±56px)`).
- **Hero "beats":** headline arrives in stages - line 1, then line 2 (~240ms later), then scroll cue (~400ms), each a fade-up. Scroll cue arrow bounces gently (infinite, subtle).
- **Gradient / underline draws:** accent underline draws left→right on section entry.
- **Quote / secondary content:** fades in ~400ms *after* the primary body so the eye lands on the headline first.
- **Failsafe:** only force-reveal everything if the observer *never* fired (~3s with zero `.is-in`). **Do NOT** blanket-reveal on a timer - a naive timeout kills the scroll animations.
- Wrap all motion in `@media (prefers-reduced-motion: reduce)` and disable transforms there.
- **No** parallax, no Ken Burns on faces, no auto-playing carousels of people - dignity over spectacle.

---

## 10 · CTAs

- **Primary:** red-fill pill (`--rf-red-500`), 999px radius, ~17px 32px padding, white text.
- **Secondary:** ghost pill - transparent, `1px` border at 65% white on dark bands (must read clearly, not barely-there), fills to solid white on hover. Identical height/padding/radius to the primary so they read as a set.
- **No arrows on CTA buttons.** (Arrows were tried and removed - keep buttons clean; a hover micro-lift/glow is the affordance.)
- **Hover:** soft red glow shadow (`0 8px 32px rgba(227,18,11,.35)`) on the primary; both may rise-in with a slight stagger on entry.
- Mobile: buttons stack **full-width**.
- Real destinations: careers → `/careers`, apply → `join.realfast.ai`, contact → `/contact`, people → `/people`.

---

## 11 · Long-scroll page anatomy (the "spine" pattern)

The About page established a reusable structure for narrative pages:

1. **Site nav** (existing header component).
2. **Premium ink hero** - sentence-case kicker, big serif headline with gradient contrast words, two-beat entrance, scroll cue. Optional dim rail numeral ("00").
3. **Mission / standfirst band** (cream, centered, no rules) - one bold idea, closing phrase in the red gradient.
4. **Numbered chapters** - full-bleed alternating white/cream, seamless shadow flow. Desktop: `170px | 1fr` grid with a **sticky left rail** per chapter (44px serif numeral + sentence-case bold label). The **active chapter's numeral turns red and scales ~1.08** as it enters the viewport (dim grey at rest; on ink bands dim white → light red). One chapter may be a premium ink band.
5. **CTA band** (premium black gradient) - contrast-word headline, two pills, no arrows.
6. **Footer** (existing component).

**Explicitly not part of the pattern:** no sticky utility/label bar, no scroll-progress line. Both were tried and removed - they add chrome without helping the narrative.

Active-chapter logic: active = the last chapter whose top ≤ 45% of viewport and bottom > 25%.

---

## 12 · Directory / roster pattern (People page)

For listing people at scale:

- **Filter chips** (inline row, not a dropdown): All · Leadership · GTM and AI Transformation · Engineering · Salesforce · Program Management · Lead Forward Deployed Engineers · Forward Deployed Engineers. **Full-length group names, no abbreviations** ("Program Management" not "PgM"). Active chip = ink fill + white text; labels never wrap. Mono "N people" count below. No search field.
- **Department accordions:** sentence-case bold header (15px / 14px mobile) + red mono count + chevron (rotates 180° open), 1px hairline. Leadership open by default; selecting a chip auto-opens that department. Role titles spelled out in full ("Program Manager", "Forward Deployed Engineer").
- **Person row:** B&W photo → color on hover, name, role, then premium icon chips (§7) linking blog-author page / LinkedIn / GitHub (hidden if none).
- **Photos:** subtle B&W/duotone at rest for cohesion; normalize crops so eyes sit on a consistent line (`background-position` tuned per person).

---

## 13 · Imagery

- Core signature (muted risograph spot illustration on cream) still applies for editorial/illustrative slots.
- The website adds **B&W / duotone photography** for people (warm, low-contrast, not glossy) and a **3D render** slot for the map/locations moment (16:9 desktop / 16:10 mobile, 12-14px radius). If a diorama video is supplied use `<video muted loop autoplay playsinline>`; otherwise ship the still.
- Investor / partner logos render in **ink on light** (export ink versions; don't rely on a CSS `brightness(0)` filter in production).

---

## 14 · Do / Don't recap

**Do**
- Flat paper + cream rhythm, premium dark punctuation.
- Gradient contrast words, sentence-case red rubrics.
- Seamless shadow flow between sections.
- Layered card shadows + hover lift, roomy padding.
- Warm-grey icons at rest, red on hover.
- One-shot scroll reveals, reduced-motion safe.

**Don't**
- Flat black bands, hard divider lines, floating bordered section cards.
- All-caps letterspaced rubrics, arrows on CTAs, barely-there ghost borders.
- Blanket timer-reveal (kills scroll motion), parallax/Ken Burns on faces.
- Red on resting icons, more than 1-2 gradient words per headline.
- Any color outside the brand + illustration token set.
