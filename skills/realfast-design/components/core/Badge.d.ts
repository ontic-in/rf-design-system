import React from "react";

export type BadgeTone = "neutral" | "blue" | "navy" | "red" | "ink" | "success";

/**
 * Compact status / category label. Use for platform tags, blog categories,
 * and status chips.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** Color tone. @default "neutral" */
  tone?: BadgeTone;
  /** Hairline-only (no fill). @default false */
  outline?: boolean;
}

export function Badge(props: BadgeProps): React.ReactElement;
