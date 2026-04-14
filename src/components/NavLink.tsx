"use client";

import NextLink from "next/link";
import MuiLink from "@mui/material/Link";
import type { LinkProps } from "@mui/material/Link";

export type NavLinkProps = Omit<LinkProps<typeof NextLink>, "component"> & {
  /** Sets `aria-current="page"` and emphasis styles for navigation. */
  active?: boolean;
};

/**
 * MUI Link wired to Next.js App Router. Must be a Client Component so the Next
 * `Link` implementation is not passed from a Server Component as a prop.
 */
export function NavLink({ active, sx, ...props }: NavLinkProps) {
  const mergedSx = active
    ? [
        { fontWeight: 600, color: "primary.main" },
        ...(sx == null ? [] : Array.isArray(sx) ? sx : [sx]),
      ]
    : sx;

  return (
    <MuiLink
      component={NextLink}
      aria-current={active ? "page" : undefined}
      sx={mergedSx}
      {...props}
    />
  );
}
