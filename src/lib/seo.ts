const configuredSiteUrl = import.meta.env["VITE_SITE_URL"] as string | undefined;

export const SITE_URL = (configuredSiteUrl ?? "https://zaevlad.github.io/vpsfocus-faq").replace(
  /\/+$/,
  "",
);

export const SITE_BASE = import.meta.env["BASE_URL"];

export const OG_IMAGE = `${SITE_URL}/og.png`;
export const OG_IMAGE_ALT = "vpsFocus FAQ - answers for people and AI agents";

export function absoluteUrl(path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

export function metaDescription(text: string, max = 158) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;

  // Prefer ending on a full sentence when one fits comfortably.
  const sentenceEnd = Math.max(
    clean.lastIndexOf(". ", max - 1),
    clean.lastIndexOf("? ", max - 1),
    clean.lastIndexOf("! ", max - 1),
  );
  if (sentenceEnd >= 90) return clean.slice(0, sentenceEnd + 1);

  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const shortened = lastSpace > 80 ? cut.slice(0, lastSpace) : cut;

  return `${shortened.replace(/[.,;:!?-]+$/, "")}…`;
}

export const SITE_NAME = "vpsFocus FAQ";
export const PRODUCT_NAME = "vpsFocus";
export const PRODUCT_URL = "https://vpsfocus.xyz";
export const LOGO_URL = `${SITE_URL}/icon-512.png`;

export const organizationLd = {
  "@type": "Organization",
  "@id": `${PRODUCT_URL}/#organization`,
  name: PRODUCT_NAME,
  url: PRODUCT_URL,
  logo: { "@type": "ImageObject", url: LOGO_URL, width: 512, height: 512 },
};

export const softwareLd = {
  "@type": "SoftwareApplication",
  "@id": `${PRODUCT_URL}/#software`,
  name: PRODUCT_NAME,
  url: PRODUCT_URL,
  downloadUrl: `${PRODUCT_URL}/download`,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Windows, macOS, Linux",
  description:
    "Desktop app that installs visitor analytics and site monitoring on your own Linux VPS over SSH and shows every server and site in one window.",
  image: LOGO_URL,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@id": `${PRODUCT_URL}/#organization` },
};

/** Links shared by every page: hreflang for the single language, machine-readable alternates. */
export function languageLinks(path: string) {
  const href = absoluteUrl(path);
  return [
    { rel: "alternate", hrefLang: "en", href },
    { rel: "alternate", hrefLang: "x-default", href },
  ];
}
