import React from "react";
import { Rubric } from "./Rubric.jsx";

/**
 * EditorialBlogCard — the blog listing card, in two variants:
 *   • featured: image-led, two-column lead item
 *   • row (default): text-forward with a small right thumbnail
 * Use inside a [data-theme="editorial"] wrapper. Mirrors the production
 * EditorialBlogCard.astro.
 */
export function EditorialBlogCard({
  section = "Insights",
  sub = "The realfast view",
  title,
  dek,
  date,
  readTime,
  image,
  href = "#",
  featured = false,
}) {
  const meta = (
    <p
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--rf-ed-muted)",
        margin: 0,
      }}
    >
      {date}
      <span style={{ color: "var(--rf-ed-rule)", margin: "0 8px" }}>|</span>
      {readTime}
    </p>
  );

  const headline = (
    <h2
      className="rf-ed-headline"
      style={{
        fontFamily: "var(--font-serif)",
        fontWeight: 600,
        letterSpacing: "-0.01em",
        color: "var(--rf-ed-ink)",
        margin: featured ? "0 0 12px" : "0 0 8px",
        fontSize: featured ? 34 : 24,
        lineHeight: featured ? 1.08 : 1.12,
        transition: "color var(--dur-base) var(--ease-standard)",
      }}
    >
      {title}
    </h2>
  );

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    display: "grid",
    alignItems: "start",
    borderBottom: "1px solid var(--rf-ed-rule)",
  };

  const hoverIn = (e) => {
    const h = e.currentTarget.querySelector(".rf-ed-headline");
    if (h) h.style.color = "var(--rf-ed-red)";
  };
  const hoverOut = (e) => {
    const h = e.currentTarget.querySelector(".rf-ed-headline");
    if (h) h.style.color = "var(--rf-ed-ink)";
  };

  if (featured) {
    return (
      <a
        href={href}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
        style={{
          ...linkStyle,
          gridTemplateColumns: "1.1fr 1fr",
          gap: 32,
          padding: "36px 0",
        }}
      >
        <div>
          <Rubric section={section} sub={sub} href={href} style={{ marginBottom: 14 }} />
          {headline}
          {dek && (
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 18,
                lineHeight: 1.45,
                color: "var(--rf-ed-ink-soft)",
                margin: "0 0 14px",
              }}
            >
              {dek}
            </p>
          )}
          {meta}
        </div>
        {image && (
          <div>
            <img src={image} alt="" style={{ display: "block", width: "100%", height: "auto" }} />
          </div>
        )}
      </a>
    );
  }

  return (
    <a
      href={href}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
      style={{
        ...linkStyle,
        gridTemplateColumns: "1fr 132px",
        gap: 24,
        padding: "26px 0",
      }}
    >
      <div>
        <Rubric section={section} sub={sub} href={href} style={{ marginBottom: 12 }} />
        {headline}
        {dek && (
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 16,
              lineHeight: 1.4,
              color: "var(--rf-ed-ink-soft)",
              margin: "0 0 10px",
            }}
          >
            {dek}
          </p>
        )}
        {meta}
      </div>
      {image && (
        <div>
          <img
            src={image}
            alt=""
            style={{ display: "block", width: 132, height: 92, objectFit: "cover" }}
          />
        </div>
      )}
    </a>
  );
}
