import Stack from "@mui/material/Stack";
import { PageShell } from "@/components/layout/PageShell";
import { ProcessSteps } from "@/components/ProcessSteps";
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
      <Stack spacing={{ xs: 5, md: 6 }}>
        <ServiceCardsGrid titleHeadingLevel={2} />
        <ProcessSteps sectionHeadingId="services-process-heading" />
      </Stack>
    </PageShell>
  );
}
