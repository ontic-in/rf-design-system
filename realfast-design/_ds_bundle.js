/* @ds-bundle: {"format":3,"namespace":"RealfastDesignSystem_e02a4e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"EditorialBlogCard","sourcePath":"components/editorial/EditorialBlogCard.jsx"},{"name":"PullQuote","sourcePath":"components/editorial/PullQuote.jsx"},{"name":"Rubric","sourcePath":"components/editorial/Rubric.jsx"},{"name":"ShareButton","sourcePath":"components/editorial/ShareButton.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"cefcae4f173a","components/core/Button.jsx":"a2fe2858dc90","components/core/Card.jsx":"8d368a2e682e","components/editorial/EditorialBlogCard.jsx":"4b3bfaafb8d8","components/editorial/PullQuote.jsx":"2c6bcfa6b3bc","components/editorial/Rubric.jsx":"892259cb53bd","components/editorial/ShareButton.jsx":"7ee00900b7b4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RealfastDesignSystem_e02a4e = window.RealfastDesignSystem_e02a4e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * realfast Badge — compact status / category label. Used for blog category
 * rubrics in pill form, platform tags (ExoCode / ExoWork / ExoCortex), and
 * status chips. Tone maps to a brand hue; `outline` swaps fill for hairline.
 */
function Badge({
  children,
  tone = "neutral",
  outline = false,
  ...rest
}) {
  const tones = {
    neutral: {
      bg: "var(--rf-neutral-100)",
      fg: "var(--rf-neutral-700)",
      bd: "var(--rf-neutral-200)"
    },
    blue: {
      bg: "var(--rf-blue-50)",
      fg: "var(--rf-blue-700)",
      bd: "var(--rf-blue-200)"
    },
    navy: {
      bg: "var(--rf-blue-100)",
      fg: "var(--rf-blue-900)",
      bd: "var(--rf-blue-300)"
    },
    red: {
      bg: "var(--rf-red-50)",
      fg: "var(--rf-red-600)",
      bd: "var(--rf-red-200)"
    },
    ink: {
      bg: "var(--rf-ink)",
      fg: "#fff",
      bd: "var(--rf-ink)"
    },
    success: {
      bg: "#e4f6ee",
      fg: "#157a52",
      bd: "#bfe6d4"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...(rest.style || {})
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * realfast Button — the primary action primitive for the editorial surface.
 * Solid fills draw from the four canonical brand colors (red / blue / navy /
 * ink), plus an ink outline and a text-only ghost. Square 2px corners.
 */
function Button({
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
    sm: {
      padding: "7px 16px",
      fontSize: 13,
      gap: 6,
      radius: "2px"
    },
    md: {
      padding: "10px 20px",
      fontSize: 15,
      gap: 8,
      radius: "2px"
    },
    lg: {
      padding: "14px 28px",
      fontSize: 16,
      gap: 9,
      radius: "2px"
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    // The four canonical brand colors, each a solid fill — used harmoniously
    // across the action set rather than relying on red alone.
    primary: {
      background: "var(--rf-ed-red)",
      color: "var(--rf-paper)",
      border: "1px solid var(--rf-ed-red)"
    },
    blue: {
      background: "var(--rf-ed-blue)",
      color: "var(--rf-paper)",
      border: "1px solid var(--rf-ed-blue)"
    },
    navy: {
      background: "var(--rf-navy)",
      color: "var(--rf-paper)",
      border: "1px solid var(--rf-navy)"
    },
    ink: {
      background: "var(--rf-ed-ink)",
      color: "var(--rf-paper)",
      border: "1px solid var(--rf-ed-ink)"
    },
    secondary: {
      background: "transparent",
      color: "var(--rf-ed-ink)",
      border: "1px solid var(--rf-ed-ink)"
    },
    ghost: {
      background: "transparent",
      color: "var(--rf-ed-ink)",
      border: "1px solid transparent"
    }
  };
  // `signal` retained as a back-compat alias for the red primary.
  const v = variants[variant] || (variant === "signal" ? variants.primary : variants.primary);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === "button" ? disabled : undefined,
    style: {
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
      ...v
    },
    onMouseEnter: e => !disabled && (e.currentTarget.style.filter = "brightness(1.1)"),
    onMouseLeave: e => e.currentTarget.style.filter = "none",
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "translateY(1px)"),
    onMouseUp: e => e.currentTarget.style.transform = "none"
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * realfast Card — surface container for editorial callouts and tiles. Reads
 * semantic surface/border tokens (paper, hairline rule). `accentTop` adds a 3px
 * red top rule; `interactive` adds a subtle hover lift. Square 2px corners.
 */
function Card({
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
    inset: "var(--surface-inset)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: surfaces[raised] || surfaces.raised,
      border: "1px solid var(--border)",
      borderTop: accentTop ? "3px solid var(--accent)" : "1px solid var(--border)",
      borderRadius: "2px",
      padding,
      color: "var(--text-body)",
      transition: "transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      cursor: interactive ? "pointer" : "default",
      ...(rest.style || {})
    },
    onMouseEnter: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.borderColor = "var(--border-strong)";
    },
    onMouseLeave: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.borderColor = "";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PullQuote — centered italic serif quote with top & bottom hairlines. The
 * editorial replacement for a left-border blockquote. Use inside
 * [data-theme="editorial"].
 */
function PullQuote({
  children,
  cite,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    style: {
      margin: "36px 0 32px",
      padding: "24px 0 22px",
      borderTop: "1px solid var(--rf-ed-rule)",
      borderBottom: "1px solid var(--rf-ed-rule)",
      textAlign: "center",
      ...(rest.style || {})
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 24,
      lineHeight: 1.35,
      fontWeight: 600,
      fontStyle: "italic",
      color: "var(--rf-ed-ink)",
      margin: "0 auto",
      maxWidth: 520
    }
  }, children), cite && /*#__PURE__*/React.createElement("cite", {
    style: {
      display: "block",
      marginTop: 12,
      fontFamily: "var(--font-sans)",
      fontStyle: "normal",
      fontSize: 13,
      color: "var(--rf-ed-muted)"
    }
  }, cite));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Rubric.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Rubric — the Economist-style section line that opens every editorial page and
 * card: a red section word, a hairline pipe, and a grey sub-rubric. Use inside
 * a [data-theme="editorial"] wrapper.
 */
function Rubric({
  section,
  sub,
  href = "#",
  as = "p",
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--type-rubric-size)",
      fontWeight: 500,
      letterSpacing: "0.005em",
      margin: 0,
      color: "var(--rf-ed-ink)",
      ...(rest.style || {})
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: "var(--rf-ed-red)",
      textDecoration: "none",
      fontWeight: 600
    },
    onMouseEnter: e => e.currentTarget.style.textDecoration = "underline",
    onMouseLeave: e => e.currentTarget.style.textDecoration = "none"
  }, section), sub && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--rf-ed-rule)",
      margin: "0 8px",
      fontWeight: 400
    }
  }, "|"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--rf-ed-ink)",
      fontWeight: 500
    }
  }, sub)));
}
Object.assign(__ds_scope, { Rubric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Rubric.jsx", error: String((e && e.message) || e) }); }

// components/editorial/EditorialBlogCard.jsx
try { (() => {
/**
 * EditorialBlogCard — the blog listing card, in two variants:
 *   • featured: image-led, two-column lead item
 *   • row (default): text-forward with a small right thumbnail
 * Use inside a [data-theme="editorial"] wrapper. Mirrors the production
 * EditorialBlogCard.astro.
 */
function EditorialBlogCard({
  section = "Insights",
  sub = "The realfast view",
  title,
  dek,
  date,
  readTime,
  image,
  href = "#",
  featured = false
}) {
  const meta = /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--rf-ed-muted)",
      margin: 0
    }
  }, date, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--rf-ed-rule)",
      margin: "0 8px"
    }
  }, "|"), readTime);
  const headline = /*#__PURE__*/React.createElement("h2", {
    className: "rf-ed-headline",
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "var(--rf-ed-ink)",
      margin: featured ? "0 0 12px" : "0 0 8px",
      fontSize: featured ? 34 : 24,
      lineHeight: featured ? 1.08 : 1.12,
      transition: "color var(--dur-base) var(--ease-standard)"
    }
  }, title);
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    display: "grid",
    alignItems: "start",
    borderBottom: "1px solid var(--rf-ed-rule)"
  };
  const hoverIn = e => {
    const h = e.currentTarget.querySelector(".rf-ed-headline");
    if (h) h.style.color = "var(--rf-ed-red)";
  };
  const hoverOut = e => {
    const h = e.currentTarget.querySelector(".rf-ed-headline");
    if (h) h.style.color = "var(--rf-ed-ink)";
  };
  if (featured) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      onMouseEnter: hoverIn,
      onMouseLeave: hoverOut,
      style: {
        ...linkStyle,
        gridTemplateColumns: "1.1fr 1fr",
        gap: 32,
        padding: "36px 0"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Rubric, {
      section: section,
      sub: sub,
      href: href,
      style: {
        marginBottom: 14
      }
    }), headline, dek && /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 18,
        lineHeight: 1.45,
        color: "var(--rf-ed-ink-soft)",
        margin: "0 0 14px"
      }
    }, dek), meta), image && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: "",
      style: {
        display: "block",
        width: "100%",
        height: "auto"
      }
    })));
  }
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut,
    style: {
      ...linkStyle,
      gridTemplateColumns: "1fr 132px",
      gap: 24,
      padding: "26px 0"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Rubric, {
    section: section,
    sub: sub,
    href: href,
    style: {
      marginBottom: 12
    }
  }), headline, dek && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 16,
      lineHeight: 1.4,
      color: "var(--rf-ed-ink-soft)",
      margin: "0 0 10px"
    }
  }, dek), meta), image && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      display: "block",
      width: 132,
      height: 92,
      objectFit: "cover"
    }
  })));
}
Object.assign(__ds_scope, { EditorialBlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/EditorialBlogCard.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ShareButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ShareButton — the editorial share control: white fill, hairline border, 4px
 * radius, ↥ glyph. Sits under the dek on article pages.
 */
function ShareButton({
  label = "Share",
  onClick,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
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
      ...(rest.style || {})
    },
    onMouseEnter: e => e.currentTarget.style.background = "#f5f5f5",
    onMouseLeave: e => e.currentTarget.style.background = "#fff"
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "\u21A5"), label);
}
Object.assign(__ds_scope, { ShareButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ShareButton.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.EditorialBlogCard = __ds_scope.EditorialBlogCard;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.Rubric = __ds_scope.Rubric;

__ds_ns.ShareButton = __ds_scope.ShareButton;

})();
