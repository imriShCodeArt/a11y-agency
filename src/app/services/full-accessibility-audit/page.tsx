import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "ביקורת נגישות מלאה",
  description: "ביקורת נגישות מקיפה עם ממצאים ברורים והמלצות לתיקון לפי WCAG.",
});

export default function FullAccessibilityAuditPage() {
  return (
    <PageShell
      title="ביקורת נגישות מלאה"
      description="בדיקה עמוקה המותאמת למחסנית שלכם ולדרישות העסק."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
