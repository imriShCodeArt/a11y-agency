import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Packages",
  description:
    "Starter, Growth, and Continuous packages to match your site and team maturity.",
});

export default function PackagesPage() {
  return (
    <PageShell
      title="Packages"
      description="Compare engagement levels from first review through ongoing support."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
