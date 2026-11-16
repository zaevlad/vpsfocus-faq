import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SITE = "https://zaevlad.github.io/vpsfocus-faq";
const OUT = "dist/client";
const source = readFileSync("src/data/faq.ts", "utf8");

const slugs = [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
if (slugs.length === 0) throw new Error("No FAQ slugs found in src/data/faq.ts");

const updated =
  source.match(/FAQ_UPDATED\s*=\s*"([^"]+)"/)?.[1] ?? new Date().toISOString().slice(0, 10);

const urls = [
  { loc: `${SITE}/`, priority: "1.0", changefreq: "weekly" },
  ...slugs.map((slug) => ({ loc: `${SITE}/q/${slug}`, priority: "0.8", changefreq: "monthly" })),
];

const escape = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escape(url.loc)}</loc>
    <lastmod>${updated}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(OUT, "sitemap.xml"), xml);

const pages = join(OUT, "pages.json");
if (existsSync(pages)) rmSync(pages);

const nojekyll = join(OUT, ".nojekyll");
if (!existsSync(nojekyll)) writeFileSync(nojekyll, "");

for (const file of [
  "index.html",
  "404.html",
  "og.png",
  "robots.txt",
  "llms.txt",
  "llms-full.txt",
  "faq.json",
]) {
  if (!existsSync(join(OUT, file))) throw new Error(`Missing ${file} in ${OUT}`);
}

console.log(`sitemap: ${urls.length} URLs, lastmod ${updated}`);
