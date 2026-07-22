import React from "react";
import { Rubric } from "./Rubric.jsx";
import { ShareButton } from "./ShareButton.jsx";

/**
 * ArticleHeader — the full post header on a blog article page: rubric, serif
 * headline, standfirst, then a byline row with the author avatar, name + role,
 * date · read-time, and a Share control. Mirrors the production article header.
 * Use inside a [data-theme="editorial"] wrapper.
 */
export function ArticleHeader({
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
  onShare,
}) {
  return (
    <header style={{ fontFamily: "var(--font-serif)" }}>
      <Rubric section={section} sub={sub} href={sectionHref} style={{ marginBottom: 20 }} />
      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 600,
          letterSpacing: "-0.015em",
          lineHeight: 1.05,
          color: "var(--rf-ed-ink)",
          margin: "0 0 22px",
          fontSize: "clamp(34px, 4vw, 58px)",
        }}
      >
        {title}
      </h1>
      {dek && (
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(19px, 1.6vw, 24px)",
            lineHeight: 1.4,
            color: "var(--rf-ed-ink-soft)",
            margin: "0 0 28px",
            maxWidth: "44ch",
          }}
        >
          {dek}
        </p>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
          paddingTop: 22,
          borderTop: "1px solid var(--rf-ed-rule)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {avatar && (
            <a href={authorHref} style={{ flexShrink: 0 }}>
              <img
                src={avatar}
                alt={author || ""}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </a>
          )}
          <div>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 17,
                color: "var(--rf-ed-ink)",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              By{" "}
              <a
                href={authorHref}
                style={{ color: "var(--rf-ed-ink)", fontWeight: 700, textDecoration: "none" }}
              >
                {author}
              </a>
              {role && <span style={{ color: "var(--rf-ed-muted)" }}>, {role}</span>}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                color: "var(--rf-ed-muted)",
                margin: "3px 0 0",
              }}
            >
              {date}
              {readTime && (
                <>
                  <span style={{ margin: "0 8px" }}>·</span>
                  {readTime}
                </>
              )}
            </p>
          </div>
        </div>
        <ShareButton onClick={onShare} />
      </div>
    </header>
  );
}
