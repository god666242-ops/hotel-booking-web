import Link from 'next/link';
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-700 text-white">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-emerald-300 sm:text-sm">
          <Sparkles size={14} /> Stop Paying 20%+ to OTAs • Direct Bookings for Independent Hotels
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Turn Your Hotel Website Into a <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">Direct Booking Powerhouse.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
          Drop one line of code onto your website. Accept instant UPI &amp; card payments, manage room inventory seamlessly, and keep 100% of your guest revenue.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-7 py-3.5 font-semibold text-white shadow-lg hover:bg-brand-600">
            Schedule Onboarding Demo <ArrowRight size={18} />
          </Link>
          <Link href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 font-semibold text-white hover:bg-white/10">
            <PlayCircle size={18} /> Test Live Widget Preview
          </Link>
        </div>
        <p className="mt-10 text-sm text-slate-400">
          Built for boutique hotels, heritage villas, resorts, and homestays across India.
        </p>
      </div>
    </section>
  );
}
