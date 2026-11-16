import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  vite: { base: "/vpsfocus-faq/" },
  tanstackStart: {
    server: { entry: "server" },
    router: { basepath: "/vpsfocus-faq" },
    prerender: { enabled: true, crawlLinks: true },
  },
});
