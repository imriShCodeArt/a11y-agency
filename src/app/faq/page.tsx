import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "שאלות נפוצות",
  description: "תשובות לשאלות נפוצות על ביקורות נגישות, תיקונים והצהרות.",
});

export default function FaqPage() {
  return (
    <PageShell
      title="שאלות נפוצות"
      description="תשובות ישירות לפני שממלאים טופס יצירת קשר."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
