import React from "react";

/**
 * realfast Card — surface container for editorial callouts and tiles. Reads
 * semantic surface/border tokens (paper, hairline rule). `accentTop` adds a 3px
 * red top rule; `interactive` adds a subtle hover lift. Square 2px corners.
 */
export function Card({
  children,
  padding = 24,
  interactive = false,
  raised = "raised",
  accentTop = false,
  ...rest
}) {
  const surfaces = {
    page: "var(--surface-page)",
    raised: "var(--surface-raised)",
    overlay: "var(--surface-overlay)",
    inset: "var(--surface-inset)",
  };
  return (
    <div
      style={{
        background: surfaces[raised] || surfaces.raised,
        border: "1px solid var(--border)",
        borderTop: accentTop ? "3px solid var(--accent)" : "1px solid var(--border)",
        borderRadius: "2px",
        padding,
        color: "var(--text-body)",
        transition:
          "transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
        cursor: interactive ? "pointer" : "default",
        ...(rest.style || {}),
      }}
      onMouseEnter={(e) => {
        if (!interactive) return;
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.borderColor = "var(--border-strong)";
      }}
      onMouseLeave={(e) => {
        if (!interactive) return;
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.borderColor = "";
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
