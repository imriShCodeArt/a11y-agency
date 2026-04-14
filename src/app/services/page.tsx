import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Accessibility services: risk review, audits, remediation, statements, and ongoing maintenance.",
});

export default function ServicesPage() {
  return (
    <PageShell
      title="Services"
      description="Overview of how we help teams improve and maintain web accessibility."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
