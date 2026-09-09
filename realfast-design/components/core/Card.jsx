import React from "react";

/**
 * realfast Card — surface container for editorial callouts and tiles. Reads
 * semantic surface/border tokens (paper, hairline rule). `accentTop` adds a 2px
 * red top rule; `interactive` adds a subtle hover lift. Square 2px corners.
 */
export function Card({
  children,
  padding = "var(--space-6)",
  interactive = false,
  raised = "raised",
  accentTop = false,
  style, className, onKeyDown, onClick, ...rest
}) {
  const surfaces = {
    page: "var(--surface-page)",
    raised: "var(--surface-raised)",
    overlay: "var(--surface-overlay)",
    inset: "var(--surface-inset)",
  };
  return (
    <div
      className={["rf-component", className].filter(Boolean).join(" ")}
      style={{
        background: surfaces[raised] || surfaces.raised,
        border: "1px solid var(--border)",
        borderTop: accentTop ? "var(--border-rule) solid var(--accent)" : "1px solid var(--border)",
        borderRadius: "var(--radius-sm)",
        padding,
        color: "var(--text-body)",
        transition:
          "transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
      {...rest}
      role={interactive ? "button" : rest.role}
      tabIndex={interactive ? 0 : rest.tabIndex}
      data-interactive={interactive || undefined}
      onClick={onClick}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (interactive && !event.defaultPrevented && event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          event.currentTarget.click();
        }
      }}
    >
      {children}
    </div>
  );
}
