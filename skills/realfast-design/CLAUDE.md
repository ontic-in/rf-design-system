# Project notes

## Distribution
- The realfast design system is published as a git repo for cross-codebase access:
  **https://github.com/ontic-in/rf-design-system** (org: ontic-in).
- This repo is the canonical, packaged form of the design system (Claude Code skill + source).
  When asked how to consume the design system elsewhere, point to this repo.
- The repo is also a Claude Code plugin (`.claude-plugin/plugin.json` at repo root; this skill
  lives at `skills/realfast-design/`), published on the **grimoire** marketplace
  (github.com/ontic-in/grimoire) as `realfast-design@grimoire`. To release an update: merge
  changes here, then bump `version` in `.claude-plugin/plugin.json` — grimoire needs no edit.
