import React from "react";

/** Centered italic serif pull-quote with top & bottom hairlines. */
export interface PullQuoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  children?: React.ReactNode;
  /** Optional attribution line below the quote. */
  cite?: string;
}

export function PullQuote(props: PullQuoteProps): React.ReactElement;
