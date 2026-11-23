import React from "react";

/**
 * realfast Button — four kinds of action, one look on light surfaces and one
 * on the dark navy band (`onDark`). All values come from tokens/buttons.css.
 *
 *   primary      ultramarine light leak — the main action, one per view
 *   secondary    periwinkle tint with pale light — the alternative
 *   link         ultramarine, medium, underlined; hover fills with the tint
 *   destructive  pale red tint with pale light — the only red button
 *
 * Sizes: sm 36px · md 44px (default) · lg 52px. 2px corners, no arrows.
 * Legacy variants still render: blue / navy / ink / signal → primary,
 * ghost → link, danger → destructive.
 */
const LEGACY = { blue: "primary", navy: "primary", ink: "primary", signal: "primary", ghost: "link", danger: "destructive" };

const SIZES = {
  sm: { height: "var(--btn-h-sm)", px: "var(--btn-px-sm)", fontSize: "var(--btn-fs-sm)" },
  md: { height: "var(--btn-h-md)", px: "var(--btn-px-md)", fontSize: "var(--btn-fs-md)" },
  lg: { height: "var(--btn-h-lg)", px: "var(--btn-px-lg)", fontSize: "var(--btn-fs-lg)" },
};

// Token prefix per variant and surface.
function tokens(kind, dark) {
  if (kind === "primary") return dark ? "--btn-primary-dark" : "--btn-primary";
  if (kind === "secondary") return dark ? "--btn-secondary-dark" : "--btn-secondary";
  return dark ? "--btn-destructive-dark" : "--btn-destructive";
}

function buttonLook(kind, dark, state) {
  const t = tokens(kind, dark);
  const v = (name) => `var(${t}${name})`;
  if (state === "disabled") {
    return { background: v("-bg-disabled"), color: v("-fg-disabled"), borderColor: "transparent", boxShadow: "none", textShadow: "none" };
  }
  const bg = state === "pressed" ? v("-bg-pressed") : state === "hover" ? v("-bg-hover") : v("-bg");
  let fg = kind === "primary" ? "var(--btn-primary-fg)" : v("-fg");
  if (kind === "destructive" && !dark && state === "hover") fg = "var(--btn-destructive-fg-hover)";
  if (kind === "destructive" && !dark && state === "pressed") fg = "var(--btn-destructive-fg-pressed)";
  const hasBorder = dark;
  const border = hasBorder ? (state === "hover" ? v("-border-hover") : v("-border")) : "transparent";
  let shadow = v("-shadow");
  if (state === "pressed") shadow = kind === "primary" && dark ? "var(--btn-primary-dark-shadow-pressed)" : "none";
  else if (state === "hover" && kind === "primary" && dark) shadow = "var(--btn-primary-dark-shadow-hover)";
  let textShadow = "none";
  if (kind === "primary") textShadow = dark ? "var(--btn-primary-dark-text-shadow)" : "var(--btn-primary-text-shadow)";
  if (kind === "destructive" && dark) textShadow = "var(--btn-destructive-dark-text-shadow)";
  return { background: bg, color: fg, borderColor: border, boxShadow: shadow, textShadow };
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  onDark = false,
  iconLeft,
  iconRight,
  disabled = false,
  full = false,
  as = "button",
  style,
  ...rest
}) {
  const kind = LEGACY[variant] || variant;
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const [focusRing, setFocusRing] = React.useState(false);
  const state = disabled ? "disabled" : pressed ? "pressed" : hover ? "hover" : "rest";
  const focusColor = onDark ? "var(--btn-focus-dark)" : kind === "destructive" ? "var(--btn-destructive-focus)" : "var(--btn-focus-light)";
  const s = SIZES[size] || SIZES.md;

  const handlers = {
    onMouseEnter: (e) => { setHover(true); rest.onMouseEnter && rest.onMouseEnter(e); },
    onMouseLeave: (e) => { setHover(false); setPressed(false); rest.onMouseLeave && rest.onMouseLeave(e); },
    onMouseDown: (e) => { setPressed(true); rest.onMouseDown && rest.onMouseDown(e); },
    onMouseUp: (e) => { setPressed(false); rest.onMouseUp && rest.onMouseUp(e); },
    onFocus: (e) => { setFocusRing(e.currentTarget.matches(":focus-visible")); rest.onFocus && rest.onFocus(e); },
    onBlur: (e) => { setFocusRing(false); rest.onBlur && rest.onBlur(e); },
  };

  const Tag = as;
  const common = {
    ...rest,
    ...handlers,
    disabled: Tag === "button" ? disabled : undefined,
    "aria-disabled": disabled || undefined,
  };
  const ring = focusRing ? { outline: `2px solid ${focusColor}`, outlineOffset: "2px" } : { outline: "none" };

  if (kind === "link") {
    return React.createElement(
      Tag,
      {
        ...common,
        style: {
          display: "inline",
          font: "inherit",
          fontWeight: "var(--link-weight)",
          color: onDark ? "var(--link-dark-fg)" : "var(--link-fg)",
          background: hover && !disabled ? (onDark ? "var(--link-dark-hover-bg)" : "var(--link-hover-bg)") : "transparent",
          border: 0,
          borderRadius: "var(--btn-radius)",
          padding: "0 0.15em",
          margin: "0 -0.15em",
          textDecoration: "underline",
          textDecorationThickness: "1px",
          textUnderlineOffset: "3px",
          textDecorationColor: hover ? "transparent" : "currentColor",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
          transition: "background 180ms ease, text-decoration-color 180ms ease",
          ...ring,
          ...(style || {}),
        },
      },
      children
    );
  }

  return React.createElement(
    Tag,
    {
      ...common,
      style: {
        display: full ? "flex" : "inline-flex",
        width: full ? "100%" : undefined,
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        minHeight: s.height,
        padding: `0 ${s.px}`,
        boxSizing: "border-box",
        fontFamily: "var(--btn-font)",
        fontWeight: "var(--btn-weight)",
        fontSize: s.fontSize,
        lineHeight: 1,
        letterSpacing: "-0.005em",
        whiteSpace: "nowrap",
        textDecoration: "none",
        border: "1px solid transparent",
        borderRadius: "var(--btn-radius)",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "var(--btn-transition)",
        ...buttonLook(kind, onDark, state),
        ...ring,
        ...(style || {}),
      },
    },
    iconLeft,
    children,
    iconRight
  );
}
