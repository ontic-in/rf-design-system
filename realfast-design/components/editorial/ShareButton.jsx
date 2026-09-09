import React from "react";

/**
 * ShareButton — the editorial share control: white fill, hairline border, 4px
 * radius, ↥ glyph. Sits under the dek on article pages.
 */
export function ShareButton({ label = "Share", onClick, style, className, ...rest }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={["rf-component rf-share", className].filter(Boolean).join(" ")}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-sans)",
        fontSize: "var(--type-rubric-size)",
        fontWeight: "var(--fw-medium)",
        color: "var(--rf-ed-ink)",
        background: "var(--rf-white)",
        border: "1px solid var(--rf-ed-rule)",
        borderRadius: "var(--radius-sm)",
        padding: "6px 14px",
        cursor: "pointer",
        transition: "background var(--dur-base) var(--ease-standard)",
        ...style,
      }}
      {...rest}
    >
      <span style={{ fontSize: "var(--type-meta-size)" }}>↥</span>
      {label}
    </button>
  );
}
