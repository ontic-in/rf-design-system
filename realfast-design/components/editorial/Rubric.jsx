import React from "react";

/**
 * Rubric — the Economist-style section line that opens every editorial page and
 * card: a red section word, a hairline pipe, and a grey sub-rubric. Use inside
 * a [data-theme="editorial"] wrapper.
 */
export function Rubric({ section, sub, href = "#", as = "p", plain = false, style, className, ...rest }) {
  const Tag = as;
  const sectionEl = plain ? (
    <span style={{ color: "var(--text-accent)", fontWeight: "var(--fw-semibold)" }}>{section}</span>
  ) : (
    <a
      href={href}
      style={{ color: "var(--text-accent)", textDecoration: "none", fontWeight: "var(--fw-semibold)" }}
      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
    >
      {section}
    </a>
  );
  return (
    <Tag
      className={["rf-component", className].filter(Boolean).join(" ")}
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "var(--type-rubric-size)",
        fontWeight: "var(--fw-medium)",
        letterSpacing: "var(--track-normal)",
        margin: 0,
        color: "var(--rf-ed-ink)",
        ...style,
      }}
      {...rest}
    >
      {sectionEl}
      {sub && (
        <>
          <span style={{ color: "var(--rf-ed-rule)", margin: "0 8px", fontWeight: 400 }}>|</span>
          <span style={{ color: "var(--rf-ed-ink)", fontWeight: "var(--fw-medium)" }}>{sub}</span>
        </>
      )}
    </Tag>
  );
}
