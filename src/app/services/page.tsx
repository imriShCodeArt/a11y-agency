import { PageShell } from "@/components/layout/PageShell";
import { ServiceCardsGrid } from "@/components/ServiceCardsGrid";
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
      description="בחירה בשירות המתאים לשלב שבו האתר או המוצר שלכם נמצאים — מסקירה מהירה ועד ליווי מתמשך."
    >
      <ServiceCardsGrid titleHeadingLevel={2} />
    </PageShell>
  );
}
