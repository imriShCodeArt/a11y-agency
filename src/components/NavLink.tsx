"use client";

import NextLink from "next/link";
import MuiLink from "@mui/material/Link";
import type { LinkProps } from "@mui/material/Link";
import { alpha } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

export type NavLinkActiveVariant = "pill" | "inline" | "brand";

export type NavLinkProps = Omit<LinkProps<typeof NextLink>, "component"> & {
  /** Sets `aria-current="page"` and current-route visuals when true. */
  active?: boolean;
  /**
   * `pill` — list / drawer (full background). `inline` — horizontal toolbar (underline).
   * `brand` — site title (no pill; weight + color only).
   */
  activeVariant?: NavLinkActiveVariant;
};

function activeSx(
  t: Theme,
  variant: NavLinkActiveVariant
): Record<string, unknown> {
  if (variant === "pill") {
    return {
      fontWeight: 700,
      color: t.palette.primary.dark,
      backgroundColor: alpha(t.palette.primary.main, 0.14),
      borderRadius: t.shape.borderRadius,
      textDecoration: "none",
    };
  }
  if (variant === "brand") {
    return {
      fontWeight: 700,
      color: t.palette.primary.dark,
      backgroundColor: "transparent",
      textDecoration: "none",
    };
  }
  return {
    fontWeight: 700,
    color: t.palette.primary.dark,
    backgroundColor: "transparent",
    textDecoration: "underline",
    textDecorationColor: t.palette.primary.main,
    textDecorationThickness: 2,
    textUnderlineOffset: 6,
  };
}

/**
 * MUI Link wired to Next.js App Router. Must be a Client Component so the Next
 * `Link` implementation is not passed from a Server Component as a prop.
 */
export function NavLink({
  active,
  activeVariant = "inline",
  sx,
  color,
  underline,
  ...props
}: NavLinkProps) {
  const mergedSx = active
    ? [
        ...(sx == null ? [] : Array.isArray(sx) ? sx : [sx]),
        (t: Theme) => activeSx(t, activeVariant),
      ]
    : sx;

  const resolvedColor = !active
    ? color
    : activeVariant === "brand"
      ? undefined
      : "primary";

  return (
    <MuiLink
      component={NextLink}
      aria-current={active ? "page" : undefined}
      color={resolvedColor}
      underline={active ? "none" : underline}
      sx={mergedSx}
      {...props}
    />
  );
}
