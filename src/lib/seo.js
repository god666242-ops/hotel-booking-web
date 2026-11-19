// Central SEO config: site constants, per-page metadata and JSON-LD builders.
import { faqs } from "./faqs";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://purebook.in").replace(/\/$/, "");
export const SITE_NAME = "PureBook";
export const LOCALE = "en_IN";
export const PHONE = "+916305110174";
export const SUPPORT_EMAIL = "support@mail.purebook.in";

export const DEFAULT_TITLE = "PureBook – Direct Booking Engine for Independent Hotels in India";
export const DEFAULT_DESCRIPTION =
  "Turn your hotel website into a direct booking engine. One-line embed, instant UPI and card payments, WhatsApp confirmations. 5–8% per booking, no setup fee.";

export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "PureBook: direct booking engine for independent hotels in India",
};

export const KEYWORDS = [
  "PureBook",
  "hotel booking engine India",
  "direct booking engine for hotels",
  "hotel booking widget",
  "hotel website booking engine",
  "reduce OTA commission",
  "OTA commission alternative",
  "low commission hotel booking engine",
  "independent hotel booking software",
  "boutique hotel booking engine",
  "homestay booking software India",
  "resort booking engine India",
  "heritage villa booking engine",
  "UPI payments for hotels",
  "Razorpay hotel booking engine",
  "hotel booking with UPI and card payments",
  "WhatsApp booking confirmation hotel",
  "GST invoice hotel booking software",
  "embed booking engine on hotel website",
  "hotel inventory and rate management",
  "hotel cancellation policy software",
  "direct hotel bookings India",
];

// Page-level SEO. Each entry feeds both the page metadata and its JSON-LD.
export const PAGES = {
  contact: {
    path: "/contact",
    type: "ContactPage",
    name: "Book a Demo",
    title: "Book a Demo – Live in 24 Hours",
    description:
      "Book a PureBook demo. Our team sets up your rooms and inventory and embeds the booking engine on your hotel website within 24 hours. No credit card required.",
  },
  demo: {
    path: "/demo",
    type: "WebPage",
    name: "Live Booking Engine Demo",
    title: "Live Booking Engine Demo",
    description:
      "Try the PureBook booking engine live. Pick dates, choose a room and walk through checkout the way your guests would. All data is demo data.",
  },
  terms: {
    path: "/terms",
    type: "WebPage",
    name: "Terms & Conditions",
    title: "Terms & Conditions",
    description:
      "Terms and conditions for using the PureBook direct booking platform and embedded booking engine for hotels, resorts and homestays in India.",
  },
  privacy: {
    path: "/privacy",
    type: "WebPage",
    name: "Privacy Policy",
    title: "Privacy Policy",
    description:
      "How PureBook collects, uses and protects information across its booking platform, hotelier dashboards and embedded booking widget in India.",
  },
  refund: {
    path: "/refund-policy",
    type: "WebPage",
    name: "Refund & Cancellation Policy",
    title: "Refund & Cancellation Policy",
    description:
      "How cancellations, modifications and refunds work for reservations made through the PureBook booking engine, for both pay-online and pay-at-hotel options.",
  },
};

// Metadata for a child page. Next replaces (not merges) nested objects such as
// openGraph, so every page sets its own full openGraph/twitter block.
export function pageMetadata({ path, title, description }) {
  const full = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      title: full,
      description,
      locale: LOCALE,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: full,
      description,
      images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
    },
  };
}

const id = (k) => `${SITE_URL}/#${k}`;
const abs = (p) => SITE_URL + p;

export function siteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": id("org"),
        name: SITE_NAME,
        url: SITE_URL + "/",
        logo: { "@type": "ImageObject", url: abs("/og-icon.png"), width: 512, height: 512 },
        image: abs(OG_IMAGE.url),
        description:
          "PureBook is a direct booking engine and hotelier dashboard for independent hotels, resorts and homestays in India.",
        areaServed: "IN",
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: PHONE,
            email: SUPPORT_EMAIL,
            areaServed: "IN",
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": id("website"),
        url: SITE_URL + "/",
        name: SITE_NAME,
        inLanguage: "en-IN",
        publisher: { "@id": id("org") },
      },
    ],
  };
}

export function homeSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": id("webpage"),
        url: SITE_URL + "/",
        name: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "en-IN",
        isPartOf: { "@id": id("website") },
        about: { "@id": id("software") },
        primaryImageOfPage: { "@type": "ImageObject", url: abs(OG_IMAGE.url), width: 1200, height: 630 },
      },
      {
        "@type": "SoftwareApplication",
        "@id": id("software"),
        name: SITE_NAME,
        url: SITE_URL + "/",
        description:
          "Direct booking engine for independent hotels. Embed it on your own website with one line of code, accept UPI and card payments, and manage rooms, rates and inventory from a hotelier dashboard.",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Hotel booking engine",
        operatingSystem: "Web",
        image: abs(OG_IMAGE.url),
        provider: { "@id": id("org") },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Independent hotels, resorts, heritage villas and homestays in India",
        },
        featureList: [
          "One-line embed that works on any website builder",
          "Dynamic rates, daily inventory and blackout dates",
          "Automated WhatsApp and email booking confirmations",
          "UPI, card and QR checkout powered by Razorpay",
          "Smart cancellation policies with automatic refund calculation",
          "Hotelier dashboard for rooms, inventory, add-ons, GST and taxes, policies, bookings and commission billing",
        ],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
          description:
            "No setup fee and no monthly subscription. 5% per booking with your own Razorpay account (billed weekly), or an 8% booking fee paid online by the guest with pay at hotel. Payment gateway charges apply separately.",
          url: abs("/#pricing"),
        },
      },
      {
        "@type": "FAQPage",
        "@id": id("faq"),
        mainEntity: faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
}

// WebPage (or ContactPage) + breadcrumb for an inner page.
export function pageSchema({ path, type = "WebPage", name, description }) {
  const url = abs(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "en-IN",
        isPartOf: { "@id": id("website") },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
          { "@type": "ListItem", position: 2, name, item: url },
        ],
      },
    ],
  };
}