"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import NextLink from "next/link";
import { useId } from "react";

export type CtaSectionCta = {
  href: string;
  label: string;
};

export type CtaSectionProps = {
  title: string;
  body?: string;
  primaryCta: CtaSectionCta;
  secondaryCta?: CtaSectionCta;
  /** Default `2` for use under a page `h1`. */
  headingLevel?: 2 | 3;
  /** Stable id for `aria-labelledby` on the section. */
  sectionHeadingId?: string;
};

/**
 * End-of-page CTA band: title, optional body, primary + optional secondary link buttons.
 */
export function CtaSection({
  title,
  body,
  primaryCta,
  secondaryCta,
  headingLevel = 2,
  sectionHeadingId: sectionHeadingIdProp,
}: CtaSectionProps) {
  const reactId = useId().replace(/:/g, "");
  const headingId = sectionHeadingIdProp ?? `cta-section-heading-${reactId}`;
  const HeadingTag = headingLevel === 2 ? "h2" : "h3";
  const headingVariant = headingLevel === 2 ? "h2" : "h3";

  return (
    <Box
      component="section"
      aria-labelledby={headingId}
      sx={(theme) => ({
        width: "100%",
        borderRadius: 2,
        border: 1,
        borderColor: "divider",
        bgcolor: alpha(theme.palette.primary.main, 0.06),
        padding: { xs: 3, sm: 4 },
        textAlign: "center",
      })}
    >
      <Stack
        spacing={2}
        alignItems="center"
        sx={{ maxWidth: "36rem", marginInline: "auto" }}
      >
        <Typography
          id={headingId}
          variant={headingVariant}
          component={HeadingTag}
          sx={{ margin: 0 }}
        >
          {title}
        </Typography>
        {body ? (
          <Typography
            variant="body1"
            component="p"
            color="text.secondary"
            sx={{ margin: 0, lineHeight: 1.65 }}
          >
            {body}
          </Typography>
        ) : null}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
          sx={{ marginBlockStart: 0.5, width: "100%" }}
        >
          <Button
            component={NextLink}
            href={primaryCta.href}
            variant="contained"
            color="primary"
            size="large"
            sx={{ minWidth: { sm: 180 }, borderRadius: 999 }}
          >
            {primaryCta.label}
          </Button>
          {secondaryCta ? (
            <Button
              component={NextLink}
              href={secondaryCta.href}
              variant="outlined"
              color="primary"
              size="large"
              sx={{ minWidth: { sm: 180 }, borderRadius: 999 }}
            >
              {secondaryCta.label}
            </Button>
          ) : null}
        </Stack>
      </Stack>
    </Box>
  );
}
