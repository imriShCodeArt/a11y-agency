import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type PageShellProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

/**
 * Default inner layout for MVP pages (padding, width, heading).
 */
export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <Container maxWidth="md" component="article" sx={{ py: { xs: 4, md: 6 } }}>
      <Stack spacing={3}>
        <header>
          <Typography variant="h1" component="h1" gutterBottom>
            {title}
          </Typography>
          {description ? (
            <Typography variant="body1" color="text.secondary" component="p">
              {description}
            </Typography>
          ) : null}
        </header>
        {children}
      </Stack>
    </Container>
  );
}
