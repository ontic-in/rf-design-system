import React from "react";

/**
 * realfast Badge — a compact label for products, categories and status.
 * Soft tinted fills with deeper text; no solid fills. Red never fills a badge:
 * a category carries the brand flag as a small dot. Ultramarine is reserved
 * for things you can click, so products and tiers use a navy tint.
 *
 *   neutral   stone tint, ink-brown text — beta, draft, not started
 *   product   navy tint, navy text — ExoCode, ExoWork, Enterprise
 *   category  stone tint with a red flag dot — Insights, Case study
 *   good      Jewel green tint — live, on track
 *   warn      Jewel saffron tint — at risk, pending
 *   bad       Jewel rose tint — overdue, failed
 *
 * Legacy tones still render: blue / navy / ink → product, red → category,
 * success → good.
 */
const LEGACY = { blue: "product", navy: "product", ink: "product", red: "category", success: "good", warning: "warn", danger: "bad" };

const TONES = {
  neutral: { bg: "var(--rf-stone-100)", fg: "var(--rf-stone-700)" },
  product: { bg: "var(--rf-navy-tint)", fg: "var(--rf-navy)" },
  category: { bg: "var(--rf-stone-100)", fg: "var(--rf-stone-700)", dot: "var(--brand-flag)" },
  good: { bg: "var(--rf-good-tint)", fg: "var(--rf-good-text)" },
  warn: { bg: "var(--rf-warn-tint)", fg: "var(--rf-warn-text)" },
  bad: { bg: "var(--rf-bad-tint)", fg: "var(--rf-bad-text)" },
};

export function Badge({ children, tone = "neutral", outline = false, style, ...rest }) {
  const t = TONES[LEGACY[tone] || tone] || TONES.neutral;
  return React.createElement(
    "span",
    {
      ...rest,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-sans)",
        fontSize: 12.5,
        fontWeight: 600,
        letterSpacing: "0.01em",
        lineHeight: 1,
        padding: "5px 10px",
        borderRadius: "2px",
        background: outline ? "transparent" : t.bg,
        color: t.fg,
        border: outline ? `1px solid ${t.fg}` : "1px solid transparent",
        whiteSpace: "nowrap",
        ...(style || {}),
      },
    },
    t.dot
      ? React.createElement("span", {
          "aria-hidden": true,
          style: { width: 7, height: 7, borderRadius: "50%", background: t.dot, flex: "0 0 auto" },
        })
      : null,
    children
  );
}
