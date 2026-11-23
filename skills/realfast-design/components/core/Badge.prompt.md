A compact label for products, categories and status. Soft tinted fills with deeper text; no solid fills.

```jsx
<Badge tone="product">ExoWork</Badge>
<Badge tone="category">Insights</Badge>
<Badge tone="good">Live</Badge>
<Badge tone="warn">At risk</Badge>
<Badge tone="bad">Overdue</Badge>
<Badge>Beta</Badge>
```

Tones: `neutral` (stone), `product` (navy tint — products and tiers), `category` (stone with a small red flag dot), `good` / `warn` / `bad` (Jewel status tints with text that passes 4.5:1). Red never fills a badge, and ultramarine is kept for things you can click. Status badges always say the state in words. Old tones (`blue`, `navy`, `ink`, `red`, `success`) still render and map to the new ones.
