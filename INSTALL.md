# realfast-design — Claude Code skill

This bundle is the realfast design system packaged as a [Claude Code skill](https://docs.claude.com/en/docs/claude-code/skills). Claude Code auto-discovers it, reads the brand rules, and can build on-brand HTML or production UI from the terminal.

## Install

**Per repo** (shared with anyone who clones — recommended):

```bash
mkdir -p .claude/skills
cp -R realfast-design .claude/skills/
```

**For all your projects** (personal):

```bash
mkdir -p ~/.claude/skills
cp -R realfast-design ~/.claude/skills/
```

The skill is the `realfast-design/` folder — keep it intact; `SKILL.md` is the entry point Claude Code reads.

## Use

It's `user-invocable`, so just name it:

```
> use the realfast-design skill to build a pricing page
```

Or let Claude pull it in automatically when a request matches its description (branded realfast UI, proposals, reports, articles).

## What's inside

- `SKILL.md` / `readme.md` — the brand guide and how to use it.
- `styles.css` + `tokens/` — the single stylesheet to link (self-hosted fonts + tokens, incl. the `--rf-marketing-*` layer used by the marketing landing template).
- `assets/` + `fonts/` — Source Serif 4, IBM Plex Sans Condensed and Manrope, the wordmark, and the editorial illustration set.
- `components/` — React primitives (`components/core`, `components/editorial`) with `.d.ts` types and `.prompt.md` usage notes.
- `foundations/` — specimen cards (colours, type, spacing, effects, brand, data viz, social content system, website design language).
- `templates/` — 19 ready-to-fill starting points:
  - **Long-form / docs:** `editorial-article`, `weekly-sprint-report`, `case-study`, `case-study-apac`, `presentation`
  - **Web:** `marketing-landing`
  - **Social:** `social-announcement`, `social-blog-carousel`, `social-case-study-carousel`, `social-event-webinar`, `social-executive-voice`, `social-hiring`, `social-infographic`, `social-native-document`, `social-poll-companion`, `social-quote-card`, `social-thought-leadership`, `social-video-frames`, `social-x-card`
- `_ds_bundle.js`, `_ds_manifest.json`, `support.js` — compiled component bundle and runtime the templates load for preview.

## Note for production work

The templates are HTML design references. When implementing in your real app, point Claude at your codebase's stylesheet/component equivalents and use the brand rules in `readme.md` — don't ship the prototype HTML directly.
