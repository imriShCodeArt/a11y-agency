import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "תחזוקת נגישות מתמשכת",
  description:
    "ניטור, בדיקות רגרסיה והכוונה כדי למנוע דרדרות בנגישות אחרי ההשקה.",
});

export default function OngoingMaintenancePage() {
  return (
    <PageShell
      title="תחזוקת נגישות מתמשכת"
      description="לאתרים ומוצרים שממשיכים לשחרר שינויים ונדרשים לכיסוי מתמשך."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
