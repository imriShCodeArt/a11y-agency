import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <main>
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Stack spacing={3} alignItems="flex-start">
          <Typography variant="h3" component="h1" gutterBottom>
            A11y Agency
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Next.js, MUI, Sanity, and accessibility tooling are wired up. Start
            building from here.
          </Typography>
          <Button variant="contained" href="https://nextjs.org/docs">
            Next.js docs
          </Button>
        </Stack>
      </Container>
    </main>
  );
}
