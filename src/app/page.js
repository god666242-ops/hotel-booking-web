import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';
import WidgetShowcase from '@/components/WidgetShowcase';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Calculator />
      <WidgetShowcase />
      <Features />
      <Pricing />
      <Testimonials />
      <Faq />
      <ContactSection />
    </>
  );
}
