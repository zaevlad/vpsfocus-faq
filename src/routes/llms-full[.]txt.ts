import { createFileRoute } from "@tanstack/react-router";
import { faqAsMarkdown } from "@/data/faq";

export const Route = createFileRoute("/llms-full.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(faqAsMarkdown(), {
          headers: { "Content-Type": "text/markdown; charset=utf-8" },
        }),
    },
  },
});
