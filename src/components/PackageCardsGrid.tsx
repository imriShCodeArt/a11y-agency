import Box from "@mui/material/Box";
import { PackageCard } from "@/components/PackageCard";
import { SITE_PACKAGES } from "@/lib/site-packages";

export function PackageCardsGrid() {
  return (
    <Box
      sx={{
        display: "grid",
        gap: { xs: 2.5, md: 3 },
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        alignItems: "stretch",
      }}
    >
      {SITE_PACKAGES.map((pkg) => (
        <PackageCard
          key={pkg.id}
          title={pkg.title}
          tagline={pkg.tagline}
          highlights={pkg.highlights}
          ctaHref={pkg.ctaHref}
          ctaLabel={pkg.ctaLabel}
          recommended={pkg.recommended}
          titleHeadingLevel={3}
        />
      ))}
    </Box>
  );
}
