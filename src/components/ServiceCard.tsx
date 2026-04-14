"use client";

import AutorenewOutlined from "@mui/icons-material/AutorenewOutlined";
import BuildCircleOutlined from "@mui/icons-material/BuildCircleOutlined";
import FactCheckOutlined from "@mui/icons-material/FactCheckOutlined";
import GavelOutlined from "@mui/icons-material/GavelOutlined";
import TravelExploreOutlined from "@mui/icons-material/TravelExploreOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import type { ReactNode } from "react";
import type { SiteServiceId, SiteServiceSummary } from "@/lib/site-services";

const SERVICE_ICONS: Record<SiteServiceId, ReactNode> = {
  "accessibility-risk-review": (
    <TravelExploreOutlined sx={{ fontSize: 40 }} aria-hidden />
  ),
  "full-accessibility-audit": (
    <FactCheckOutlined sx={{ fontSize: 40 }} aria-hidden />
  ),
  "remediation-sprint": (
    <BuildCircleOutlined sx={{ fontSize: 40 }} aria-hidden />
  ),
  "statement-compliance": <GavelOutlined sx={{ fontSize: 40 }} aria-hidden />,
  "ongoing-maintenance": (
    <AutorenewOutlined sx={{ fontSize: 40 }} aria-hidden />
  ),
};

export type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  /** Visible label for the single in-card action (avoids a full-card link / click trap). */
  ctaLabel?: string;
  /** Decorative visual only; wrapper is `aria-hidden`. */
  icon?: ReactNode;
  /** Use `2` on listing pages under an `h1`; use `3` under a section `h2` (e.g. home). */
  titleHeadingLevel?: 2 | 3;
};

/**
 * Service teaser card: heading + description + one explicit CTA.
 * The card surface is not a link; focus stays on the button for predictable keyboard/AT behavior.
 */
export function ServiceCard({
  title,
  description,
  href,
  ctaLabel = "לפרטים",
  icon,
  titleHeadingLevel = 3,
}: ServiceCardProps) {
  const HeadingTag = titleHeadingLevel === 2 ? "h2" : "h3";
  const headingVariant = titleHeadingLevel === 2 ? "h2" : "h3";

  return (
    <Card
      component="article"
      variant="outlined"
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          paddingBottom: 1,
          "&:last-child": { paddingBottom: 1 },
        }}
      >
        <Stack spacing={1.5}>
          {icon ? (
            <Box
              sx={{
                color: "primary.main",
                display: "flex",
                alignItems: "center",
              }}
              aria-hidden
            >
              {icon}
            </Box>
          ) : null}
          <Typography
            variant={headingVariant}
            component={HeadingTag}
            sx={{
              margin: 0,
              fontSize:
                titleHeadingLevel === 2
                  ? { xs: "1.35rem", sm: "1.5rem" }
                  : { xs: "1.2rem", sm: "1.25rem" },
              lineHeight: 1.35,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="p"
            sx={{ margin: 0 }}
          >
            {description}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions
        sx={{
          paddingInline: 2,
          paddingBlockEnd: 2,
          paddingBlockStart: 0,
          flexWrap: "wrap",
        }}
      >
        <Button
          component={NextLink}
          href={href}
          variant="contained"
          color="primary"
          size="medium"
          sx={{ minWidth: { xs: "100%", sm: "auto" } }}
        >
          {ctaLabel}
        </Button>
      </CardActions>
    </Card>
  );
}

export function SiteServiceCard({
  service,
  titleHeadingLevel,
}: {
  service: SiteServiceSummary;
  titleHeadingLevel?: 2 | 3;
}) {
  return (
    <ServiceCard
      title={service.title}
      description={service.description}
      href={service.href}
      icon={SERVICE_ICONS[service.id]}
      titleHeadingLevel={titleHeadingLevel}
    />
  );
}
