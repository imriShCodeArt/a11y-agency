import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { NavLink } from "@/components/NavLink";
import { legalNav, primaryNav, servicePages } from "@/lib/routes";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 6,
        bgcolor: "action.hover",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          שירותים
        </Typography>
        <Stack
          component="ul"
          spacing={1}
          sx={{ listStyle: "none", m: 0, p: 0, mb: 3 }}
        >
          {servicePages.map((item) => (
            <Box key={item.href} component="li">
              <NavLink href={item.href} underline="hover">
                {item.label}
              </NavLink>
            </Box>
          ))}
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          useFlexGap
          flexWrap="wrap"
          sx={{ marginBlockEnd: 2 }}
        >
          {primaryNav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
          {legalNav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Stack>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBlockStart: 3 }}
        >
          © {new Date().getFullYear()} {site.name}
        </Typography>
      </Container>
    </Box>
  );
}
