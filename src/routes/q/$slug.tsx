import { Linkified } from "@/components/linkified";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { allItems, faq, FAQ_UPDATED } from "@/data/faq";
import {
  absoluteUrl,
  languageLinks,
  metaDescription,
  organizationLd,
  OG_IMAGE,
  OG_IMAGE_ALT,
  SITE_BASE,
  SITE_NAME,
} from "@/lib/seo";

function categoryIdOf(title: string) {
  return faq.find((c) => c.title === title)?.id ?? "";
}

function relatedOf(slug: string, category: string, limit = 6) {
  const same = allItems.filter((i) => i.category === category);
  const index = same.findIndex((i) => i.slug === slug);
  // Neighbours first (wrapping around), so every question gets a different set of links.
  return Array.from(
    { length: Math.min(limit, same.length - 1) },
    (_, n) => same[(index + 1 + n) % same.length],
  );
}
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/q/$slug")({
  loader: ({ params }) => {
    const item = allItems.find((i) => i.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          {
            title: `${loaderData.q}${loaderData.q.length <= 42 ? " — vpsFocus FAQ" : " | vpsFocus"}`,
          },
          { name: "description", content: metaDescription(loaderData.a) },
          { property: "og:title", content: loaderData.q },
          { property: "og:description", content: metaDescription(loaderData.a) },
          { property: "og:type", content: "article" },
          { property: "og:url", content: absoluteUrl(`/q/${loaderData.slug}`) },
          { property: "og:image", content: OG_IMAGE },
          { property: "og:image:type", content: "image/png" },
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "630" },
          { property: "og:image:alt", content: OG_IMAGE_ALT },
          { property: "article:modified_time", content: `${FAQ_UPDATED}T00:00:00Z` },
          { property: "article:section", content: loaderData.category },
          { property: "article:author", content: "vpsFocus" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: loaderData.q },
          { name: "twitter:description", content: metaDescription(loaderData.a) },
          { name: "twitter:image", content: OG_IMAGE },
          { name: "twitter:image:alt", content: OG_IMAGE_ALT },
        ]
      : [{ title: "Unavailable — vpsFocus FAQ" }, { name: "robots", content: "noindex" }],
    links: loaderData
      ? [
          { rel: "canonical", href: absoluteUrl(`/q/${loaderData.slug}`) },
          ...languageLinks(`/q/${loaderData.slug}`),
        ]
      : [],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "FAQPage",
                  "@id": absoluteUrl(`/q/${loaderData.slug}#page`),
                  url: absoluteUrl(`/q/${loaderData.slug}`),
                  name: loaderData.q,
                  inLanguage: "en",
                  dateModified: FAQ_UPDATED,
                  isPartOf: { "@id": absoluteUrl("/#website") },
                  publisher: { "@id": organizationLd["@id"] },
                  primaryImageOfPage: {
                    "@type": "ImageObject",
                    url: OG_IMAGE,
                    width: 1200,
                    height: 630,
                  },
                  breadcrumb: { "@id": absoluteUrl(`/q/${loaderData.slug}#breadcrumb`) },
                  mainEntity: {
                    "@type": "Question",
                    name: loaderData.q,
                    acceptedAnswer: { "@type": "Answer", text: loaderData.a },
                  },
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": absoluteUrl(`/q/${loaderData.slug}#breadcrumb`),
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl("/") },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: loaderData.category,
                      item: absoluteUrl(`/#${categoryIdOf(loaderData.category)}`),
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: loaderData.q,
                      item: absoluteUrl(`/q/${loaderData.slug}`),
                    },
                  ],
                },
              ],
            }),
          },
        ]
      : [],
  }),
  component: Question,
});

function Question() {
  const item = Route.useLoaderData();
  const related = relatedOf(item.slug, item.category);
  const categoryId = categoryIdOf(item.category);
  return (
    <main className="mx-auto max-w-5xl px-6 py-8 md:px-12">
      <header className="flex items-center justify-between border-b border-border pb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:underline"
        >
          <ArrowUpLeft className="size-4" />
          All questions
        </Link>
        <a
          href="https://vpsfocus.xyz"
          className="flex items-center gap-2 font-display text-lg font-semibold"
        >
          <img
            src={`${SITE_BASE}favicon-96.png`}
            alt=""
            width={24}
            height={24}
            className="size-6 rounded-md"
          />
          vpsFocus / FAQ
        </a>
      </header>
      <nav aria-label="Breadcrumb" className="mt-16 font-mono text-xs uppercase text-primary">
        <ol className="flex flex-wrap items-center gap-x-2">
          <li>
            <Link to="/" className="hover:underline">
              FAQ
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to="/" hash={categoryId} className="hover:underline">
              {item.category}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Answer</li>
        </ol>
      </nav>
      <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-tight md:text-6xl">
        {item.q}
      </h1>
      <div className="mt-10 border-t-2 border-foreground py-10 md:mt-14">
        <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
          <Linkified text={item.a} />
        </p>
      </div>
      {related.length > 0 && (
        <nav aria-label="Related questions" className="border-t border-border py-10">
          <h2 className="font-mono text-xs uppercase text-primary">More in {item.category}</h2>
          <ul className="mt-6 grid gap-x-10 gap-y-3 md:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  to="/q/$slug"
                  params={{ slug: r.slug }}
                  className="leading-snug text-foreground transition-colors hover:text-primary"
                >
                  {r.q}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <footer className="mt-14 border-t border-border py-6">
        <a
          href="https://vpsfocus.xyz"
          className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:underline"
        >
          vpsfocus.xyz
          <ArrowUpRight className="size-4" />
        </a>
      </footer>
    </main>
  );
}
