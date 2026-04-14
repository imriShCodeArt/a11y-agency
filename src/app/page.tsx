import Typography from "@mui/material/Typography";
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
      description="Lead-focused site for accessibility audits, remediation, statements, and ongoing support. MVP routes and layout are in place; page content will ship in follow-up issues."
    >
      <Typography variant="body1" component="p">
        Use the navigation to preview all MVP routes. Each section will be
        expanded with real copy and components in later work.
      </Typography>
    </PageShell>
  );
}
