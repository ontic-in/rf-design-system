import React from "react";
export type ButtonVariant = "primary" | "signal" | "blue" | "navy" | "ink" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
interface ButtonVisualProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  full?: boolean;
}
/** Native button defaults to type="button". Disabled links cannot activate. */
export type ButtonProps = ButtonVisualProps & (
  | ({ as?: "button" } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: "a" } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
);
export function Button(props: ButtonProps): React.ReactElement;
