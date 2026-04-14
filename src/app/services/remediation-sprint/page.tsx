import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "ספרינט תיקונים",
  description: "יישום ממוקד של תיקוני נגישות לאחר ביקורת או סקירה.",
});

export default function RemediationSprintPage() {
  return (
    <PageShell
      title="ספרינט תיקונים"
      description="עבודת פיתוח מובנית לסגירת פערים ובדיקה חוזרת של זרימות מרכזיות."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
