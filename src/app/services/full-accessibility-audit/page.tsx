import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Full Accessibility Audit",
  description:
    "Comprehensive accessibility audit with clear findings and prioritized remediation guidance.",
});

export default function FullAccessibilityAuditPage() {
  return (
    <PageShell
      title="Full Accessibility Audit"
      description="Deep review aligned with WCAG and practical implementation for your stack."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
