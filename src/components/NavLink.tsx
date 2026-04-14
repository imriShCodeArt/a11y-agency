"use client";

import NextLink from "next/link";
import MuiLink from "@mui/material/Link";
import type { LinkProps } from "@mui/material/Link";
import { alpha } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

export type NavLinkProps = Omit<LinkProps<typeof NextLink>, "component"> & {
  /** Sets `aria-current="page"` and clear visual + semantic current-page styles. */
  active?: boolean;
};

/**
 * MUI Link wired to Next.js App Router. Must be a Client Component so the Next
 * `Link` implementation is not passed from a Server Component as a prop.
 */
export function NavLink({
  active,
  sx,
  color,
  underline,
  ...props
}: NavLinkProps) {
  const mergedSx = active
    ? [
        ...(sx == null ? [] : Array.isArray(sx) ? sx : [sx]),
        (t: Theme) => ({
          fontWeight: 700,
          color: t.palette.primary.dark,
          backgroundColor: alpha(t.palette.primary.main, 0.14),
          borderRadius: t.shape.borderRadius,
          textDecoration: "none",
        }),
      ]
    : sx;

  return (
    <MuiLink
      component={NextLink}
      aria-current={active ? "page" : undefined}
      color={active ? "primary" : color}
      underline={active ? "none" : underline}
      sx={mergedSx}
      {...props}
    />
  );
}
