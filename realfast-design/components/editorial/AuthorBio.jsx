import React from "react";

/**
 * AuthorBio — the author identity block. Used two ways: as the header of an
 * author page (with a "← All posts" back link and post-count meta) and as the
 * "Written by" footer at the end of an article. Use inside a
 * [data-theme="editorial"] wrapper.
 */
export function AuthorBio({
  name,
  role,
  avatar,
  bio,
  meta,
  eyebrow,
  backLabel = "All posts",
  backHref,
  links = [],
}) {
  return (
    <div style={{ fontFamily: "var(--font-serif)" }}>
      {backHref && (
        <a
          href={backHref}
          style={{
            display: "inline-block",
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            fontWeight: 600,
            color: "var(--rf-ed-red)",
            textDecoration: "none",
            marginBottom: 26,
          }}
        >
          ← {backLabel}
        </a>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        {avatar && (
          <img
            src={avatar}
            alt={name || ""}
            style={{
              width: 92,
              height: 92,
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
              display: "block",
            }}
          />
        )}
        <div>
          {eyebrow && (
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 500,
                color: "var(--rf-ed-muted)",
                margin: "0 0 4px",
              }}
            >
              {eyebrow}
            </p>
          )}
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 600,
              letterSpacing: "-0.015em",
              lineHeight: 1.05,
              color: "var(--rf-ed-ink)",
              margin: 0,
              fontSize: "clamp(32px, 3.4vw, 46px)",
            }}
          >
            {name}
          </h1>
          {role && (
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                fontWeight: 600,
                color: "var(--rf-ed-red)",
                margin: "8px 0 0",
              }}
            >
              {role}
            </p>
          )}
          {meta && (
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                color: "var(--rf-ed-muted)",
                margin: "6px 0 0",
              }}
            >
              {meta}
            </p>
          )}
        </div>
      </div>
      {bio && (
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            lineHeight: 1.5,
            color: "var(--rf-ed-ink)",
            margin: "26px 0 0",
            maxWidth: "46ch",
          }}
        >
          {bio}
        </p>
      )}
      {links.length > 0 && (
        <div style={{ display: "flex", gap: 24, marginTop: 22, flexWrap: "wrap" }}>
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                fontWeight: 600,
                color: "var(--rf-ed-red)",
                textDecoration: "none",
              }}
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
