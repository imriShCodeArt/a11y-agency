"use client";

import CheckRounded from "@mui/icons-material/CheckRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
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

const srOnly: Record<string, string | number> = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
};

/**
 * Package tier card — pricing-style layout: teal title, check list, corner ribbon when recommended.
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
  const theme = useTheme();
  const reactId = useId();
  const badgeId = `package-rec-${reactId.replace(/:/g, "")}`;
  const HeadingTag = titleHeadingLevel === 2 ? "h2" : "h3";
  const headingVariant = titleHeadingLevel === 2 ? "h2" : "h3";
  const isRtl = theme.direction === "rtl";

  return (
    <Card
      component="article"
      variant="outlined"
      elevation={0}
      aria-describedby={recommended ? badgeId : undefined}
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2.5,
        bgcolor: "background.paper",
        borderWidth: recommended ? 2 : 1.5,
        borderStyle: "solid",
        borderColor: recommended ? "primary.main" : "primary.light",
        boxShadow: recommended ? 2 : 0,
      }}
    >
      {recommended ? (
        <>
          <Typography id={badgeId} component="span" sx={srOnly}>
            חבילה מומלצת
          </Typography>
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              top: 18,
              ...(isRtl ? { right: -36 } : { left: -36 }),
              width: 148,
              py: 0.5,
              bgcolor: "primary.main",
              color: "primary.contrastText",
              fontSize: "0.6875rem",
              fontWeight: 800,
              letterSpacing: "0.02em",
              textAlign: "center",
              transform: isRtl ? "rotate(45deg)" : "rotate(-45deg)",
              boxShadow: 1,
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            מומלץ
          </Box>
        </>
      ) : null}

      <CardContent
        sx={{
          flexGrow: 1,
          padding: { xs: 2.5, sm: 3 },
          paddingTop: recommended ? { xs: 4, sm: 4.5 } : { xs: 2.5, sm: 3 },
          "&:last-child": { paddingBottom: { xs: 2.5, sm: 3 } },
        }}
      >
        <Stack spacing={2}>
          <Typography
            variant={headingVariant}
            component={HeadingTag}
            sx={{
              margin: 0,
              color: "primary.main",
              fontWeight: 800,
              fontSize:
                titleHeadingLevel === 2
                  ? { xs: "1.4rem", sm: "1.55rem" }
                  : { xs: "1.28rem", sm: "1.4rem" },
              lineHeight: 1.3,
              paddingInlineEnd: recommended ? 3 : 0,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="p"
            sx={{ margin: 0, lineHeight: 1.65, fontSize: "0.9375rem" }}
          >
            {tagline}
          </Typography>

          <Stack
            component="ul"
            spacing={1.5}
            sx={{
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}
          >
            {highlights.map((line) => (
              <Stack
                key={line}
                component="li"
                direction="row"
                spacing={1.25}
                alignItems="flex-start"
                sx={{ textAlign: "start" }}
              >
                <Box
                  aria-hidden
                  sx={{
                    width: 22,
                    height: 22,
                    minWidth: 22,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "3px",
                  }}
                >
                  <CheckRounded
                    sx={{
                      fontSize: 15,
                      color: "primary.contrastText",
                    }}
                  />
                </Box>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                    lineHeight: 1.55,
                    fontSize: "0.9rem",
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  {line}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </CardContent>
      <CardActions
        sx={{
          paddingInline: { xs: 2.5, sm: 3 },
          paddingBlockEnd: { xs: 2.5, sm: 3 },
          paddingBlockStart: 0,
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Button
          component={NextLink}
          href={ctaHref}
          variant="contained"
          color="primary"
          size="large"
          sx={{
            minWidth: { xs: "100%", sm: "auto" },
            borderRadius: 999,
            px: 3,
            py: 1.25,
            fontWeight: 700,
            boxShadow: "none",
            "&:hover": { boxShadow: 1 },
          }}
        >
          {ctaLabel}
        </Button>
      </CardActions>
    </Card>
  );
}
