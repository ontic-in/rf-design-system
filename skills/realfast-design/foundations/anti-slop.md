# *realfast* Anti-Slop Rules

An extension to the core *realfast* editorial design system: the list of visual and copy
patterns that make an interface read as **machine-generated** rather than designed, and the
short list of places where *realfast* deliberately overrides that warning.

Everything here is additive; the core rules still hold: name always lowercase + italic
(*realfast*), single spaced hyphens (no em-dashes), US spelling fine if consistent, no emoji,
one red accent used sparingly, plain-spoken and specific voice.

"Slop" is not a synonym for "bad". Most of these patterns are competent in isolation. They are
banned because every generator reaches for them by reflex, so shipping one tells the reader the
work was defaulted into rather than decided.

---

## 1 · The *realfast* slop test

Before anything ships, read it cold and ask:

1. Could this have come out of any generator, for any company, with the logo swapped?
2. Is every accent doing work, or is some of it decoration standing in for a decision?
3. Does the copy say a specific thing, with a real number, in our voice?

A "no" on any of the three means the piece is not finished.

---

## 2 · Hard bans

These never ship in *realfast* work. No case-by-case exceptions.

| Pattern | Why it is out |
|---|---|
| **Gradient text as a default** | Reserved. See the override in §3; anywhere outside that recipe, text is a solid color. |
| **Purple/violet gradients, cyan-on-dark** | The single most recognizable generated-UI palette. Our palette is red, blue, navy, ink on paper. |
| **Glowing shadow accents / radial halos / spotlight glows** | A colored blurred halo behind a hero or card. The system is almost shadowless; it relies on hairline rules, not elevation, and never on chromatic light. |
| **Icon tile stacked above a heading** | The rounded-square icon container above a feature-card title is the universal generator template. Set the icon inline or beside the heading. |
| **Thick side-tab accent borders** | A 3px+ colored border down one side of a card. The system defines exactly two rule weights: 1px hairline (`--border`) and 2px (`--border-rule`). Anything heavier is off-system by definition. |
| **Nested cards** | Cards inside cards. Separate with spacing, type, and hairlines instead. |
| **Bounce / elastic easing** | Dated and tacky. Real objects decelerate. Use ease-out-quart / quint / expo. |
| **Pulsing status dots** | Decorative simulated liveness. Pulse only when the data genuinely changes; otherwise a static, labeled indicator. |
| **Auto-scrolling marquees** | Demands attention it has not earned and hides half its content at any moment. |
| **Decorative blinking cursors** | Fake typing where no input exists. |
| **Shape-assembled SVG "illustration"** | A hero-scale picture built from primitive shapes reads as clip art. We have 40+ real risograph illustrations in `assets/illustrations/`. Use them. |
| **Decorative grid-line backgrounds** | Hairline gradient grids tiled at a fixed cell. Reserve for actual canvas, map, or measurement surfaces. |
| **Repeating-gradient stripes as surface texture** | Reach for a deliberate texture or leave the surface plain. |
| **Image hover scale / rotate** | Imagery sits still. |
| **Crushed letter spacing** | Tighter than the point where characters keep their shapes. Tighten display type optically, not destructively. |
| **Marketing buzzwords** | streamline, empower, supercharge, world-class, enterprise-grade, next-generation, cutting-edge. Say what the product literally does. |
| **"X is theater" framing** | A generated-copy tic. Say plainly what the thing does or does not do. |
| **Aphoristic cadence in voice copy** | Three or more sections landing on "X. Not Y." or "Not a feature. A platform." Once is voice; the pattern is the tell. Normative spec docs are exempt (see §4). |
| **Emoji** | Already a core rule. Restated here because generators reinsert them constantly. |
| **Inter, Roboto, Geist, Plus Jakarta Sans, Space Grotesk, Fraunces** | We have two faces: Source Serif 4 and IBM Plex Sans Condensed. |

---

## 3 · Deliberate overrides

*realfast* knowingly runs four patterns that a generic slop detector flags. They are brand
decisions, not oversights. Each carries a guardrail, and the guardrail is the thing that keeps
the override from decaying back into slop.

| Flagged pattern | Our position | Guardrail |
|---|---|---|
| **Gradient text** | Kept. Gradient accent words are the website's single most recognizable device (`website-design-language.md` §3). | Only 1-2 words per headline, only on dark bands, only from the three published recipes. Never a whole line, never on light paper, never on a metric. |
| **Cream / beige page background** | Kept. Warm cream paper is the editorial system's foundation, chosen against the newspaper reference, not reached for as a safe off-white. | Cream alternates with true white to create reading rhythm. Cream is never the only surface on a page. |
| **Kicker / eyebrow above a heading** | Kept as the **rubric**. A newspaper rubric is a genuine editorial device with 200 years behind it, not a SaaS hero eyebrow. | Rubrics are sentence case, no `text-transform:uppercase`, no letterspacing, in IBM Plex Sans Condensed. An all-caps tracked pill chip above a display headline is still banned. |
| **Serif display headlines** | Kept. Source Serif 4 at display size is the system. | Set **roman**, not italic. Oversized italic serif is the generic AI-startup hero; we are not that. Italic is reserved for the wordmark and true emphasis. |

**Em-dashes are not an override.** The core voice rule is single spaced hyphens. A detector
flagging em-dash saturation in our copy is correct, and the fix is to use the spaced hyphen.

---

## 4 · What does not count

Two things read as slop to an automated scan but are fine in this repo:

- **Flat type hierarchy on foundation specimen cards.** The chrome around a swatch (label,
  hex, token name, caption) is deliberately label-dense and close in size. The scan measures
  the card frame, not the specimen. Judge the specimen.
- **Terse prohibitions in spec documents.** "No arrows on CTA buttons." "Never gradient a
  whole line." That is how a normative spec reads. The aphoristic-cadence ban in §2 applies
  to voice copy that a reader sees, not to internal rules docs.

---

## 5 · Running the check

The [impeccable](https://github.com/anthropics/skills) skill ships a detector that covers most
of §2 mechanically:

```sh
node ~/.claude/skills/impeccable/scripts/detect.mjs --json realfast-design
```

Two caveats:

- This repo has no `package.json`, so the detector runs **DEGRADED** and falls back to regex.
  Custom properties, selector matching, and computed contrast are not evaluated. Findings are
  an undercount, never a clean bill of health.
- It has no knowledge of §3 or §4. Expect standing findings for the gradient accent words, the
  cream surface, and the specimen-card type scales. Triage against this document before
  changing anything.

The parts it cannot check are the parts that matter most: whether the copy says a specific
thing, and whether the piece could have been generated for anyone else.
