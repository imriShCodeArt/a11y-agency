import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "סקירת סיכוני נגישות",
  description: "סקירה ממוקדת לזיהוי סיכוני נגישות משמעותיים לפני ביקורת מלאה.",
});

export default function AccessibilityRiskReviewPage() {
  return (
    <PageShell
      title="סקירת סיכוני נגישות"
      description="לצוותים שצריכים תמונה מהירה ומעשית על מצב האתר."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
