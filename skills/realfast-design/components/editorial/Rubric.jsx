import React from "react";

/**
 * Rubric — the Economist-style section line that opens every editorial page and
 * card: a red section word, a hairline pipe, and a grey sub-rubric. Use inside
 * a [data-theme="editorial"] wrapper.
 */
export function Rubric({ section, sub, href = "#", as = "p", plain = false, ...rest }) {
  const Tag = as;
  const sectionEl = plain ? (
    <span style={{ color: "var(--rf-ed-red)", fontWeight: 600 }}>{section}</span>
  ) : (
    <a
      href={href}
      style={{ color: "var(--rf-ed-red)", textDecoration: "none", fontWeight: 600 }}
      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
    >
      {section}
    </a>
  );
  return (
    <Tag
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "var(--type-rubric-size)",
        fontWeight: 500,
        letterSpacing: "0.005em",
        margin: 0,
        color: "var(--rf-ed-ink)",
        ...(rest.style || {}),
      }}
      {...rest}
    >
      {sectionEl}
      {sub && (
        <>
          <span style={{ color: "var(--rf-ed-rule)", margin: "0 8px", fontWeight: 400 }}>|</span>
          <span style={{ color: "var(--rf-ed-ink)", fontWeight: 500 }}>{sub}</span>
        </>
      )}
    </Tag>
  );
}
