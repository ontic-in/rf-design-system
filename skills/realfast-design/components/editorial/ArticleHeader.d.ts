import React from "react";

export interface ArticleHeaderProps {
  /** Red rubric section word. @default "Insights" */
  section?: string;
  /** Grey sub-rubric. @default "The realfast view" */
  sub?: string;
  /** Section link target. @default "#" */
  sectionHref?: string;
  /** Article headline. */
  title: string;
  /** Standfirst / dek. */
  dek?: string;
  /** Author display name. */
  author?: string;
  /** Author role, e.g. "UX Design Lead". */
  role?: string;
  /** Author page link. @default "#" */
  authorHref?: string;
  /** Author avatar URL (round). */
  avatar?: string;
  /** Ordinal date, e.g. "Jul 13th 2026". */
  date?: string;
  /** Reading time, e.g. "5 min read". */
  readTime?: string;
  /** Share button handler. */
  onShare?: () => void;
}

export function ArticleHeader(props: ArticleHeaderProps): React.ReactElement;
