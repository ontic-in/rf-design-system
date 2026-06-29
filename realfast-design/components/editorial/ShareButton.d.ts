import React from "react";

/** The editorial share control (white fill, hairline border, ↥ glyph). */
export interface ShareButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button label. @default "Share" */
  label?: string;
}

export function ShareButton(props: ShareButtonProps): React.ReactElement;
