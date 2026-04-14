import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "מדיניות פרטיות",
  description: "איך מטפלים במידע אישי שנאסף דרך האתר וטפסי יצירת קשר.",
});

export default function PrivacyPage() {
  return (
    <PageShell
      title="מדיניות פרטיות"
      description="טיוטת מדיניות. הנוסח הסופי יתווסף לפני השקה."
    >
      <PlaceholderMvpContent />
    </PageShell>
  );
}
