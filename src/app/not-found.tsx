import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NavLink } from "@/components/NavLink";
import { PageShell } from "@/components/layout/PageShell";

export default function NotFound() {
  return (
    <PageShell title="הדף לא נמצא" description="לא מצאנו את הכתובת שביקשתם.">
      <Typography variant="body1" component="p">
        <Box component="span" sx={{ marginInlineEnd: 0.5 }}>
          אפשר לחזור ל
        </Box>
        <NavLink href="/" underline="hover">
          דף הבית
        </NavLink>
        .
      </Typography>
    </PageShell>
  );
}
