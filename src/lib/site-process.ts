/**
 * Default service flow steps — marketing copy (Issue #11).
 * Maps to: review → audit → remediation → ongoing maintenance.
 */

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
};

export const SITE_PROCESS_STEPS: readonly ProcessStep[] = [
  {
    id: "review",
    title: "סקירה",
    description:
      "מיפוי מהיר של סיכוני נגישות משמעותיים — מתאים כשצריך תמונה ברורה לפני ביקורת מלאה או לפני החלטת תקציב.",
  },
  {
    id: "audit",
    title: "ביקורת",
    description:
      "בדיקה מעמיקה לפי WCAG ובהקשר של המחסנית והמסע של המשתמשים, כולל ממצאים מדורגים והמלצות תיקון מעשיות.",
  },
  {
    id: "remediation",
    title: "תיקון",
    description:
      "ספרינט תיקונים בשיתוף צוות הפיתוח, יישום שינויים, ובדיקה חוזרת לזרימות והמסכים הקריטיים.",
  },
  {
    id: "maintenance",
    title: "תחזוקה שוטפת",
    description:
      "ניטור, בדיקות רגרסיה והכוונה כשמשחררים תכנים או פיצ׳רים חדשים — כדי שהנגישות לא תידרדר עם הזמן.",
  },
] as const;
