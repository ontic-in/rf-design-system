import React from "react";

export type ButtonVariant = "primary" | "blue" | "navy" | "ink" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * The primary action primitive. Solid fills draw from the four canonical brand
 * colors — red (primary), blue, navy, ink — plus an ink outline (secondary) and a
 * text-only ghost. Uniform 2px corners.
 *
 * @startingPoint section="Core" subtitle="Brand action button, all variants" viewport="700x160"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Button label / contents. */
  children?: React.ReactNode;
  /** Visual style — brand-color fills, outline, or ghost. @default "primary" */
  variant?: ButtonVariant;
  /** Size preset. @default "md" */
  size?: ButtonSize;
  /** Element rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Element rendered after the label. */
  iconRight?: React.ReactNode;
  /** Disabled state. @default false */
  disabled?: boolean;
  /** Stretch to fill the container width. @default false */
  full?: boolean;
  /** Render as a different tag, e.g. "a". @default "button" */
  as?: "button" | "a";
}

export function Button(props: ButtonProps): React.ReactElement;
