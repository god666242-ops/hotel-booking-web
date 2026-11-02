import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://purebook.in'),
  title: 'PureBook – Low-commission direct booking engine for independent hotels',
  description:
    'Turn your hotel website into a direct booking powerhouse. One-line embed, instant UPI & card payments, zero OTA commission.',
  openGraph: {
    title: 'PureBook – Direct bookings for independent hotels',
    description: 'Stop paying 20%+ to OTAs. Embed PureBook and keep 100% of your guest revenue.',
    url: 'https://purebook.in',
    type: 'website',
  },
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
