import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "How we handle personal data collected through this site and contact flows.",
});

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy"
      description="Privacy policy placeholder. Final policy text will be added before launch."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
