import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "אודות",
  description: "מי אנחנו ואיך אנחנו עובדים עם עסקים בישראל בנגישות.",
});

export default function AboutPage() {
  return (
    <PageShell
      title="אודות"
      description="אמון, שיטת עבודה ומה לצפות משיתוף פעולה."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
