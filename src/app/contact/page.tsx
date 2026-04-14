import { ContactForm } from "@/components/contact/ContactForm";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "צור קשר",
  description: "פתיחת שיחה על סקירת נגישות, ביקורת או תכנית תיקונים.",
});

export default function ContactPage() {
  return (
    <PageShell
      title="צור קשר"
      description="מלאו את הפרטים — נחזור אליכם. השליחה כאן היא הדגמה בצד הלקוח בלבד."
    >
      <ContactForm />
    </PageShell>
  );
}
