import React from "react";

/**
 * realfast Button — the primary action primitive for the editorial surface.
 * Solid fills draw from the four canonical brand colors (red / blue / navy /
 * ink), plus an ink outline and a text-only ghost. Square 2px corners.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  disabled = false,
  full = false,
  as = "button",
  style, className, href, type, tabIndex, onClick,
  ...rest
}) {
  const sizes = {
    sm: { padding: "var(--space-2) var(--space-4)", fontSize: "var(--type-ui-sm)", gap: "var(--space-2)", radius: "var(--radius-sm)" },
    md: { padding: "var(--space-3) var(--space-5)", fontSize: "var(--type-ui)", gap: "var(--space-2)", radius: "var(--radius-sm)" },
    lg: { padding: "var(--space-4) var(--space-8)", fontSize: "var(--type-ui-lg)", gap: "var(--space-2)", radius: "var(--radius-sm)" },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    // The four canonical brand colors, each a solid fill — used harmoniously
    // across the action set rather than relying on red alone.
    primary: {
      background: "var(--rf-ed-red)",
      color: "var(--rf-paper)",
      border: "1px solid var(--rf-ed-red)",
    },
    blue: {
      background: "var(--rf-blue)",
      color: "var(--rf-paper)",
      border: "1px solid var(--rf-blue)",
    },
    navy: {
      background: "var(--rf-navy)",
      color: "var(--rf-paper)",
      border: "1px solid var(--rf-navy)",
    },
    ink: {
      background: "var(--rf-ed-ink)",
      color: "var(--rf-paper)",
      border: "1px solid var(--rf-ed-ink)",
    },
    secondary: {
      background: "transparent",
      color: "var(--rf-ed-ink)",
      border: "1px solid var(--rf-ed-ink)",
    },
    ghost: {
      background: "transparent",
      color: "var(--rf-ed-ink)",
      border: "1px solid transparent",
    },
  };
  // `signal` retained as a back-compat alias for the red primary.
  const v = variants[variant] || (variant === "signal" ? variants.primary : variants.primary);

  const Tag = as;
  return (
    <Tag
      {...rest}
      className={["rf-component rf-button", className].filter(Boolean).join(" ")}
      type={Tag === "button" ? (type || "button") : type}
      href={Tag === "a" && !disabled ? href : undefined}
      role={Tag === "a" && disabled ? "link" : rest.role}
      aria-disabled={disabled || undefined}
      tabIndex={disabled && Tag === "a" ? -1 : tabIndex}
      onClick={(event) => {
        if (disabled) { event.preventDefault(); event.stopPropagation(); return; }
        onClick?.(event);
      }}
      disabled={Tag === "button" ? disabled : undefined}
      style={{
        display: full ? "flex" : "inline-flex",
        width: full ? "100%" : undefined,
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-semibold)",
        fontSize: s.fontSize,
        lineHeight: 1,
        letterSpacing: "-0.005em",
        padding: s.padding,
        borderRadius: s.radius,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        textDecoration: "none",
        whiteSpace: "nowrap",
        transition: "filter var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
        ...v,
        ...style,
      }}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
