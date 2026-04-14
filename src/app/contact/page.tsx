import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a conversation about an accessibility review, audit, or remediation plan.",
});

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      description="Tell us about your site and goals. A form and scheduling options will land here."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
