import React from "react";

export type CardSurface = "page" | "raised" | "overlay" | "inset";

/**
 * Surface container for the light editorial system. Use for feature panels, platform cards, callouts.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Inner padding: CSS length or numeric px. @default var(--space-6) */
  padding?: number | string;
  /** Adds button role, keyboard activation, and hover emphasis. Do not nest interactive controls. @default false */
  interactive?: boolean;
  /** Which surface token to use. @default "raised" */
  raised?: CardSurface;
  /** Render a 2px accent bar along the top edge. @default false */
  accentTop?: boolean;
}

export function Card(props: CardProps): React.ReactElement;
