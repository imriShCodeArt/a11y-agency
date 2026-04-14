"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { useId } from "react";

export type PageHeroCta = {
  href: string;
  label: string;
};

export type PageHeroProps = {
  headline: string;
  /** Lead line under the headline (rendered as a paragraph, not a heading). */
  subheadline?: string;
  /** Optional supporting copy below the subheadline. */
  supportingText?: string;
  primaryCta: PageHeroCta;
  secondaryCta?: PageHeroCta;
  /**
   * `1` — main page title (default). Use `2` only when this hero sits below an existing `h1`
   * (e.g. a nested campaign block).
   */
  headingLevel?: 1 | 2;
};

/**
 * Marketing hero: headline, optional subhead/supporting text, primary + optional secondary CTA.
 * Use `headingLevel={2}` when the page already exposes an `h1` elsewhere.
 */
export function PageHero({
  headline,
  subheadline,
  supportingText,
  primaryCta,
  secondaryCta,
  headingLevel = 1,
}: PageHeroProps) {
  const reactId = useId();
  const headingId = `page-hero-heading-${reactId.replace(/:/g, "")}`;
  const HeadingTag = headingLevel === 1 ? "h1" : "h2";
  const headingVariant = headingLevel === 1 ? "h1" : "h2";

  return (
    <Box
      component="section"
      aria-labelledby={headingId}
      sx={{
        py: { xs: 5, md: 7 },
        bgcolor: "background.default",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 2.5, md: 3 }} sx={{ maxWidth: { md: "48rem" } }}>
          <Typography
            id={headingId}
            variant={headingVariant}
            component={HeadingTag}
            sx={{ margin: 0 }}
          >
            {headline}
          </Typography>
          {subheadline ? (
            <Typography
              variant="subtitle1"
              component="p"
              color="text.secondary"
              sx={{ margin: 0, fontSize: { xs: "1.05rem", md: "1.125rem" } }}
            >
              {subheadline}
            </Typography>
          ) : null}
          {supportingText ? (
            <Typography variant="body1" component="p" sx={{ margin: 0 }}>
              {supportingText}
            </Typography>
          ) : null}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            useFlexGap
            flexWrap="wrap"
            sx={{ marginBlockStart: { xs: 0.5, md: 1 } }}
          >
            <Button
              component={NextLink}
              href={primaryCta.href}
              variant="contained"
              color="primary"
              size="large"
              sx={{ minWidth: { sm: 160 } }}
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
                sx={{ minWidth: { sm: 160 } }}
              >
                {secondaryCta.label}
              </Button>
            ) : null}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
