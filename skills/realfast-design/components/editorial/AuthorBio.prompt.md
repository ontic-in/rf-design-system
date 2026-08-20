The author identity block. Two uses: the header of an author page (pass `backHref` for the "← All posts" link and `meta` for the post count) and the "Written by" footer at the end of an article (pass `eyebrow="Written by"`). Use inside `[data-theme="editorial"]`.

```jsx
<AuthorBio
  backHref="/blog"
  name="Manas Vaze" role="UX Design Lead"
  avatar="/authors/manas.png"
  meta="1 post · Insights · Writing since Jul 2026"
  bio="UX Design Lead at realfast. Writes about design systems, constraints, and building coherent product in an AI-first workflow."
  links={[{ label: "LinkedIn", href: "https://linkedin.com/in/manas-vaze" }]}
/>
```
