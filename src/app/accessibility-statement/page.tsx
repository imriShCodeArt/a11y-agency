import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Accessibility statement",
  description:
    "This site’s accessibility statement, status, and how to report issues.",
});

export default function AccessibilityStatementPage() {
  return (
    <PageShell
      title="Accessibility statement"
      description="Formal statement and feedback channel for this website. Final legal copy will be published before launch."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
