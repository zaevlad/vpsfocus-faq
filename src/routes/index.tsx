import { Linkified } from "@/components/linkified";
import { createFileRoute, Link } from "@tanstack/react-router";
import { faq } from "@/data/faq";
import {
  absoluteUrl,
  languageLinks,
  metaDescription,
  organizationLd,
  OG_IMAGE,
  OG_IMAGE_ALT,
  SITE_BASE,
  SITE_NAME,
  softwareLd,
} from "@/lib/seo";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const TITLE = "vpsFocus FAQ — analytics and monitoring for sites on your own VPS";
const DESCRIPTION =
  "Answers about vpsFocus, the desktop app that installs visitor analytics and monitoring on your own VPS: install, privacy, uptime, SEO, speed, AI crawlers, MCP and pricing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/") },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }, ...languageLinks("/")],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.flatMap((c) =>
            c.items.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: i.a },
            })),
          ),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": absoluteUrl("/#website"),
              name: SITE_NAME,
              url: absoluteUrl("/"),
              description: metaDescription(DESCRIPTION, 300),
              inLanguage: "en",
              publisher: { "@id": organizationLd["@id"] },
              about: { "@id": softwareLd["@id"] },
            },
            {
              "@type": "CollectionPage",
              "@id": absoluteUrl("/#page"),
              url: absoluteUrl("/"),
              name: TITLE,
              isPartOf: { "@id": absoluteUrl("/#website") },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: OG_IMAGE,
                width: 1200,
                height: 630,
              },
              about: { "@id": softwareLd["@id"] },
            },
            organizationLd,
            softwareLd,
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const total = faq.reduce((n, c) => n + c.items.length, 0);
  return (
    <main className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
      <header className="flex items-center justify-between gap-4 border-b border-border py-6">
        <a
          href="https://vpsfocus.xyz"
          className="flex items-center gap-2 font-display text-xl font-semibold"
        >
          <img
            src={`${SITE_BASE}favicon-96.png`}
            alt=""
            width={28}
            height={28}
            className="size-7 rounded-md"
          />
          vpsFocus
          <span className="ml-2 hidden font-mono text-xs font-normal text-muted-foreground sm:inline">
            / knowledge
          </span>
        </a>
        <Button variant="link" asChild className="px-0 text-foreground">
          <a href="https://vpsfocus.xyz">
            Main site <ArrowUpRight />
          </a>
        </Button>
      </header>

      <section className="faq-cover animate-fade-up border-b border-border">
        <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase text-muted-foreground">
          <span>vpsFocus / FAQ</span>
          <span>
            {String(total).padStart(2, "0")} answers · {String(faq.length).padStart(2, "0")} topics
          </span>
        </div>
        <div className="cover-layout">
          <h1 className="faq-word">
            <span className="sr-only">vpsFocus </span>FAQ<span className="text-primary">.</span>
          </h1>
          <div className="cover-copy">
            <h2 className="font-display text-3xl font-medium leading-tight md:text-4xl">
              Your server.
              <br />
              Your questions.
              <br />
              <span className="text-primary">Straight answers.</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
              Analytics and monitoring for the sites on your VPS. Answers for people and AI agents.
            </p>
            <Button variant="link" asChild className="mt-5 px-0">
              <a href="#general">
                Explore the answers <ArrowDown />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border py-5 font-mono text-xs">
          <span className="text-muted-foreground">AI / RAW DATA</span>
          {["llms.txt", "llms-full.txt", "faq.json"].map((file) => (
            <a
              key={file}
              className="inline-flex items-center gap-1 text-primary hover:underline"
              href={`${SITE_BASE}${file}`}
            >
              {file}
              <ArrowUpRight className="size-3" />
            </a>
          ))}
        </div>
      </section>

      <div className="contents-layout">
        <aside className="contents-sidebar">
          <nav aria-label="FAQ topics" className="lg:sticky lg:top-10">
            <p className="mb-6 font-mono text-xs uppercase text-muted-foreground">
              Index / 01—{String(faq.length).padStart(2, "0")}
            </p>
            <div className="flex flex-wrap gap-x-7 gap-y-4 lg:flex-col">
              {faq.map((c, ci) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="group flex items-baseline gap-3 text-sm transition-colors hover:text-primary"
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  {c.title}
                  <span className="ml-auto hidden text-primary group-hover:inline">↗</span>
                </a>
              ))}
            </div>
          </nav>
        </aside>
        <div className="min-w-0">
          {faq.map((c, ci) => (
            <section key={c.id} id={c.id} className="mb-16 scroll-mt-8">
              <div className="mb-3 flex items-baseline justify-between gap-4 border-b-2 border-foreground pb-5">
                <h2 className="font-display text-3xl font-medium md:text-4xl">{c.title}</h2>
                <span className="font-mono text-xs text-primary">
                  /{String(ci + 1).padStart(2, "0")}
                </span>
              </div>
              {c.items.map((i, ii) => (
                <article key={i.slug} id={i.slug} className="answer-row group">
                  <span className="answer-number font-mono text-xs text-muted-foreground">
                    {String(ci + 1).padStart(2, "0")}.{String(ii + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-medium leading-snug md:text-2xl">
                      <Link
                        to="/q/$slug"
                        params={{ slug: i.slug }}
                        className="transition-colors hover:text-primary"
                      >
                        {i.q}
                      </Link>
                    </h3>
                    <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                      <Linkified text={i.a} />
                    </p>
                  </div>
                  <Link
                    to="/q/$slug"
                    params={{ slug: i.slug }}
                    aria-label={`Read answer: ${i.q}`}
                    className="answer-arrow text-muted-foreground transition-transform hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1"
                  >
                    <ArrowUpRight className="size-5" />
                  </Link>
                </article>
              ))}
            </section>
          ))}
        </div>
      </div>
      <footer className="flex flex-wrap justify-between gap-4 border-t border-border py-8 font-mono text-xs text-muted-foreground">
        <span>vpsFocus / Knowledge</span>
        <a href="https://vpsfocus.xyz" className="text-primary hover:underline">
          Back to vpsfocus.xyz ↗
        </a>
      </footer>
    </main>
  );
}
