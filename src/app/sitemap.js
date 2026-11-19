import { SITE_URL, PAGES } from "@/lib/seo";

// lastModified is only set where the page itself states a date.
export default function sitemap() {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}${PAGES.contact.path}`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}${PAGES.demo.path}`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}${PAGES.terms.path}`, lastModified: "2026-11-12", changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}${PAGES.privacy.path}`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}${PAGES.refund.path}`, lastModified: "2026-11-12", changeFrequency: "yearly", priority: 0.3 },
  ];
}