import Container from "@mui/material/Container";
import { PageHero } from "@/components/PageHero";
import { TrustProofSection } from "@/components/TrustProofSection";
import { pageMetadata } from "@/lib/metadata";
import { SITE_TRUST_ABOUT } from "@/lib/site-trust";

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
        <TrustProofSection
          content={SITE_TRUST_ABOUT}
          sectionHeadingId="about-trust-heading"
        />
      </Container>
    </>
  );
}
