"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

/**
 * Lightweight RTL checks: card actions, accordion expansion icon, and form labels.
 * Remove or replace when real page content ships.
 */
export function RtlLayoutSmokeSection() {
  return (
    <Stack spacing={4} sx={{ marginBlockStart: 4 }}>
      <Typography variant="h2" component="h2" sx={{ fontSize: "1.25rem" }}>
        בדיקות RTL (זמני)
      </Typography>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3" component="h3" sx={{ fontSize: "1.1rem" }}>
            כרטיס לדוגמה
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBlockStart: 1 }}
          >
            יישור טקסט וריווח פנימי אמורים לעבוד ב־RTL ללא היפוך ידני.
          </Typography>
        </CardContent>
        <CardActions sx={{ paddingInline: 2, paddingBlockEnd: 2 }}>
          <Button
            variant="contained"
            size="small"
            endIcon={<ChevronLeftIcon aria-hidden />}
          >
            המשך
          </Button>
        </CardActions>
      </Card>

      <Box>
        <Typography variant="subtitle1" gutterBottom component="p">
          שאלות נפוצות (תבנית)
        </Typography>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon aria-hidden />}
            aria-controls="rtl-faq-panel"
            id="rtl-faq-header"
            sx={{ flexDirection: "row-reverse" }}
          >
            <Typography component="span">מה כלול בביקורת נגישות?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              תשובה לדוגמה לבדיקת כיוון אייקון ההרחבה ויישור הפאנל.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon aria-hidden />}
            aria-controls="rtl-faq-panel-2"
            id="rtl-faq-header-2"
            sx={{ flexDirection: "row-reverse" }}
          >
            <Typography component="span">
              כמה זמן נמשך ספרינט תיקונים?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              טקסט ממולא יתווסף כשתוכן האמיתי יגיע מהמוצר או מה־CMS.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box component="form" noValidate autoComplete="off">
        <Typography variant="subtitle1" gutterBottom component="p">
          טופס לדוגמה
        </Typography>
        <Stack spacing={2} sx={{ maxWidth: 480 }}>
          <TextField
            required
            id="rtl-demo-name"
            name="demo-name"
            label="שם מלא"
            placeholder="ישראל ישראלי"
            fullWidth
          />
          <TextField
            required
            id="rtl-demo-email"
            name="demo-email"
            type="email"
            label="דוא״ל"
            placeholder="you@example.com"
            fullWidth
          />
          <TextField
            id="rtl-demo-notes"
            name="demo-notes"
            label="הודעה"
            placeholder="איך נוכל לעזור?"
            multiline
            minRows={3}
            fullWidth
          />
        </Stack>
      </Box>
    </Stack>
  );
}
