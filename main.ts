import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const outputDir = "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(root, "POST.json"), join(outputDir, "POST.json"));
console.log("Copied POST.json to /output/POST.json");
