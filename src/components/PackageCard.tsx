"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { useId } from "react";

export type PackageCardProps = {
  title: string;
  tagline: string;
  highlights: readonly string[];
  ctaHref: string;
  ctaLabel?: string;
  recommended?: boolean;
  titleHeadingLevel?: 2 | 3;
};

/**
 * Package tier card: heading, tagline, bullet highlights, single CTA.
 * Optional recommended badge; card surface is not a link (explicit button only).
 */
export function PackageCard({
  title,
  tagline,
  highlights,
  ctaHref,
  ctaLabel = "צור קשר",
  recommended,
  titleHeadingLevel = 3,
}: PackageCardProps) {
  const reactId = useId();
  const badgeId = `package-rec-${reactId.replace(/:/g, "")}`;
  const HeadingTag = titleHeadingLevel === 2 ? "h2" : "h3";
  const headingVariant = titleHeadingLevel === 2 ? "h2" : "h3";

  return (
    <Card
      component="article"
      variant="outlined"
      elevation={0}
      aria-describedby={recommended ? badgeId : undefined}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ...(recommended
          ? {
              borderColor: "primary.main",
              borderWidth: 2,
              bgcolor: "action.selected",
            }
          : {}),
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
          {recommended ? (
            <Chip
              id={badgeId}
              label="מומלץ לרוב האתרים העסקיים"
              color="primary"
              size="small"
              sx={{ alignSelf: "flex-start", fontWeight: 600 }}
            />
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
            {tagline}
          </Typography>
          <Box component="div">
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ margin: 0, marginBlockEnd: 0.5, fontWeight: 600 }}
            >
              מה כלול
            </Typography>
            <Stack
              component="ul"
              spacing={0.5}
              sx={{
                margin: 0,
                paddingInlineStart: 2.25,
                listStyleType: "disc",
                listStylePosition: "outside",
              }}
            >
              {highlights.map((line) => (
                <Typography
                  key={line}
                  component="li"
                  variant="body2"
                  sx={{ display: "list-item", paddingInlineStart: 0.25 }}
                >
                  {line}
                </Typography>
              ))}
            </Stack>
          </Box>
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
          href={ctaHref}
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
