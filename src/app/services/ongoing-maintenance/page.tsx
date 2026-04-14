import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Ongoing Accessibility Maintenance",
  description:
    "Monitoring, regression checks, and guidance so accessibility does not slip after launch.",
});

export default function OngoingMaintenancePage() {
  return (
    <PageShell
      title="Ongoing Accessibility Maintenance"
      description="For sites and products that keep shipping changes and need sustained coverage."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
