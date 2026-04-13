import "dotenv/config";

async function main() {
  console.info(
    "migrate:sanity — implement content migration in scripts/migrate-content-to-sanity.ts"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
