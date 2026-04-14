import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "צור קשר",
  description: "פתיחת שיחה על סקירת נגישות, ביקורת או תכנית תיקונים.",
});

export default function ContactPage() {
  return (
    <PageShell
      title="צור קשר"
      description="ספרו על האתר והמטרות. טופס ואפשרות קביעת פגישה יתווספו כאן."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
