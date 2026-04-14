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
        <Box
          component="nav"
          aria-labelledby="footer-services-label"
          sx={{ mb: 3 }}
        >
          <Typography
            id="footer-services-label"
            component="p"
            variant="subtitle2"
            color="text.secondary"
            sx={{ margin: 0, marginBlockEnd: 1 }}
          >
            שירותים
          </Typography>
          <Stack
            component="ul"
            spacing={1}
            sx={{ listStyle: "none", m: 0, p: 0 }}
          >
            {servicePages.map((item) => (
              <Box key={item.href} component="li">
                <NavLink href={item.href} underline="hover">
                  {item.label}
                </NavLink>
              </Box>
            ))}
          </Stack>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box component="nav" aria-label="ניווט בתחתית הדף" sx={{ marginBlockEnd: 2 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            useFlexGap
            flexWrap="wrap"
          >
            {primaryNav.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </Stack>
        </Box>
        <Box component="nav" aria-label="קישורים משפטיים">
          <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
            {legalNav.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </Stack>
        </Box>
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
