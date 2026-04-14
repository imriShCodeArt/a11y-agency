import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "הצהרת נגישות",
  description: "הצהרת הנגישות של אתר זה ואיך מדווחים על תקלות.",
});

export default function AccessibilityStatementPage() {
  return (
    <PageShell
      title="הצהרת נגישות"
      description="מסמך רשמי ונתיב משוב לאתר זה. נוסח משפטי סופי יפורסם לפני השקה."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
