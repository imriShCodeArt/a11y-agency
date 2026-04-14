import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "חבילות",
  description: "חבילות Starter, Growth ו-Continuous בהתאם לבשלות האתר והצוות.",
});

export default function PackagesPage() {
  return (
    <PageShell
      title="חבילות"
      description="השוואה בין רמות הליווי — מהסקירה הראשונה ועד תמיכה שוטפת."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
