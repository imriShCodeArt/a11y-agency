/**
 * Canonical MVP routes — keep in sync with `docs/route-map.md` and filesystem routes under `src/app`.
 * Labels are Hebrew for the default locale (`src/lib/locale.ts`).
 */

export const primaryNav = [
  { href: "/", label: "בית" },
  { href: "/services", label: "שירותים" },
  { href: "/packages", label: "חבילות" },
  { href: "/about", label: "אודות" },
  { href: "/faq", label: "שאלות נפוצות" },
  { href: "/contact", label: "צור קשר" },
] as const;

export const servicePages = [
  {
    href: "/services/accessibility-risk-review",
    label: "סקירת סיכוני נגישות",
  },
  {
    href: "/services/full-accessibility-audit",
    label: "ביקורת נגישות מלאה",
  },
  {
    href: "/services/remediation-sprint",
    label: "ספרינט תיקונים",
  },
  {
    href: "/services/statement-compliance",
    label: "הצהרת נגישות ותמיכה ברגולציה",
  },
  {
    href: "/services/ongoing-maintenance",
    label: "תחזוקת נגישות מתמשכת",
  },
] as const;

export const legalNav = [
  { href: "/accessibility-statement", label: "הצהרת נגישות" },
  { href: "/privacy", label: "מדיניות פרטיות" },
] as const;
