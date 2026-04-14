"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { SyntheticEvent } from "react";
import { useId, useState } from "react";
import type { FaqItem } from "@/lib/site-faq";
import { SITE_FAQ_ITEMS } from "@/lib/site-faq";

export type FaqAccordionProps = {
  items?: readonly FaqItem[];
  /** Used when there is no visible section heading (e.g. page already has `h1`). */
  sectionAriaLabel?: string;
  /** Optional visible `h2` above the list (e.g. home preview). */
  sectionTitle?: string;
  sectionHeadingId?: string;
  /**
   * When true, only one panel may be open; matches common FAQ UX and reduces noise for screen reader users.
   */
  exclusive?: boolean;
};

/**
 * Accessible FAQ list: each question is an accordion trigger (`button` semantics, `aria-expanded`),
 * each answer is a `region` labelled by its trigger. Keyboard: focus, Space/Enter, optional Arrow keys via MUI.
 */
export function FaqAccordion({
  items = SITE_FAQ_ITEMS,
  sectionAriaLabel = "שאלות נפוצות",
  sectionTitle,
  sectionHeadingId = "faq-section-heading",
  exclusive = false,
}: FaqAccordionProps) {
  const reactId = useId().replace(/:/g, "");
  const [expandedExclusive, setExpandedExclusive] = useState<string | false>(
    false
  );

  const sectionLabelledBy = sectionTitle ? sectionHeadingId : undefined;

  return (
    <Box
      component="section"
      aria-label={sectionLabelledBy ? undefined : sectionAriaLabel}
      aria-labelledby={sectionLabelledBy}
      sx={{ width: "100%" }}
    >
      {sectionTitle ? (
        <Typography
          id={sectionHeadingId}
          variant="h2"
          component="h2"
          sx={{
            margin: 0,
            marginBlockEnd: 2.5,
            fontSize: { xs: "1.35rem", md: "1.5rem" },
          }}
        >
          {sectionTitle}
        </Typography>
      ) : null}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {items.map((item) => {
          const headerId = `faq-${item.id}-header-${reactId}`;
          const panelId = `faq-${item.id}-panel-${reactId}`;

          const isExpanded =
            exclusive && expandedExclusive === item.id ? true : false;

          const handleChange = exclusive
            ? (_event: SyntheticEvent, next: boolean) => {
                setExpandedExclusive(next ? item.id : false);
              }
            : undefined;

          return (
            <Accordion
              key={item.id}
              disableGutters
              variant="outlined"
              elevation={0}
              {...(exclusive
                ? {
                    expanded: isExpanded,
                    onChange: handleChange,
                  }
                : {})}
              sx={{
                borderRadius: 1,
                "&:before": { display: "none" },
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon aria-hidden />}
                aria-controls={panelId}
                id={headerId}
                sx={{
                  flexDirection: "row-reverse",
                  minHeight: 48,
                  "& .MuiAccordionSummary-content": {
                    marginY: 1.25,
                  },
                }}
              >
                <Typography
                  component="span"
                  variant="subtitle1"
                  fontWeight={600}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                sx={{
                  paddingTop: 0,
                  borderTop: 1,
                  borderColor: "divider",
                }}
              >
                <Typography
                  component="div"
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.65 }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
}
