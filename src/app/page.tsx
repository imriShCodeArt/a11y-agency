import Typography from "@mui/material/Typography";
import { RtlLayoutSmokeSection } from "@/components/home/RtlLayoutSmokeSection";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: site.name,
  description: site.defaultDescription,
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <PageShell
      title={site.name}
      description="אתר שיווקי ללידים: ביקורות נגישות, תיקונים, הצהרות ותחזוקה. מבנה הדפים והניווט מוכנים; התוכן המלא יגיע בהמשך."
    >
      <Typography variant="body1" component="p">
        השתמשו בתפריט כדי לעבור בין דפי ה־MVP. כל הדפים נטענים ב־RTL עם
        טיפוגרפיה שתומכת בעברית.
      </Typography>
      <RtlLayoutSmokeSection />
    </PageShell>
  );
}
