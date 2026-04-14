import VerifiedOutlined from "@mui/icons-material/VerifiedOutlined";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { TrustProofContent } from "@/lib/site-trust";

export type TrustProofSectionProps = {
  content: TrustProofContent;
  /** Stable id for the section `h2` (`aria-labelledby` on `<section>`). */
  sectionHeadingId: string;
};

/**
 * Credibility / proof block: intro, titled lists with icons (decorative), optional closing line.
 * Reading order: `h2` → intro `p` → repeated `h3` + `ul` → optional closing `p`.
 */
export function TrustProofSection({
  content,
  sectionHeadingId,
}: TrustProofSectionProps) {
  return (
    <Box
      component="section"
      aria-labelledby={sectionHeadingId}
      sx={{
        width: "100%",
        borderRadius: 2,
        border: 1,
        borderColor: "divider",
        bgcolor: "grey.50",
        padding: { xs: 2.5, sm: 3 },
      }}
    >
      <Typography
        id={sectionHeadingId}
        variant="h2"
        component="h2"
        sx={{
          margin: 0,
          marginBlockEnd: 1.5,
          fontSize: { xs: "1.35rem", md: "1.5rem" },
        }}
      >
        {content.sectionTitle}
      </Typography>

      <Typography
        variant="body1"
        component="p"
        color="text.secondary"
        sx={{ margin: 0, marginBlockEnd: 3, lineHeight: 1.65 }}
      >
        {content.intro}
      </Typography>

      <Stack spacing={3}>
        {content.blocks.map((block) => (
          <Box key={block.id}>
            <Typography
              variant="subtitle1"
              component="h3"
              sx={{
                margin: 0,
                marginBlockEnd: 1.25,
                fontWeight: 700,
                fontSize: "1rem",
                color: "text.primary",
              }}
            >
              {block.title}
            </Typography>
            <Box
              component="ul"
              sx={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 1.25,
              }}
            >
              {block.items.map((item) => (
                <Box
                  key={item.id}
                  component="li"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: 1.25,
                    textAlign: "start",
                  }}
                >
                  <VerifiedOutlined
                    sx={{
                      fontSize: 22,
                      color: "primary.main",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                    aria-hidden
                  />
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ lineHeight: 1.6, color: "text.primary" }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Stack>

      {content.closing ? (
        <Typography
          variant="body2"
          component="p"
          color="text.secondary"
          sx={{ margin: 0, marginBlockStart: 3, lineHeight: 1.65 }}
        >
          {content.closing}
        </Typography>
      ) : null}
    </Box>
  );
}
