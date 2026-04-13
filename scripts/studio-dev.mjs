import { spawn } from "node:child_process";

const cmd = process.platform === "win32" ? "npx.cmd" : "npx";
const child = spawn(cmd, ["sanity", "dev"], {
  stdio: "inherit",
  shell: process.platform === "win32",
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
