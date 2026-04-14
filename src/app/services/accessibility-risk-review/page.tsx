import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Accessibility Risk Review",
  description:
    "A focused review to surface high-impact accessibility risks before a full audit.",
});

export default function AccessibilityRiskReviewPage() {
  return (
    <PageShell
      title="Accessibility Risk Review"
      description="For teams that need a fast, practical read on where their site stands."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
