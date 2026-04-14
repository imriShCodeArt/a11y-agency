import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "שירותים",
  description:
    "סקירות סיכון, ביקורות נגישות, תיקונים, הצהרות ותחזוקה שוטפת לאתרים בעברית.",
});

export default function ServicesPage() {
  return (
    <PageShell
      title="שירותים"
      description="מבנה השירותים והקישורים לעמודי הפירוט — התוכן המלא יוגדר בהמשך."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
