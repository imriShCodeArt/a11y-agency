import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NavLink } from "@/components/NavLink";
import { PageShell } from "@/components/layout/PageShell";

export default function NotFound() {
  return (
    <PageShell
      title="Page not found"
      description="We could not find the page you requested."
    >
      <Typography variant="body1" component="p">
        <Box component="span" sx={{ mr: 1 }}>
          Try returning to the
        </Box>
        <NavLink href="/" underline="hover">
          home page
        </NavLink>
        .
      </Typography>
    </PageShell>
  );
}
