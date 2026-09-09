import React from "react";

/**
 * PullQuote — centered italic serif quote with top & bottom hairlines. The
 * editorial replacement for a left-border blockquote. The editorial surface is the default.
 */
export function PullQuote({ children, cite, style, className, ...rest }) {
  return (
    <blockquote
      className={["rf-component", className].filter(Boolean).join(" ")}
      style={{
        margin: "36px 0 32px",
        padding: "24px 0 22px",
        borderTop: "1px solid var(--rf-ed-rule)",
        borderBottom: "1px solid var(--rf-ed-rule)",
        textAlign: "center",
        ...style,
      }}
      {...rest}
    >
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--type-quote-size)",
          lineHeight: 1.35,
          fontWeight: "var(--fw-semibold)",
          fontStyle: "italic",
          color: "var(--rf-ed-ink)",
          margin: "0 auto",
          maxWidth: 520,
        }}
      >
        {children}
      </p>
      {cite && (
        <cite
          style={{
            display: "block",
            marginTop: "var(--space-3)",
            fontFamily: "var(--font-sans)",
            fontStyle: "normal",
            fontSize: "var(--type-meta-size)",
            color: "var(--rf-ed-muted)",
          }}
        >
          {cite}
        </cite>
      )}
    </blockquote>
  );
}
