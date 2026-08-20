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
  ...rest
}) {
  const sizes = {
    sm: { padding: "7px 16px", fontSize: 13, gap: 6, radius: "2px" },
    md: { padding: "10px 20px", fontSize: 15, gap: 8, radius: "2px" },
    lg: { padding: "14px 28px", fontSize: 16, gap: 9, radius: "2px" },
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
      background: "var(--rf-ed-blue)",
      color: "var(--rf-paper)",
      border: "1px solid var(--rf-ed-blue)",
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
      disabled={Tag === "button" ? disabled : undefined}
      style={{
        display: full ? "flex" : "inline-flex",
        width: full ? "100%" : undefined,
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
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
      }}
      onMouseEnter={(e) => !disabled && (e.currentTarget.style.filter = "brightness(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = "translateY(1px)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "none")}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
