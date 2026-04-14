"use client";

import NextLink from "next/link";
import MuiLink from "@mui/material/Link";
import type { LinkProps } from "@mui/material/Link";

export type NavLinkProps = Omit<LinkProps<typeof NextLink>, "component">;

/**
 * MUI Link wired to Next.js App Router. Must be a Client Component so the Next
 * `Link` implementation is not passed from a Server Component as a prop.
 */
export function NavLink(props: NavLinkProps) {
  return <MuiLink component={NextLink} {...props} />;
}
