The realfast action button — use for any primary or secondary CTA; it adapts to the active surface (blue on dark product, red in editorial) via semantic tokens.

```jsx
<Button variant="primary" size="md">Book a Demo</Button>
<Button variant="secondary">Learn more</Button>
<Button variant="signal" iconRight={<span>→</span>}>Get started</Button>
```

Variants: `primary` (accent fill), `signal` (red), `ink` (raised neutral), `secondary` (outline), `ghost` (text-only). Sizes: `sm` / `md` / `lg`. Pass `as="a"` with `href` for links, `full` to stretch.
