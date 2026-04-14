import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { NavLink } from "@/components/NavLink";
import { primaryNav } from "@/lib/routes";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar component="nav" aria-label="Primary">
        <NavLink
          href="/"
          underline="none"
          color="inherit"
          sx={{ marginInlineEnd: 4, fontWeight: 600 }}
        >
          {site.name}
        </NavLink>
        <Stack
          direction="row"
          component="ul"
          spacing={2}
          flexWrap="wrap"
          useFlexGap
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
        >
          {primaryNav.map((item) => (
            <Box key={item.href} component="li">
              <NavLink href={item.href} underline="hover">
                {item.label}
              </NavLink>
            </Box>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
