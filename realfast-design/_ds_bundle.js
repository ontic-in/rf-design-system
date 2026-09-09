/* @ds-bundle: {"format":4,"namespace":"RealfastDesignSystem_e02a4e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ArticleHeader","sourcePath":"components/editorial/ArticleHeader.jsx"},{"name":"AuthorBio","sourcePath":"components/editorial/AuthorBio.jsx"},{"name":"EditorialBlogCard","sourcePath":"components/editorial/EditorialBlogCard.jsx"},{"name":"PullQuote","sourcePath":"components/editorial/PullQuote.jsx"},{"name":"Rubric","sourcePath":"components/editorial/Rubric.jsx"},{"name":"ShareButton","sourcePath":"components/editorial/ShareButton.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"3fe37b4b93ff","components/core/Button.jsx":"e4da2bc5543f","components/core/Card.jsx":"c5493c98a018","components/editorial/ArticleHeader.jsx":"4bd26a66fecc","components/editorial/AuthorBio.jsx":"26b100dc7a6d","components/editorial/EditorialBlogCard.jsx":"b3501d990ea5","components/editorial/PullQuote.jsx":"e1c1bde8465c","components/editorial/Rubric.jsx":"17f79e207289","components/editorial/ShareButton.jsx":"4e6d44a456f0"},"inlinedExternals":[],"unexposedExports":[]} */
var __rfExports = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // realfast-design/index.js
  var index_exports = {};
  __export(index_exports, {
    ArticleHeader: () => ArticleHeader,
    AuthorBio: () => AuthorBio,
    Badge: () => Badge,
    Button: () => Button,
    Card: () => Card,
    EditorialBlogCard: () => EditorialBlogCard,
    PullQuote: () => PullQuote,
    Rubric: () => Rubric,
    ShareButton: () => ShareButton
  });

  // host:react
  var react_default = new Proxy({}, { get: (_, key) => window.React[key] });

  // realfast-design/components/core/Badge.jsx
  function Badge({ children, tone = "neutral", outline = false, style, className, ...rest }) {
    const tones = {
      neutral: { bg: "var(--rf-neutral-100)", fg: "var(--rf-neutral-700)", bd: "var(--rf-neutral-200)" },
      blue: { bg: "var(--rf-blue-50)", fg: "var(--rf-blue-700)", bd: "var(--rf-blue-200)" },
      navy: { bg: "var(--rf-blue-100)", fg: "var(--rf-blue-900)", bd: "var(--rf-blue-300)" },
      red: { bg: "var(--rf-red-50)", fg: "var(--rf-red-600)", bd: "var(--rf-red-200)" },
      ink: { bg: "var(--rf-ink)", fg: "#fff", bd: "var(--rf-ink)" },
      success: { bg: "#e4f6ee", fg: "#157a52", bd: "#bfe6d4" }
    };
    const t = tones[tone] || tones.neutral;
    return /* @__PURE__ */ react_default.createElement(
      "span",
      {
        className: ["rf-component", className].filter(Boolean).join(" "),
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "var(--font-sans)",
          fontSize: "var(--type-label)",
          fontWeight: "var(--fw-semibold)",
          letterSpacing: "0.02em",
          lineHeight: 1,
          padding: "5px 10px",
          borderRadius: "var(--radius-sm)",
          background: outline ? "transparent" : t.bg,
          color: t.fg,
          border: `1px solid ${t.bd}`,
          whiteSpace: "nowrap",
          ...style
        },
        ...rest
      },
      children
    );
  }

  // realfast-design/components/core/Button.jsx
  function Button({
    children,
    variant = "primary",
    size = "md",
    iconLeft,
    iconRight,
    disabled = false,
    full = false,
    as = "button",
    style,
    className,
    href,
    type,
    tabIndex,
    onClick,
    ...rest
  }) {
    const sizes = {
      sm: { padding: "var(--space-2) var(--space-4)", fontSize: "var(--type-ui-sm)", gap: "var(--space-2)", radius: "var(--radius-sm)" },
      md: { padding: "var(--space-3) var(--space-5)", fontSize: "var(--type-ui)", gap: "var(--space-2)", radius: "var(--radius-sm)" },
      lg: { padding: "var(--space-4) var(--space-8)", fontSize: "var(--type-ui-lg)", gap: "var(--space-2)", radius: "var(--radius-sm)" }
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
        background: "var(--rf-blue)",
        color: "var(--rf-paper)",
        border: "1px solid var(--rf-blue)"
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
    const v = variants[variant] || (variant === "signal" ? variants.primary : variants.primary);
    const Tag = as;
    return /* @__PURE__ */ react_default.createElement(
      Tag,
      {
        ...rest,
        className: ["rf-component rf-button", className].filter(Boolean).join(" "),
        type: Tag === "button" ? type || "button" : type,
        href: Tag === "a" && !disabled ? href : void 0,
        role: Tag === "a" && disabled ? "link" : rest.role,
        "aria-disabled": disabled || void 0,
        tabIndex: disabled && Tag === "a" ? -1 : tabIndex,
        onClick: (event) => {
          if (disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          onClick?.(event);
        },
        disabled: Tag === "button" ? disabled : void 0,
        style: {
          display: full ? "flex" : "inline-flex",
          width: full ? "100%" : void 0,
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
          ...style
        }
      },
      iconLeft,
      children,
      iconRight
    );
  }

  // realfast-design/components/core/Card.jsx
  function Card({
    children,
    padding = "var(--space-6)",
    interactive = false,
    raised = "raised",
    accentTop = false,
    style,
    className,
    onKeyDown,
    onClick,
    ...rest
  }) {
    const surfaces = {
      page: "var(--surface-page)",
      raised: "var(--surface-raised)",
      overlay: "var(--surface-overlay)",
      inset: "var(--surface-inset)"
    };
    return /* @__PURE__ */ react_default.createElement(
      "div",
      {
        className: ["rf-component", className].filter(Boolean).join(" "),
        style: {
          background: surfaces[raised] || surfaces.raised,
          border: "1px solid var(--border)",
          borderTop: accentTop ? "var(--border-rule) solid var(--accent)" : "1px solid var(--border)",
          borderRadius: "var(--radius-sm)",
          padding,
          color: "var(--text-body)",
          transition: "transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
          cursor: interactive ? "pointer" : "default",
          ...style
        },
        ...rest,
        role: interactive ? "button" : rest.role,
        tabIndex: interactive ? 0 : rest.tabIndex,
        "data-interactive": interactive || void 0,
        onClick,
        onKeyDown: (event) => {
          onKeyDown?.(event);
          if (interactive && !event.defaultPrevented && event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            event.currentTarget.click();
          }
        }
      },
      children
    );
  }

  // realfast-design/components/editorial/Rubric.jsx
  function Rubric({ section, sub, href = "#", as = "p", plain = false, style, className, ...rest }) {
    const Tag = as;
    const sectionEl = plain ? /* @__PURE__ */ react_default.createElement("span", { style: { color: "var(--text-accent)", fontWeight: "var(--fw-semibold)" } }, section) : /* @__PURE__ */ react_default.createElement(
      "a",
      {
        href,
        style: { color: "var(--text-accent)", textDecoration: "none", fontWeight: "var(--fw-semibold)" },
        onMouseEnter: (e) => e.currentTarget.style.textDecoration = "underline",
        onMouseLeave: (e) => e.currentTarget.style.textDecoration = "none"
      },
      section
    );
    return /* @__PURE__ */ react_default.createElement(
      Tag,
      {
        className: ["rf-component", className].filter(Boolean).join(" "),
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: "var(--type-rubric-size)",
          fontWeight: "var(--fw-medium)",
          letterSpacing: "var(--track-normal)",
          margin: 0,
          color: "var(--rf-ed-ink)",
          ...style
        },
        ...rest
      },
      sectionEl,
      sub && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("span", { style: { color: "var(--rf-ed-rule)", margin: "0 8px", fontWeight: 400 } }, "|"), /* @__PURE__ */ react_default.createElement("span", { style: { color: "var(--rf-ed-ink)", fontWeight: "var(--fw-medium)" } }, sub))
    );
  }

  // realfast-design/components/editorial/ShareButton.jsx
  function ShareButton({ label = "Share", onClick, style, className, ...rest }) {
    return /* @__PURE__ */ react_default.createElement(
      "button",
      {
        type: "button",
        onClick,
        className: ["rf-component rf-share", className].filter(Boolean).join(" "),
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "var(--font-sans)",
          fontSize: "var(--type-rubric-size)",
          fontWeight: "var(--fw-medium)",
          color: "var(--rf-ed-ink)",
          background: "var(--rf-white)",
          border: "1px solid var(--rf-ed-rule)",
          borderRadius: "var(--radius-sm)",
          padding: "6px 14px",
          cursor: "pointer",
          transition: "background var(--dur-base) var(--ease-standard)",
          ...style
        },
        ...rest
      },
      /* @__PURE__ */ react_default.createElement("span", { style: { fontSize: "var(--type-meta-size)" } }, "\u21A5"),
      label
    );
  }

  // realfast-design/components/editorial/ArticleHeader.jsx
  function ArticleHeader({
    section = "Insights",
    sub = "The realfast view",
    sectionHref = "#",
    title,
    dek,
    author,
    role,
    authorHref = "#",
    avatar,
    date,
    readTime,
    onShare
  }) {
    return /* @__PURE__ */ react_default.createElement("header", { style: { fontFamily: "var(--font-serif)" } }, /* @__PURE__ */ react_default.createElement(Rubric, { section, sub, href: sectionHref, style: { marginBottom: 20 } }), /* @__PURE__ */ react_default.createElement(
      "h1",
      {
        style: {
          fontFamily: "var(--font-serif)",
          fontWeight: "var(--fw-semibold)",
          letterSpacing: "-0.015em",
          lineHeight: 1.05,
          color: "var(--rf-ed-ink)",
          margin: "0 0 22px",
          fontSize: "clamp(34px, 4vw, 58px)"
        }
      },
      title
    ), dek && /* @__PURE__ */ react_default.createElement(
      "p",
      {
        style: {
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(19px, 1.6vw, 24px)",
          lineHeight: 1.4,
          color: "var(--rf-ed-ink-soft)",
          margin: "0 0 28px",
          maxWidth: "44ch"
        }
      },
      dek
    ), /* @__PURE__ */ react_default.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-5)",
          flexWrap: "wrap",
          paddingTop: 22,
          borderTop: "1px solid var(--rf-ed-rule)"
        }
      },
      /* @__PURE__ */ react_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14 } }, avatar && /* @__PURE__ */ react_default.createElement("a", { href: authorHref, style: { flexShrink: 0 } }, /* @__PURE__ */ react_default.createElement(
        "img",
        {
          src: avatar,
          alt: author || "",
          style: {
            width: 48,
            height: 48,
            borderRadius: "50%",
            objectFit: "cover",
            display: "block"
          }
        }
      )), /* @__PURE__ */ react_default.createElement("div", null, /* @__PURE__ */ react_default.createElement(
        "p",
        {
          style: {
            fontFamily: "var(--font-serif)",
            fontSize: 17,
            color: "var(--rf-ed-ink)",
            margin: 0,
            lineHeight: 1.3
          }
        },
        "By",
        " ",
        /* @__PURE__ */ react_default.createElement(
          "a",
          {
            href: authorHref,
            style: { color: "var(--rf-ed-ink)", fontWeight: "var(--fw-bold)", textDecoration: "none" }
          },
          author
        ),
        role && /* @__PURE__ */ react_default.createElement("span", { style: { color: "var(--rf-ed-muted)" } }, ", ", role)
      ), /* @__PURE__ */ react_default.createElement(
        "p",
        {
          style: {
            fontFamily: "var(--font-sans)",
            fontSize: "var(--type-rubric-size)",
            color: "var(--rf-ed-muted)",
            margin: "3px 0 0"
          }
        },
        date,
        readTime && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("span", { style: { margin: "0 8px" } }, "\xB7"), readTime)
      ))),
      /* @__PURE__ */ react_default.createElement(ShareButton, { onClick: onShare })
    ));
  }

  // realfast-design/components/editorial/AuthorBio.jsx
  function AuthorBio({
    name,
    role,
    avatar,
    bio,
    meta,
    eyebrow,
    backLabel = "All posts",
    backHref,
    links = [],
    headingAs = "h2"
  }) {
    const Heading = headingAs;
    return /* @__PURE__ */ react_default.createElement("div", { style: { fontFamily: "var(--font-serif)" } }, backHref && /* @__PURE__ */ react_default.createElement(
      "a",
      {
        href: backHref,
        style: {
          display: "inline-block",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--type-ui)",
          fontWeight: "var(--fw-semibold)",
          color: "var(--text-accent)",
          textDecoration: "none",
          marginBottom: 26
        }
      },
      "\u2190 ",
      backLabel
    ), /* @__PURE__ */ react_default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--space-6)" } }, avatar && /* @__PURE__ */ react_default.createElement(
      "img",
      {
        src: avatar,
        alt: name || "",
        style: {
          width: 92,
          height: 92,
          borderRadius: "50%",
          objectFit: "cover",
          flexShrink: 0,
          display: "block"
        }
      }
    ), /* @__PURE__ */ react_default.createElement("div", null, eyebrow && /* @__PURE__ */ react_default.createElement(
      "p",
      {
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: "var(--type-meta-size)",
          fontWeight: "var(--fw-medium)",
          color: "var(--rf-ed-muted)",
          margin: "0 0 4px"
        }
      },
      eyebrow
    ), /* @__PURE__ */ react_default.createElement(
      Heading,
      {
        style: {
          fontFamily: "var(--font-serif)",
          fontWeight: "var(--fw-semibold)",
          letterSpacing: "-0.015em",
          lineHeight: 1.05,
          color: "var(--rf-ed-ink)",
          margin: 0,
          fontSize: "clamp(32px, 3.4vw, 46px)"
        }
      },
      name
    ), role && /* @__PURE__ */ react_default.createElement(
      "p",
      {
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: 17,
          fontWeight: "var(--fw-semibold)",
          color: "var(--text-accent)",
          margin: "8px 0 0"
        }
      },
      role
    ), meta && /* @__PURE__ */ react_default.createElement(
      "p",
      {
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: "var(--type-ui)",
          color: "var(--rf-ed-muted)",
          margin: "6px 0 0"
        }
      },
      meta
    ))), bio && /* @__PURE__ */ react_default.createElement(
      "p",
      {
        style: {
          fontFamily: "var(--font-serif)",
          fontSize: "var(--type-dek-size)",
          lineHeight: 1.5,
          color: "var(--rf-ed-ink)",
          margin: "26px 0 0",
          maxWidth: "46ch"
        }
      },
      bio
    ), links.length > 0 && /* @__PURE__ */ react_default.createElement("div", { style: { display: "flex", gap: "var(--space-6)", marginTop: 22, flexWrap: "wrap" } }, links.map((l, i) => /* @__PURE__ */ react_default.createElement(
      "a",
      {
        key: i,
        href: l.href,
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: 16,
          fontWeight: "var(--fw-semibold)",
          color: "var(--text-accent)",
          textDecoration: "none"
        }
      },
      l.label,
      " \u2197"
    ))));
  }

  // realfast-design/components/editorial/EditorialBlogCard.jsx
  function EditorialBlogCard({
    section = "Insights",
    sub = "The realfast view",
    title,
    dek,
    date,
    readTime,
    image,
    href = "#",
    author,
    featured = false
  }) {
    const pipe = /* @__PURE__ */ react_default.createElement("span", { style: { color: "var(--rf-ed-rule)", margin: "0 8px" } }, "|");
    const meta = /* @__PURE__ */ react_default.createElement(
      "p",
      {
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: "var(--type-meta-size)",
          color: "var(--rf-ed-muted)",
          margin: 0
        }
      },
      author && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, "By ", /* @__PURE__ */ react_default.createElement("span", { style: { color: "var(--rf-ed-ink-soft)" } }, author), pipe),
      date,
      pipe,
      readTime
    );
    const headline = /* @__PURE__ */ react_default.createElement(
      "h2",
      {
        className: "rf-ed-headline",
        style: {
          fontFamily: "var(--font-serif)",
          fontWeight: "var(--fw-semibold)",
          letterSpacing: "-0.01em",
          color: "var(--rf-ed-ink)",
          margin: featured ? "0 0 12px" : "0 0 18px",
          fontSize: featured ? 34 : 29,
          lineHeight: featured ? 1.08 : 1.14,
          transition: "color var(--dur-base) var(--ease-standard)"
        }
      },
      title
    );
    const linkStyle = {
      textDecoration: "none",
      color: "inherit",
      display: "grid",
      alignItems: "start",
      borderBottom: "1px solid var(--rf-ed-rule)"
    };
    const hoverIn = (e) => {
      const h = e.currentTarget.querySelector(".rf-ed-headline");
      if (h) h.style.color = "var(--rf-ed-red)";
    };
    const hoverOut = (e) => {
      const h = e.currentTarget.querySelector(".rf-ed-headline");
      if (h) h.style.color = "var(--rf-ed-ink)";
    };
    if (featured) {
      return /* @__PURE__ */ react_default.createElement(
        "a",
        {
          href,
          onMouseEnter: hoverIn,
          onMouseLeave: hoverOut,
          className: "rf-component rf-blog-featured",
          style: {
            ...linkStyle,
            gridTemplateColumns: "1.1fr 1fr",
            gap: "var(--space-8)",
            padding: "36px 0"
          }
        },
        /* @__PURE__ */ react_default.createElement("div", null, /* @__PURE__ */ react_default.createElement(Rubric, { section, sub, href, plain: true, style: { marginBottom: 14 } }), headline, dek && /* @__PURE__ */ react_default.createElement(
          "p",
          {
            style: {
              fontFamily: "var(--font-serif)",
              fontSize: "var(--type-body-size)",
              lineHeight: 1.45,
              color: "var(--rf-ed-ink-soft)",
              margin: "0 0 14px"
            }
          },
          dek
        ), meta),
        image && /* @__PURE__ */ react_default.createElement("div", null, /* @__PURE__ */ react_default.createElement("img", { src: image, alt: "", style: { display: "block", width: "100%", height: "auto" } }))
      );
    }
    return /* @__PURE__ */ react_default.createElement(
      "a",
      {
        href,
        onMouseEnter: hoverIn,
        onMouseLeave: hoverOut,
        className: "rf-component",
        style: {
          ...linkStyle,
          gridTemplateColumns: "1fr",
          gap: 0,
          padding: "34px 0"
        }
      },
      /* @__PURE__ */ react_default.createElement(Rubric, { section, sub, href, plain: true, style: { marginBottom: 14 } }),
      headline,
      /* @__PURE__ */ react_default.createElement(
        "div",
        {
          className: "rf-blog-summary",
          style: {
            display: "grid",
            gridTemplateColumns: image ? "minmax(0, 0.82fr) 1fr" : "1fr",
            gap: "var(--space-9)",
            alignItems: "start",
            marginBottom: 18
          }
        },
        image && /* @__PURE__ */ react_default.createElement(
          "img",
          {
            src: image,
            alt: "",
            style: {
              display: "block",
              width: "100%",
              aspectRatio: "3 / 2",
              objectFit: "cover",
              borderRadius: "var(--radius-sm)",
              background: "var(--rf-paper-cream)"
            }
          }
        ),
        dek && /* @__PURE__ */ react_default.createElement(
          "p",
          {
            style: {
              fontFamily: "var(--font-serif)",
              fontSize: 19,
              lineHeight: 1.5,
              color: "var(--rf-ed-ink-soft)",
              margin: 0
            }
          },
          dek
        )
      ),
      meta
    );
  }

  // realfast-design/components/editorial/PullQuote.jsx
  function PullQuote({ children, cite, style, className, ...rest }) {
    return /* @__PURE__ */ react_default.createElement(
      "blockquote",
      {
        className: ["rf-component", className].filter(Boolean).join(" "),
        style: {
          margin: "36px 0 32px",
          padding: "24px 0 22px",
          borderTop: "1px solid var(--rf-ed-rule)",
          borderBottom: "1px solid var(--rf-ed-rule)",
          textAlign: "center",
          ...style
        },
        ...rest
      },
      /* @__PURE__ */ react_default.createElement(
        "p",
        {
          style: {
            fontFamily: "var(--font-serif)",
            fontSize: "var(--type-quote-size)",
            lineHeight: 1.35,
            fontWeight: "var(--fw-semibold)",
            fontStyle: "italic",
            color: "var(--rf-ed-ink)",
            margin: "0 auto",
            maxWidth: 520
          }
        },
        children
      ),
      cite && /* @__PURE__ */ react_default.createElement(
        "cite",
        {
          style: {
            display: "block",
            marginTop: "var(--space-3)",
            fontFamily: "var(--font-sans)",
            fontStyle: "normal",
            fontSize: "var(--type-meta-size)",
            color: "var(--rf-ed-muted)"
          }
        },
        cite
      )
    );
  }
  return __toCommonJS(index_exports);
})();

window.RealfastDesignSystem_e02a4e = Object.assign(window.RealfastDesignSystem_e02a4e || {}, __rfExports);
