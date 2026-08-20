import React from "react";

/**
 * PullQuote — centered italic serif quote with top & bottom hairlines. The
 * editorial replacement for a left-border blockquote. Use inside
 * [data-theme="editorial"].
 */
export function PullQuote({ children, cite, ...rest }) {
  return (
    <blockquote
      style={{
        margin: "36px 0 32px",
        padding: "24px 0 22px",
        borderTop: "1px solid var(--rf-ed-rule)",
        borderBottom: "1px solid var(--rf-ed-rule)",
        textAlign: "center",
        ...(rest.style || {}),
      }}
      {...rest}
    >
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 24,
          lineHeight: 1.35,
          fontWeight: 600,
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
            marginTop: 12,
            fontFamily: "var(--font-sans)",
            fontStyle: "normal",
            fontSize: 13,
            color: "var(--rf-ed-muted)",
          }}
        >
          {cite}
        </cite>
      )}
    </blockquote>
  );
}
