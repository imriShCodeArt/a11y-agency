import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Who we are and how we work with Israeli businesses on accessibility.",
});

export default function AboutPage() {
  return (
    <PageShell
      title="About"
      description="Trust, approach, and what to expect when working together."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
