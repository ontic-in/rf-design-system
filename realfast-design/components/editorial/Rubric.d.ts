import React from "react";

/**
 * The red section + grey sub-rubric line that opens every editorial article and
 * listing card. Must live inside a [data-theme="editorial"] wrapper.
 */
export interface RubricProps extends React.HTMLAttributes<HTMLElement> {
  /** Red section word, e.g. "Insights". */
  section: string;
  /** Grey sub-rubric, e.g. "The realfast view". */
  sub?: string;
  /** Link target for the section word. @default "#" */
  href?: string;
  /** Wrapper tag. @default "p" */
  as?: "p" | "div";
  /** Render the section as a span (no link) — use when nested inside an anchor. @default false */
  plain?: boolean;
}

export function Rubric(props: RubricProps): React.ReactElement;
