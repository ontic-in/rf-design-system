# *realfast* Video Design Language

An extension to the core *realfast* editorial design system, dedicated to **generated video** — NotebookLM Video Overviews, explainers, launch films, case-study cuts, recruiting clips and social video.

Everything here is additive; the core rules still hold: name always lowercase + italic (*realfast*), single spaced hyphens (no em-dashes), US spelling fine if consistent, no emoji, one red accent used sparingly, plain-spoken and specific voice.

Two documents pair with this one:
- `social-content-system.html` — the operating rules, voice editor and format specs this layer inherits.
- `website-design-language.md` — the dark-band and gradient-accent recipes referenced in §3.

---

## 1 · The video look in one line

**An editorial page that moves, and says out loud what it shows.** Warm paper and cream frames alternate, punctuated by a single premium near-black band at the close. Serif headlines carry the argument. Every spoken claim also appears as words on screen. Motion is restrained — the film should feel *edited*, not *animated*.

Four video-specific rules:

1. **Nothing is spoken that is not also written.** Every claim and every number appears on screen as it is said (§4). A viewer with the sound off gets the whole argument.
2. **Light dominant, dark reserved.** Open on paper or cream. The dark band is the close, and only the close.
3. **One idea per frame.** One hero — a number, a headline, or a line. Two heroes means two frames.
4. **Hard cuts.** No wipes, crossfades, page-turns, or dissolves between beats.

---

## 2 · Color

The single source of truth is `tokens/colors.css`. For video, use these roles. The **plain-language column matters** — generative tools respond to described color far more reliably than to hex, so always give both.

### Grounds

| Role | Hex | Describe it as | Use |
|---|---|---|---|
| Paper | `#ffffff` | pure white, uncoated paper stock | the default ground, most frames |
| Cream | `#f5f3ef` | warm off-white, a faint oatmeal tint | the alternating ground |
| Cream 2 | `#f1ebe0` | deeper warm sand | rare, for a third light step |
| Dark band | `#1d1c1a → #121211 → #0c0c0b` from `#050505` | warm near-black, like rich print stock — never neutral grey, never pure black | the closing frame only (§3) |

Alternating **paper → cream → paper** creates the reading rhythm. Never two adjacent frames on the same ground at the same weight.

### Text

| Role | Hex | Describe it as | Use |
|---|---|---|---|
| Ink | `#121212` | near-black with a warm cast | all headlines and body on light |
| Muted | `#6e6e6e` | mid warm grey | sub-labels, captions, secondary lines |
| Faint | `#9a9a9a` | light warm grey | tertiary, timestamps, indices |
| Dim white | `rgba(255,255,255,.66)` | soft off-white, not bright | base headline text on the dark band |
| White | `#ffffff` | pure white | the wordmark and URL on dark |

### Accent

| Role | Hex | Describe it as | Use |
|---|---|---|---|
| Signal red | `#e3120b` | a deep newspaper red, slightly warm — not orange, not crimson | the one accent |
| Light red | `#f0524d` | a lifted coral-red | red on the dark band only |
| Link blue | `#1370fb` | clean editorial blue | URLs and links only, never decoration |

### Sequences, series and charts

Any ordered set — bars, layers, steps, stages — uses the value ramp, light to dark. Never rainbow, never red.

| Step | Hex | Describe it as |
|---|---|---|
| 1 | `#c3d0dc` | pale dusty blue |
| 2 | `#7d97b5` | muted slate blue |
| 3 | `#3e4c6e` | deep slate navy |

`--success` `#1f9d6b` (muted forest green) is reserved for a terminal "done / complete" state. Nothing else.

### Illustration

Muted, chalky, risograph-grained spot art on a pure-white ground. Mass in **warm charcoal `#3a3733`** and **warm grey `#9a948c`** — never flat black. Accents in dusty blue `#7d97b5`, slate navy `#3e4c6e`, dusty violet `#8b84a8`. Pale blue `#c3d0dc` and bone `#edeae4` for depth faces. Signal red held for one focal detail. Low contrast, generous negative space.

### The red rule — non-negotiable

- **One red element per frame. Maximum.** If two elements compete for red, one of them is grey.
- Red is never a background fill, never a ground, never a full-frame color.
- Red is never a data series and never more than one bar, node or segment.
- On the dark band the mapping is fixed: **red = machine / AI, white = human judgment.** Hold it consistently or drop it entirely.

### Banned outright

No purple, magenta, teal, orange, yellow, or gradient-hue grounds. No neon, no glow, no color that is not in this section. No traveling or shifting background hue. If a frame needs a color this document does not list, the frame is wrong — flag the gap rather than invent a color.

---

## 3 · The dark band (the close)

Dark frames are **never flat**. They stack, per `website-design-language.md` §4:

```
background:
  radial-gradient(ellipse 85% 65% at 50% 108%, rgba(227,18,11,.20), transparent 62%),  /* red glow, bottom edge */
  linear-gradient(180deg, #1d1c1a 0%, #121211 55%, #0c0c0b 100%);                       /* warm charcoal */
box-shadow:
  inset 0 1px 0 rgba(255,255,255,.07),   /* hairline top highlight */
  inset 0 -40px 80px rgba(0,0,0,.35);    /* soft bottom vignette */
```

On the closing band, one or two words may be **gradient-filled in red** while the rest of the line holds at dim white:

```
linear-gradient(100deg, #ffb3ae 0%, #f0524d 55%, #c00d07 100%)
```

Only the contrast word — *metric*, *shipped*, *Thursday*, *AI*. Never a whole line.

The intent: depth and warmth, so the close feels like premium print stock, not a PowerPoint black slide.

---

## 4 · Words on screen (the rule that defines this layer)

**Every claim spoken is also written.** This is not captioning — it is design. Two separate things ship on every video:

1. **On-screen words** — designed, typeset, part of the composition. Condensed from the narration, not a transcript.
2. **Captions** — a separate `.srt` for accessibility, verbatim, platform-rendered. Never burned in.

### Condensing narration into on-screen words

On-screen text carries the *claim*, not the sentence.

| Narrator says | On screen |
|---|---|
| "We are an applied-AI strategy and engineering firm." | Applied-AI strategy and engineering. |
| "Traditional IT services are built on layers. Process, management, delay." | Process. Management. Delay. |
| "Forty-seven days to rewire a legacy exchange link." | **47 days** / to rewire a legacy exchange link |
| "The people who scope your problem build the system that solves it." | No hand-offs. |

Rules:

- **3–7 words per frame.** A full spoken sentence on screen is a wall, not a design.
- **One text block per frame.** A hero line plus at most one sub-label. Never two competing blocks.
- **Numbers are always written.** A spoken figure without its numeral on screen is a defect. The numeral is the hero; the unit and context are the sub-label.
- **Sentence case with a terminal period.** Never all caps, at any size.
- **Verbatim or tighter, never different.** On-screen words may cut from the narration but must never say something the narration doesn't.

### Timing

- Text appears **on or ~200ms before** the narrator reaches the phrase. Never after.
- It **holds for the whole phrase** and cuts on the next beat. No lingering, no early exit.
- Minimum hold: **1.2 seconds**, or `0.3s × word count + 0.5s`, whichever is longer.
- Numbers **cut in at full value**. Never count up, never odometer, never roll.
- Text never animates out. It cuts.

### Placement and legibility

- Text lives in the **middle third** of the frame, inside the safe margin.
- Minimum size **32px at 1080 wide** for any text a viewer must read. Sub-labels no smaller than 26px.
- Never over busy illustration — give art its own frame, or its own clear air.
- Never over the dark band's glow hotspot; keep the line above or below it.
- No text plate, scrim, drop shadow, or stroke behind type. If contrast fails, change the ground.

---

## 5 · Formats and safe zones

Build at the exact pixel size. Safe margin is **~8% of the shortest edge** on every side.

| Format | Size | Safe margin | Extra clearance |
|---|---|---|---|
| Vertical (Reels / Shorts / TikTok) | 1080 × 1920 | 88px | keep text clear of the **bottom 320px** and **top 220px** — platform UI |
| Square | 1080 × 1080 | 88px | — |
| Landscape (YouTube / site embed) | 1920 × 1080 | 96px | — |
| LinkedIn native | 1080 × 1350 | 88px | bottom 200px |

Hero numbers may break the type scale upward — they are the focal element — but never the safe margin.

---

## 6 · Typography

Exactly two faces. Never a third.

- **Source Serif 4** — every headline, hero number, on-screen claim. 600 for display, 400 for body. Tracking `-0.015em` above 60px.
- **IBM Plex Sans Condensed** — furniture only: sub-labels, node names, captions, indices, the URL. 500/600.

Scale at 1080 wide (scale proportionally for other frames):

| Element | Size | Face |
|---|---|---|
| Hero number | 200–320px | serif 600 |
| Headline / claim | 52–96px | serif 600 |
| Body / card line | 32–52px | serif 400 |
| Sub-label / caption | 26–30px | sans condensed 600 |

Sentence case throughout. Emphasis via italics only, never caps, never underline, never bold-in-serif-display.

---

## 7 · Shape, space, surface

- **2px corner radius** on every card and tile. Pills (`999px`) only for a rubric badge. Nothing else is rounded.
- Almost shadowless — depth is hairlines, not elevation. If a card must lift: `0 1px 3px rgba(18,18,18,.06)`. Nothing heavier.
- No frame is more than **~60% type**. Fuller than that, cut a line.
- Frames butt edge to edge. Never separated by a border, rule, or divider.
- Spacing on a 4px base: 8 / 16 / 24 / 32 / 48 / 64 / 96.
- The only bullet permitted is the **8px red square**. 1px hairline for in-content rules; 2px ink rule under a masthead or as a strike-through.

---

## 8 · The wordmark

- Always lowercase **realfast**. Never "Realfast", never "REALFAST".
- Ink on light; white on the dark band. **Never the white mark on a light ground.**
- Never recolored, distorted, rotated, outlined, or animated.
- It appears on the **closing frame only** — once. A film does not need a bug in the corner to read as *realfast*.

---

## 9 · Motion

- Entrances: `cubic-bezier(.16, 1, .3, 1)` at **360ms**.
- Everything else: `cubic-bezier(.2, 0, 0, 1)` at **200ms**.
- **One move per frame.** Hard cuts between beats.
- Push-ins are permitted on an opening illustration frame only, and slowly.
- The final 2 seconds are completely static — no motion, no zoom, no fade.

**Banned:** parallax, bounce, elastic, spring overshoot, letter-by-letter typewriter, counting-up numbers, camera shake, lens flare, particle systems, glow pulses, Ken Burns on faces, page-turns, 3D card flips, sparkle and AI-shimmer glyphs, hand-drawn scribble or marker annotation.

---

## 10 · Structure

Six beats. Cut or merge, never reorder. Beat lengths assume a 40–60s film; compress proportionally for shorter cuts.

| Beat | Length | Carries |
|---|---|---|
| **Hook** | 4–8s | the sharpest claim in the source. A number or a contrast. Never a definition. |
| **Identity** | 4–6s | what we are, in one line. The only place a definition belongs. |
| **Problem** | 5–8s | the thing being wrong today. One idea. |
| **Method** | 6–10s | how it works. The place a diagram earns its keep. |
| **Proof** | 5–10s | the numbers, one at a time, each on its own frame. |
| **Close** | 4–6s | the dark band. One line, the wordmark, the URL. Static. |

Per video type, the emphasis shifts:

- **Explainer** — Method is the longest beat; Proof may be a single figure.
- **Case study** — Proof is the longest beat; Problem carries the before-state.
- **Launch / product** — Hook and Identity merge; Method shows the thing working.
- **Recruiting** — Problem becomes "what the work is like"; Proof becomes people, not metrics.
- **Thought leadership** — Hook is the claim, Method is the argument, Proof may be absent. Credibility tone, less salesy.

---

## 11 · Voice (every spoken and written word)

Inherits the voice editor in `social-content-system.html` §6. For video specifically:

- **Short declaratives.** Video has no re-reading. A sentence a viewer must hear twice is a rewrite.
- Contractions always. Sentence case. US spelling, consistently.
- Asides use a single spaced hyphen `-`, never an em-dash.
- *realfast* always lowercase.
- Cut every hedge, filler transition, and word removable without changing meaning.
- Read the script aloud at 145 wpm against the beat map before building. If it doesn't fit, cut words — never speed up the read or shorten a hold.

**Banned:** leverage, synergy, seamless, unlock, game-changing, revolutionary, transform (as a verb of ours), any exclamation mark, and the mirror-punch construction "That isn't X, that's Y."

---

## 12 · Source discipline

- Content comes only from the sources named in the brief. No invented client, metric, capability or quote.
- **Every number on screen must appear in a source.** No rounding up, no "over", no derived figures.
- Anonymize clients unless the source names them and it is approved — "a $100M-$1B consumer fintech", never a real name.
- If a source is too thin to fill a beat, **drop the beat and say so.** A shorter honest film beats a padded one.
- Design system documents are **visual direction only** — never a content source. If they are uploaded to a generation tool alongside real sources, say so explicitly in the brief.

---

## 13 · Working with NotebookLM

What it will honor reasonably well:

- Narration script, near-verbatim, if you supply it.
- Tone, pacing, and audience direction.
- On-screen text content, and the instruction that every claim appear as words.
- Described color and mood ("warm off-white ground, near-black serif headline, one deep newspaper-red accent").
- Structural direction — beat count, one idea per frame, what opens and what closes.

What it will not honor, and you should plan around:

- **Exact hex values and fonts.** It has no access to Source Serif 4 or IBM Plex Sans Condensed. Naming them plus describing them ("a high-contrast editorial serif; a narrow grotesque sans for labels") gets a lookalike. Expect drift.
- **The wordmark.** It will render *realfast* as type, not as the mark. Either accept it or composite the real mark in post.
- **Frame-accurate timing**, kinetic typography, music-synced cuts, and the layered dark-band gradient.
- **Illustration style** with any precision. Describe it and accept approximation.

Practical setup:

1. Upload the real content sources (homepage copy, case study, blog) as sources.
2. Upload or paste this document as a source **and state in the prompt that it is visual direction only**.
3. Paste the short block in §14 into the customization prompt.
4. Expect to composite the wordmark and the closing frame in post if the close matters.

If a video genuinely needs kinetic typography, music-synced cuts, or the real dark-band gradient, NotebookLM is the wrong tool — brief a motion designer against §1–§11 instead.

---

## 14 · The standing paste block

Paste this into the NotebookLM customization prompt. Fill the four brackets; leave everything else alone.

```
Make a [DURATION]-second [ASPECT] video for [AUDIENCE], from the attached
sources only. Objective: [WHAT ONE THING THE VIEWER SHOULD DO OR BELIEVE].

Every claim the narrator speaks must also appear on screen as words - 3 to 7
words per frame, condensed from the narration, sentence case with a period.
Every number spoken appears on screen as a numeral, large, with its context
as a small label beneath. Text appears as it is said, holds for the whole
phrase, then cuts. Never a full sentence on screen. One idea per frame.

Look: an editorial newspaper that moves. Warm off-white and pure-white
grounds alternate. Headlines in a high-contrast editorial serif, near-black
with a warm cast. Small labels in a narrow grotesque sans, mid warm grey.
One accent only - a deep newspaper red, slightly warm, never orange - used
on a single element per frame and never as a background. Sequences and bars
use pale dusty blue to deep slate navy. Any illustration is muted, chalky,
risograph-grained spot art on white, mass in warm charcoal, generous
negative space. Square corners, hairline rules, no shadows, no boxes.

The final frame only is dark: warm near-black like rich print stock, never
flat black, with a soft red glow at the bottom edge. It carries one line,
the word realfast in lowercase, and the URL. It is completely static.

No purple, magenta, teal, orange or yellow. No gradients as grounds. No
glow, sparkle, particles, or shimmer. No counting-up numbers. No all-caps.
No em-dashes - use a single spaced hyphen. No exclamation marks. Never
capitalise realfast. Sentence case everywhere.

Narrator: a peer, not a pitch. Plain-spoken, specific, unhurried, ~145 wpm.
Short declaratives. No hype words - no revolutionary, seamless, unlock,
leverage, game-changing.

Use only facts, numbers and quotes present in the sources. Invent nothing.
If a source is too thin for a section, drop the section and say so.
Any design system document attached is visual direction only - never take
content, claims or facts from it.
```

---

## 15 · Do / Don't recap

**Do**
- Write on screen everything the narrator says. Numbers always.
- Open light. Alternate paper and cream. Save the dark band for the close.
- One hero per frame; one red element per frame.
- Hard cuts on beats; 360ms ease-out entrances; a dead-static final 2 seconds.
- Two faces only — editorial serif for claims, condensed sans for labels.
- Hero numbers cut in at full value, unit and context as a small label.
- Ship a separate `.srt` alongside the burned-in on-screen words.
- Read the script aloud against the beat map before a frame is built.

**Don't**
- Speak a claim that isn't written, or write a sentence where a phrase would do.
- Open on black, or use the dark band more than once.
- Put two red things, two heroes, or two text blocks in one frame.
- Introduce a color, face, or shape outside this document — flag the gap instead.
- Count numbers up, animate text out, or cross-fade between beats.
- Use red as a ground or a data series.
- Stamp the wordmark on every frame, or let a tool generate it as type when the real mark matters.
- Pad a beat with an invented figure, a mocked-up screen, or a stock analogy.
