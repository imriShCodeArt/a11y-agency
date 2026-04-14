import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { ProcessStep } from "@/lib/site-process";
import { SITE_PROCESS_STEPS } from "@/lib/site-process";

export type ProcessStepsProps = {
  /** Visible section title (`h2`). */
  sectionTitle?: string;
  /** Stable id for `aria-labelledby` on the section. */
  sectionHeadingId?: string;
  steps?: readonly ProcessStep[];
  /** Level for each step title under the section heading (default 3). */
  stepHeadingLevel?: 3 | 4;
};

/**
 * Ordered, semantic process flow: `<section>` + `<h2>` + `<ol>` with step titles and copy.
 * Decorative step numbers are `aria-hidden`; sequence comes from the ordered list.
 */
export function ProcessSteps({
  sectionTitle = "תהליך הליווי",
  sectionHeadingId = "process-steps-heading",
  steps = SITE_PROCESS_STEPS,
  stepHeadingLevel = 3,
}: ProcessStepsProps) {
  const StepHeading = stepHeadingLevel === 3 ? "h3" : "h4";
  const stepVariant = stepHeadingLevel === 3 ? "h6" : "subtitle1";

  return (
    <Box
      component="section"
      aria-labelledby={sectionHeadingId}
      sx={{ width: "100%" }}
    >
      <Typography
        id={sectionHeadingId}
        variant="h2"
        component="h2"
        sx={{
          margin: 0,
          marginBlockEnd: { xs: 2.5, md: 3 },
          fontSize: { xs: "1.35rem", md: "1.5rem" },
        }}
      >
        {sectionTitle}
      </Typography>

      <Box
        component="ol"
        sx={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2.5, md: 3 },
        }}
      >
        {steps.map((step, index) => (
          <Box
            key={step.id}
            component="li"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: { xs: 2, sm: 2.5 },
              textAlign: "start",
            }}
          >
            <Box
              aria-hidden
              sx={{
                width: 36,
                height: 36,
                minWidth: 36,
                borderRadius: "50%",
                bgcolor: "primary.main",
                color: "primary.contrastText",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "0.9rem",
                lineHeight: 1,
                flexShrink: 0,
                marginTop: "2px",
              }}
            >
              {index + 1}
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                variant={stepVariant}
                component={StepHeading}
                sx={{
                  margin: 0,
                  marginBlockEnd: 0.75,
                  fontWeight: 700,
                  color: "primary.dark",
                  fontSize: stepHeadingLevel === 3 ? "1.05rem" : "1rem",
                }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                color="text.secondary"
                sx={{ margin: 0, lineHeight: 1.65 }}
              >
                {step.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
