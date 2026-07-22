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
  author,
  featured = false,
}) {
  const pipe = <span style={{ color: "var(--rf-ed-rule)", margin: "0 8px" }}>|</span>;
  const meta = (
    <p
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--rf-ed-muted)",
        margin: 0,
      }}
    >
      {author && (
        <>
          By <span style={{ color: "var(--rf-ed-ink-soft)" }}>{author}</span>
          {pipe}
        </>
      )}
      {date}
      {pipe}
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
        margin: featured ? "0 0 12px" : "0 0 18px",
        fontSize: featured ? 34 : 29,
        lineHeight: featured ? 1.08 : 1.14,
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
          <Rubric section={section} sub={sub} href={href} plain style={{ marginBottom: 14 }} />
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
        gridTemplateColumns: "1fr",
        gap: 0,
        padding: "34px 0",
      }}
    >
      <Rubric section={section} sub={sub} href={href} plain style={{ marginBottom: 14 }} />
      {headline}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: image ? "minmax(0, 0.82fr) 1fr" : "1fr",
          gap: 36,
          alignItems: "start",
          marginBottom: 18,
        }}
      >
        {image && (
          <img
            src={image}
            alt=""
            style={{
              display: "block",
              width: "100%",
              aspectRatio: "3 / 2",
              objectFit: "cover",
              borderRadius: 8,
              background: "var(--rf-paper-cream)",
            }}
          />
        )}
        {dek && (
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 19,
              lineHeight: 1.5,
              color: "var(--rf-ed-ink-soft)",
              margin: 0,
            }}
          >
            {dek}
          </p>
        )}
      </div>
      {meta}
    </a>
  );
}
