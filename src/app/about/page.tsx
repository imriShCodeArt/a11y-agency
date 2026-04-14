import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { PageHero } from "@/components/PageHero";
import { PlaceholderMvpContent } from "@/components/PlaceholderMvpContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "אודות",
  description: "מי אנחנו ואיך אנחנו עובדים עם עסקים בישראל בנגישות.",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        headline="אודות"
        subheadline="אמון, שיטת עבודה ומה לצפות משיתוף פעולה."
        primaryCta={{ href: "/contact", label: "דברו איתנו" }}
        secondaryCta={{ href: "/services", label: "השירותים" }}
      />
      <Container
        maxWidth="md"
        component="article"
        sx={{ py: { xs: 4, md: 6 } }}
      >
        <Stack spacing={4}>
          <PlaceholderMvpContent />
        </Stack>
      </Container>
    </>
  );
}
