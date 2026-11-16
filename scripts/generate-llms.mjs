// Regenerates public/llms.txt from src/data/faq.ts so the index never drifts
// from the single source of truth. Run automatically by `npm run build:pages`.
import { readFileSync, writeFileSync } from "node:fs";

const source = readFileSync("src/data/faq.ts", "utf8");

const tokens = [
  ...source.matchAll(/^\s{4}title:\s*("(?:[^"\\]|\\.)*"),$/gm),
  ...source.matchAll(/slug:\s*("(?:[^"\\]|\\.)*"),\s*\n\s*q:\s*("(?:[^"\\]|\\.)*"),/g),
].sort((a, b) => a.index - b.index);

const lines = [
  "# vpsFocus FAQ",
  "",
  "> Answers about vpsFocus (https://vpsfocus.xyz): analytics and monitoring for websites on your own VPS.",
  "",
  "## Full content",
  "",
  "- [All answers as markdown](llms-full.txt): every question and answer in one file",
  "- [All answers as JSON](faq.json): structured data",
  "- [FAQ page](./): human-readable version",
];

let count = 0;
for (const t of tokens) {
  if (t.length === 2) {
    lines.push("", `## ${JSON.parse(t[1])}`, "");
  } else {
    lines.push(`- [${JSON.parse(t[2])}](q/${JSON.parse(t[1])}/)`);
    count++;
  }
}

writeFileSync("public/llms.txt", lines.join("\n") + "\n");
console.log(`llms.txt: ${count} questions`);
