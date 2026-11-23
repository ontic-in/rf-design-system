The realfast action button. Four kinds of action, each with a light-surface look and a dark-band look (`onDark`). Values come from `tokens/buttons.css`.

```jsx
<Button>Book a call</Button>                                  {/* primary, 44px */}
<Button variant="secondary">See case studies</Button>
<Button variant="link" as="a" href="/case-studies">case study</Button>
<Button variant="destructive">Revoke link</Button>
<Button size="lg" onDark>Book a call</Button>                  {/* inside a navy band */}
<Button iconLeft={<CalendarIcon />}>Book a call</Button>
```

- `primary` — ultramarine light leak (deep #1C2286 lit from below). The main action. **One per view.**
- `secondary` — periwinkle tint #DCE0FF with pale light from below, ultramarine label. The alternative next to a primary.
- `link` — ultramarine #2E3AC8, medium weight, underlined; on hover the secondary tint fills in behind the word. For actions inside sentences and lists.
- `destructive` — pale red tint with pale light, deep red #B42318 label. The only red button; use it for revoke, remove, delete.
- Sizes: `sm` 36px (dense tables), `md` 44px (default: decks, reports, portals), `lg` 52px (website heroes, closing bands). `full` stretches page-level buttons on phones.
- `onDark` switches to the dark-band look: brighter light leak with a halo, glass secondary, coral destructive, periwinkle link.

Rules: decks use the primary only; red only means stop; no arrows on buttons (an optional icon goes on the left); labels say what happens. Old variants (`blue`, `navy`, `ink`, `signal`, `ghost`) still render but map to the new kinds. Plain HTML pages can use the same look with `class="rf-btn"`, `rf-btn--secondary`, `rf-btn--destructive`, `rf-link` and `.rf-on-dark` from `styles.css`.
