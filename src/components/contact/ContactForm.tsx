"use client";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useMemo, useState } from "react";
import {
  FormFieldEmail,
  FormFieldSelect,
  FormFieldText,
  FormFieldTextarea,
  FormFieldUrl,
} from "@/components/form/FormFields";

const TOPIC_OPTIONS = [
  { value: "risk-review", label: "סקירת סיכוני נגישות" },
  { value: "full-audit", label: "ביקורת נגישות מלאה" },
  { value: "remediation", label: "ספרינט תיקונים" },
  { value: "maintenance", label: "תחזוקה שוטפת" },
  { value: "statement", label: "הצהרת נגישות" },
  { value: "other", label: "אחר" },
] as const;

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/**
 * Contact inquiry form — uses shared form field components (labels, helper/error/success text).
 * Submit is a client-side demo (no backend); shows a success state for UX testing.
 */
export function ContactForm() {
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [topicErr, setTopicErr] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [messageErr, setMessageErr] = useState("");

  const topicOptions = useMemo(
    () => TOPIC_OPTIONS.map((o) => ({ value: o.value, label: o.label })),
    []
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(false);

    let t = "";
    let n = "";
    let em = "";
    let m = "";

    if (!topic) t = "נא לבחור נושא.";
    if (!name.trim()) n = "נא למלא שם.";
    if (!email.trim()) em = "נא למלא דוא״ל.";
    else if (!validateEmail(email)) em = "נא להזין כתובת דוא״ל תקינה.";
    if (!message.trim()) m = "נא לכתוב הודעה קצרה.";

    setTopicErr(t);
    setNameErr(n);
    setEmailErr(em);
    setMessageErr(m);

    if (t || n || em || m) return;

    setSubmitted(true);
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="on">
      <Stack spacing={2.5}>
        {submitted ? (
          <Alert severity="success" role="status">
            תודה — קיבלנו את פנייתך (הדגמה ללא שליחה אמיתית). בפרודקשן יחוברו
            כאן שליחה לשרת או לספק דוא״ל.
          </Alert>
        ) : null}

        <FormFieldSelect
          id="contact-topic"
          name="topic"
          label="נושא הפנייה"
          required
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          options={topicOptions}
          placeholderLabel="בחרו נושא"
          helpText="עוזר לנו להפנות את הפנייה לצוות המתאים."
          error={Boolean(topicErr)}
          errorText={topicErr || undefined}
          disabled={submitted}
        />

        <FormFieldText
          id="contact-name"
          name="name"
          label="שם מלא"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          helpText="איך לפנות אליכם בחזרה."
          error={Boolean(nameErr)}
          errorText={nameErr || undefined}
          disabled={submitted}
        />

        <FormFieldEmail
          id="contact-email"
          name="email"
          label="דוא״ל"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helpText="לא משתפים עם צד שלישי לשיווק."
          error={Boolean(emailErr)}
          errorText={emailErr || undefined}
          disabled={submitted}
        />

        <FormFieldUrl
          id="contact-site"
          name="siteUrl"
          label="כתובת האתר (אופציונלי)"
          value={siteUrl}
          onChange={(e) => setSiteUrl(e.target.value)}
          helpText="אם יש כבר אתר או סביבת בדיקות — עוזר להבין הקשר."
          disabled={submitted}
        />

        <FormFieldTextarea
          id="contact-message"
          name="message"
          label="הודעה"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          minRows={5}
          helpText="תארו בקצרה מטרות, לוחות זמנים או שאלות."
          error={Boolean(messageErr)}
          errorText={messageErr || undefined}
          disabled={submitted}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={submitted}
          sx={{ alignSelf: "flex-start", borderRadius: 999, px: 3 }}
        >
          שליחה
        </Button>
      </Stack>
    </Box>
  );
}
