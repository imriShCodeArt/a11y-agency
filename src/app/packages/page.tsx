import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PackageCardsGrid } from "@/components/PackageCardsGrid";
import { PackageComparisonTable } from "@/components/PackageComparisonTable";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "חבילות",
  description:
    "חבילות סטארטר, צמיחה ורציף — השוואה ברורה לפי בשלות האתר והצוות.",
});

export default function PackagesPage() {
  return (
    <PageShell
      title="חבילות"
      description="השוואה בין רמות הליווי — מהסקירה הראשונה ועד תמיכה שוטפת."
    >
      <Stack spacing={5}>
        <Box component="section" aria-labelledby="packages-summary-heading">
          <Typography
            id="packages-summary-heading"
            variant="h2"
            component="h2"
            sx={{
              margin: 0,
              marginBlockEnd: 2.5,
              fontSize: { xs: "1.35rem", md: "1.5rem" },
            }}
          >
            סיכום חבילות
          </Typography>
          <PackageCardsGrid />
        </Box>
        <Box component="section" aria-labelledby="packages-compare-heading">
          <Typography
            id="packages-compare-heading"
            variant="h2"
            component="h2"
            sx={{
              margin: 0,
              marginBlockEnd: 2,
              fontSize: { xs: "1.35rem", md: "1.5rem" },
            }}
          >
            השוואת פרטים
          </Typography>
          <PackageComparisonTable />
        </Box>
      </Stack>
    </PageShell>
  );
}
