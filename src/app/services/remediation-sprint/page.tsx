import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Remediation Sprint",
  description:
    "Hands-on fixes for accessibility issues found in an audit or review.",
});

export default function RemediationSprintPage() {
  return (
    <PageShell
      title="Remediation Sprint"
      description="Structured implementation work to close gaps and retest critical flows."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
