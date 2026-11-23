import React from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "link"
  | "destructive"
  /** @deprecated renders as primary */
  | "blue"
  /** @deprecated renders as primary */
  | "navy"
  /** @deprecated renders as primary */
  | "ink"
  /** @deprecated renders as primary */
  | "signal"
  /** @deprecated renders as link */
  | "ghost"
  /** @deprecated renders as destructive */
  | "danger";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * The realfast action button. Four kinds — primary (ultramarine light leak),
 * secondary (periwinkle tint with pale light), link (ultramarine, underlined)
 * and destructive (pale red tint, the only red) — each with a light-surface
 * and a dark-band look. Sizes 36 / 44 / 52px, 2px corners, no arrows.
 * Values live in tokens/buttons.css.
 *
 * @startingPoint section="Core" subtitle="Primary, secondary, link and destructive, on light and dark" viewport="700x220"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Button label / contents. Say what happens: "Book a call", not "Submit". */
  children?: React.ReactNode;
  /** Kind of action. One primary per view. @default "primary" */
  variant?: ButtonVariant;
  /** sm 36px (dense tables), md 44px (default), lg 52px (website heroes). @default "md" */
  size?: ButtonSize;
  /** Use the dark-band look (navy or ink sections). @default false */
  onDark?: boolean;
  /** Optional icon before the label (Tabler outline, currentColor). */
  iconLeft?: React.ReactNode;
  /** Discouraged: buttons carry no arrows. Kept for compatibility. */
  iconRight?: React.ReactNode;
  /** Disabled state. @default false */
  disabled?: boolean;
  /** Stretch to fill the container width (page-level buttons on phones). @default false */
  full?: boolean;
  /** Render as a different tag, e.g. "a". @default "button" */
  as?: "button" | "a";
  href?: string;
}

export function Button(props: ButtonProps): React.ReactElement;
