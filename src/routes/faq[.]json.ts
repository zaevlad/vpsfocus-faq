import { createFileRoute } from "@tanstack/react-router";
import { faq } from "@/data/faq";

export const Route = createFileRoute("/faq.json")({
  server: {
    handlers: {
      GET: () => Response.json({ product: "vpsFocus", url: "https://vpsfocus.xyz", categories: faq }),
    },
  },
});
