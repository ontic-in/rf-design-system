import React from "react";

/**
 * ShareButton — the editorial share control: white fill, hairline border, 4px
 * radius, ↥ glyph. Sits under the dek on article pages.
 */
export function ShareButton({ label = "Share", onClick, ...rest }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 500,
        color: "var(--rf-ed-ink)",
        background: "#fff",
        border: "1px solid var(--rf-ed-rule)",
        borderRadius: "2px",
        padding: "6px 14px",
        cursor: "pointer",
        transition: "background var(--dur-base) var(--ease-standard)",
        ...(rest.style || {}),
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f5f5")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
      {...rest}
    >
      <span style={{ fontSize: 13 }}>↥</span>
      {label}
    </button>
  );
}
