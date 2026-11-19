import JsonLd from '@/components/JsonLd';
import { pageSchema, PAGES } from '@/lib/seo';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <JsonLd data={pageSchema(PAGES.demo)} />
    </>
  );
}