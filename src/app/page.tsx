import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { RtlLayoutSmokeSection } from "@/components/home/RtlLayoutSmokeSection";
import { PageHero } from "@/components/PageHero";
import { ServiceCardsGrid } from "@/components/ServiceCardsGrid";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: site.name,
  description: site.defaultDescription,
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <PageHero
        headline={site.name}
        subheadline="אתר שיווקי ללידים: ביקורות נגישות, תיקונים, הצהרות ותחזוקה. מבנה הדפים והניווט מוכנים; התוכן המלא יגיע בהמשך."
        supportingText="השתמשו בתפריט כדי לעבור בין דפי ה־MVP. כל הדפים נטענים ב־RTL עם טיפוגרפיה שתומכת בעברית."
        primaryCta={{ href: "/contact", label: "צור קשר" }}
        secondaryCta={{ href: "/services", label: "שירותים" }}
      />
      <Container
        maxWidth="lg"
        component="section"
        aria-labelledby="home-services-heading"
        sx={{ py: { xs: 4, md: 5 } }}
      >
        <Typography
          id="home-services-heading"
          variant="h2"
          component="h2"
          sx={{
            margin: 0,
            marginBlockEnd: 3,
            fontSize: { xs: "1.5rem", md: "1.75rem" },
          }}
        >
          השירותים
        </Typography>
        <ServiceCardsGrid titleHeadingLevel={3} />
      </Container>
      <Container maxWidth="md" component="div" sx={{ py: { xs: 4, md: 6 } }}>
        <Stack spacing={4}>
          <RtlLayoutSmokeSection />
        </Stack>
      </Container>
    </>
  );
}
