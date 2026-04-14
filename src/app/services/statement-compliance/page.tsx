import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Accessibility Statement & Compliance Support",
  description:
    "Help publishing and maintaining an accessibility statement aligned with Israeli requirements.",
});

export default function StatementCompliancePage() {
  return (
    <PageShell
      title="Accessibility Statement & Compliance Support"
      description="Support for statements, templates, and keeping disclosure accurate over time."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
