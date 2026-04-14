import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about accessibility audits, remediation, and statements.",
});

export default function FaqPage() {
  return (
    <PageShell
      title="FAQ"
      description="Straightforward answers before you reach out."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
