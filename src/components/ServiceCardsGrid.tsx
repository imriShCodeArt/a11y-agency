import Box from "@mui/material/Box";
import { SiteServiceCard } from "@/components/ServiceCard";
import { SITE_SERVICE_SUMMARIES } from "@/lib/site-services";

export function ServiceCardsGrid({
  titleHeadingLevel,
}: {
  titleHeadingLevel: 2 | 3;
}) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2.5,
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        },
      }}
    >
      {SITE_SERVICE_SUMMARIES.map((service) => (
        <SiteServiceCard
          key={service.id}
          service={service}
          titleHeadingLevel={titleHeadingLevel}
        />
      ))}
    </Box>
  );
}
