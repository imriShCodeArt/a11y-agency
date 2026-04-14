export const site = {
  /** Display / metadata name (Hebrew-first). */
  name: "סוכנות נגישות",
  /** Roman name for mixed branding or future English routes. */
  nameLatin: "A11y Agency",
  defaultDescription:
    "ליווי עסקים בישראל בנגישות אתרים: סקרים, ביקורות, תיקונים, הצהרות נגישות ותחזוקה שוטפת.",
} as const;

/** Public contact lines for the footer (`NEXT_PUBLIC_*` — set in `.env.local` / Vercel). */
export function getSiteContact(): {
  email?: string;
  /** Human-readable phone (footer text). */
  phoneLabel?: string;
  /** `tel:` href value (digits and leading +). */
  phoneTel?: string;
} {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || undefined;
  const phoneLabel =
    process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY?.trim() || undefined;
  const rawTel = process.env.NEXT_PUBLIC_CONTACT_PHONE_TEL?.trim();
  const phoneTel =
    rawTel && rawTel.length > 0
      ? rawTel.replace(/[^\d+]/g, "") || undefined
      : undefined;
  return { email, phoneLabel, phoneTel };
}
