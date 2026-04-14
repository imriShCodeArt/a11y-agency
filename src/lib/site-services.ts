/**
 * Marketing summaries for service detail routes — shared by the services index and home preview.
 */

export type SiteServiceId =
  | "accessibility-risk-review"
  | "full-accessibility-audit"
  | "remediation-sprint"
  | "statement-compliance"
  | "ongoing-maintenance";

export type SiteServiceSummary = {
  id: SiteServiceId;
  href: string;
  title: string;
  description: string;
};

export const SITE_SERVICE_SUMMARIES: readonly SiteServiceSummary[] = [
  {
    id: "accessibility-risk-review",
    href: "/services/accessibility-risk-review",
    title: "סקירת סיכוני נגישות",
    description:
      "לצוותים שצריכים תמונה מהירה ומעשית על מצב האתר לפני ביקורת מלאה.",
  },
  {
    id: "full-accessibility-audit",
    href: "/services/full-accessibility-audit",
    title: "ביקורת נגישות מלאה",
    description:
      "בדיקה עמוקה המותאמת למחסנית שלכם ולדרישות העסק, עם ממצאים והמלצות לפי WCAG.",
  },
  {
    id: "remediation-sprint",
    href: "/services/remediation-sprint",
    title: "ספרינט תיקונים",
    description:
      "עבודת פיתוח מובנית לסגירת פערים ובדיקה חוזרת של זרימות מרכזיות אחרי ביקורת.",
  },
  {
    id: "statement-compliance",
    href: "/services/statement-compliance",
    title: "הצהרת נגישות ותמיכה ברגולציה",
    description:
      "תבניות, ניסוח ועדכון שוטף כדי לשקף נאמנה את מצב הנגישות בישראל.",
  },
  {
    id: "ongoing-maintenance",
    href: "/services/ongoing-maintenance",
    title: "תחזוקת נגישות מתמשכת",
    description:
      "ניטור, בדיקות רגרסיה והכוונה כדי למנוע דרדרות אחרי שינויים ושחרורים.",
  },
] as const;
