import React from "react";

export type CardSurface = "page" | "raised" | "overlay" | "inset";

/**
 * Surface container that inverts between the dark product and light editorial
 * themes automatically. Use for feature panels, platform cards, callouts.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Inner padding in px. @default 24 */
  padding?: number;
  /** Adds hover lift + border emphasis. @default false */
  interactive?: boolean;
  /** Which surface token to use. @default "raised" */
  raised?: CardSurface;
  /** Render a 3px accent bar along the top edge. @default false */
  accentTop?: boolean;
}

export function Card(props: CardProps): React.ReactElement;
