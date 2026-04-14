import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "הצהרת נגישות ותמיכה ברגולציה",
  description: "ליווי בפרסום ותחזוקה של הצהרת נגישות בהתאם לדרישות בישראל.",
});

export default function StatementCompliancePage() {
  return (
    <PageShell
      title="הצהרת נגישות ותמיכה ברגולציה"
      description="תבניות, ניסוח ועדכון שוטף כדי לשקף נאמנה את מצב הנגישות."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
