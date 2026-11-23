import React from "react";

export type BadgeTone =
  | "neutral"
  | "product"
  | "category"
  | "good"
  | "warn"
  | "bad"
  /** @deprecated renders as product */
  | "blue"
  /** @deprecated renders as product */
  | "navy"
  /** @deprecated renders as product */
  | "ink"
  /** @deprecated renders as category */
  | "red"
  /** @deprecated renders as good */
  | "success";

/**
 * Compact label for products, categories and status. Tinted fills with deeper
 * text, no solid fills; categories carry a small red flag dot.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** What the badge labels. @default "neutral" */
  tone?: BadgeTone;
  /** Hairline in the label colour instead of a fill. @default false */
  outline?: boolean;
}

export function Badge(props: BadgeProps): React.ReactElement;
