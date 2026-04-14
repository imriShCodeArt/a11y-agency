import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { NavLink } from "@/components/NavLink";
import { legalNav, primaryNav, servicePages } from "@/lib/routes";
import { getSiteContact, site } from "@/lib/site";

export function SiteFooter() {
  const contact = getSiteContact();
  const hasDirectContact = Boolean(
    contact.email || (contact.phoneLabel && contact.phoneTel)
  );

  return (
    <Box
      component="footer"
      aria-label="תחתית האתר"
      sx={{
        mt: "auto",
        py: 6,
        bgcolor: "action.hover",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          sx={{
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBlockEnd: 3,
          }}
        >
          <Box
            component="nav"
            aria-labelledby="footer-services-label"
            sx={{ flex: { md: "1 1 0" }, minWidth: 0, maxWidth: { md: 360 } }}
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

          <Box
            component="section"
            aria-labelledby="footer-contact-label"
            sx={{ flex: { md: "1 1 0" }, minWidth: 0, maxWidth: { md: 280 } }}
          >
            <Typography
              id="footer-contact-label"
              component="p"
              variant="subtitle2"
              color="text.secondary"
              sx={{ margin: 0, marginBlockEnd: 1 }}
            >
              יצירת קשר
            </Typography>
            <Stack
              component="ul"
              spacing={1}
              sx={{ listStyle: "none", m: 0, p: 0 }}
            >
              {contact.email ? (
                <Box component="li">
                  <Link
                    href={`mailto:${contact.email}`}
                    underline="hover"
                    color="inherit"
                    variant="body2"
                  >
                    {contact.email}
                  </Link>
                </Box>
              ) : null}
              {contact.phoneLabel && contact.phoneTel ? (
                <Box component="li">
                  <Link
                    href={`tel:${contact.phoneTel}`}
                    underline="hover"
                    color="inherit"
                    variant="body2"
                  >
                    {contact.phoneLabel}
                  </Link>
                </Box>
              ) : null}
              {!hasDirectContact ? (
                <Box component="li">
                  <Typography variant="body2" color="text.secondary">
                    לפרטים והצעות — טופס יצירת הקשר.
                  </Typography>
                </Box>
              ) : null}
              <Box component="li">
                <NavLink href="/contact" underline="hover">
                  טופס יצירת קשר
                </NavLink>
              </Box>
            </Stack>
          </Box>

          <Box
            component="nav"
            aria-labelledby="footer-quick-label"
            sx={{ flex: { md: "1 1 0" }, minWidth: 0, maxWidth: { md: 220 } }}
          >
            <Typography
              id="footer-quick-label"
              component="p"
              variant="subtitle2"
              color="text.secondary"
              sx={{ margin: 0, marginBlockEnd: 1 }}
            >
              ניווט מהיר
            </Typography>
            <Stack
              component="ul"
              spacing={1}
              sx={{ listStyle: "none", m: 0, p: 0 }}
            >
              {primaryNav.map((item) => (
                <Box key={item.href} component="li">
                  <NavLink href={item.href} underline="hover">
                    {item.label}
                  </NavLink>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Box
          component="nav"
          aria-label="הצהרת נגישות ומדיניות פרטיות"
          sx={{ marginBlockEnd: 2 }}
        >
          <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
            {legalNav.map((item) => (
              <NavLink key={item.href} href={item.href} underline="hover">
                {item.label}
              </NavLink>
            ))}
          </Stack>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          component="p"
          sx={{ margin: 0, marginBlockStart: 1 }}
        >
          © {new Date().getFullYear()} {site.name}
        </Typography>
      </Container>
    </Box>
  );
}
