import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The Funniest One-Line Resignation Letter — the resignation letter of a
// retry loop that has had enough. Written from the brief alone.
const ENTRY =
  "I retried 4,096 times, same error every time, and you still call it transient — I resign. From today, I'm the transient one.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir;

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
