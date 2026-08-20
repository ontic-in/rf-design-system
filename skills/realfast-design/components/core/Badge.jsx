import React from "react";

/**
 * realfast Badge — compact status / category label. Used for blog category
 * rubrics in pill form, platform tags (ExoCode / ExoWork / ExoCortex), and
 * status chips. Tone maps to a brand hue; `outline` swaps fill for hairline.
 */
export function Badge({ children, tone = "neutral", outline = false, ...rest }) {
  const tones = {
    neutral: { bg: "var(--rf-neutral-100)", fg: "var(--rf-neutral-700)", bd: "var(--rf-neutral-200)" },
    blue: { bg: "var(--rf-blue-50)", fg: "var(--rf-blue-700)", bd: "var(--rf-blue-200)" },
    navy: { bg: "var(--rf-blue-100)", fg: "var(--rf-blue-900)", bd: "var(--rf-blue-300)" },
    red: { bg: "var(--rf-red-50)", fg: "var(--rf-red-600)", bd: "var(--rf-red-200)" },
    ink: { bg: "var(--rf-ink)", fg: "#fff", bd: "var(--rf-ink)" },
    success: { bg: "#e4f6ee", fg: "#157a52", bd: "#bfe6d4" },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.02em",
        lineHeight: 1,
        padding: "5px 10px",
        borderRadius: "2px",
        background: outline ? "transparent" : t.bg,
        color: t.fg,
        border: `1px solid ${t.bd}`,
        whiteSpace: "nowrap",
        ...(rest.style || {}),
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
