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
- `styles.css` + `tokens/` — the single stylesheet to link (self-hosted fonts + tokens).
- `assets/` — Source Serif 4 + IBM Plex Sans Condensed fonts, the white-fill wordmark, five editorial illustrations.
- `components/` — React primitives (Button, Badge, Card, Rubric, ShareButton, PullQuote, EditorialBlogCard) with `.d.ts` types and `.prompt.md` usage notes.
- `foundations/` — specimen cards (colours, type, spacing, effects, brand).
- `templates/` — three ready-to-fill starting points: presentation deck, weekly sprint report, editorial article.
- `_ds_bundle.js` — compiled component bundle the templates load for preview.

## Note for production work

The templates are HTML design references. When implementing in your real app, point Claude at your codebase's stylesheet/component equivalents and use the brand rules in `readme.md` — don't ship the prototype HTML directly.
