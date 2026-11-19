import ContactSection from '@/components/ContactSection';

import { pageMetadata, PAGES } from '@/lib/seo';

export const metadata = pageMetadata(PAGES.contact);

export default function ContactPage() {
  return <ContactSection id="book-demo" />;
}