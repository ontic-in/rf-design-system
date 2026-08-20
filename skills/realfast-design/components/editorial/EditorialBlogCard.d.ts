import React from "react";

/**
 * The blog listing card — featured (image-led lead) and row (text + thumbnail)
 * variants. Use inside [data-theme="editorial"]. Mirrors EditorialBlogCard.astro.
 *
 * @startingPoint section="Editorial" subtitle="Economist-style blog listing card" viewport="700x260"
 */
export interface EditorialBlogCardProps {
  /** Red rubric section word. @default "Insights" */
  section?: string;
  /** Grey sub-rubric. @default "The realfast view" */
  sub?: string;
  /** Post headline. */
  title: string;
  /** Standfirst / description. */
  dek?: string;
  /** Ordinal date, e.g. "May 21st 2026". */
  date?: string;
  /** Reading time, e.g. "6 min read". */
  readTime?: string;
  /** Author byline, rendered as "By {author}" ahead of the date. */
  author?: string;
  /** Cover image URL. */
  image?: string;
  /** Link target. @default "#" */
  href?: string;
  /** Image-led lead layout. @default false */
  featured?: boolean;
}

export function EditorialBlogCard(props: EditorialBlogCardProps): React.ReactElement;
