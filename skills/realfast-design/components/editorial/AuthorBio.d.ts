import React from "react";

export interface AuthorBioLink {
  label: string;
  href: string;
}

export interface AuthorBioProps {
  /** Author display name. */
  name: string;
  /** Author role, e.g. "UX Design Lead". Rendered in red. */
  role?: string;
  /** Avatar URL (round). */
  avatar?: string;
  /** Bio paragraph. */
  bio?: string;
  /** Meta line, e.g. "1 post · Insights · Writing since Jul 2026". */
  meta?: string;
  /** Small label above the name, e.g. "Written by". */
  eyebrow?: string;
  /** Back-link label. @default "All posts" */
  backLabel?: string;
  /** Back-link target — shown only when set (author-page header use). */
  backHref?: string;
  /** External links, rendered red with a ↗ glyph. */
  links?: AuthorBioLink[];
}

export function AuthorBio(props: AuthorBioProps): React.ReactElement;
