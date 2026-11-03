import Link from 'next/link';
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
  Smartphone,
  MessageCircle,
  Clock,
  BadgeCheck,
  CalendarCheck,
  Check,
} from 'lucide-react';

const trust = [
  { icon: Smartphone, label: 'UPI & card payments' },
  { icon: MessageCircle, label: 'WhatsApp & email confirmations' },
  { icon: BadgeCheck, label: 'GST-ready invoices' },
  { icon: Clock, label: 'Live in 24 hours' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-700 text-white">
      {/* Backdrop: fading grid + glow orbs (same language as the footer CTA) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:py-28 lg:grid-cols-12">
        {/* Copy */}
        <div className="text-center lg:col-span-7 lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur sm:text-sm">
            <Sparkles size={14} /> Stop Paying 20%+ to OTAs • Direct Bookings for Independent Hotels
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
            Turn Your Hotel Website Into a{' '}
            <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              Direct Booking Powerhouse.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
            Drop one line of code onto your website. Accept instant UPI &amp; card payments, manage room inventory
            seamlessly, and keep 100% of your guest revenue.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 px-7 py-3.5 font-semibold text-white shadow-[0_12px_30px_-10px_rgba(79,70,229,0.9)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-10px_rgba(79,70,229,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-800"
            >
              Schedule Onboarding Demo
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#demo"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <PlayCircle size={18} /> Test Live Widget Preview
            </Link>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            Built for boutique hotels, heritage villas, resorts, and homestays across India.
          </p>
        </div>

        {/* Booking preview card */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-500/30 via-violet-500/10 to-amber-400/20 blur-2xl" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-3 flex-1 truncate rounded-md bg-white/10 px-3 py-1 text-xs text-slate-300">
                www.yourhotel.com/book
              </span>
            </div>

            <div className="space-y-5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-400">Selected room</p>
                  <p className="mt-0.5 text-lg font-bold">Deluxe Room</p>
                  <p className="text-sm text-slate-300">2 nights · 2 guests</p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-[0_8px_20px_-8px_rgba(79,70,229,0.9)]">
                  <CalendarCheck size={20} />
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-slate-300">Booking value</span>
                  <span className="text-2xl font-extrabold">₹12,000</span>
                </div>

                <div className="mt-4 space-y-3 text-xs">
                  <div>
                    <div className="mb-1 flex justify-between text-slate-400">
                      <span>Typical OTA commission (20%)</span>
                      <span className="font-semibold text-red-300">₹2,400</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-red-400 to-red-500" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-slate-400">
                      <span>PureBook with your own Razorpay (5%)</span>
                      <span className="font-semibold text-emerald-300">₹600</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-1/4 rounded-full bg-gradient-to-r from-emerald-300 to-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-brand-700">
                <Smartphone size={16} /> Pay with UPI
              </div>
              <p className="text-center text-[11px] text-slate-400">Illustrative example</p>
            </div>
          </div>

          {/* Floating confirmation chip */}
          <div className="absolute -bottom-5 -left-3 hidden items-center gap-2.5 rounded-2xl border border-white/15 bg-navy-900/90 px-4 py-3 shadow-xl backdrop-blur sm:flex">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
              <Check size={16} />
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/20" aria-hidden="true" />
            </span>
            <div className="text-left">
              <p className="text-xs font-semibold">Booking confirmed</p>
              <p className="text-[11px] text-slate-400">Voucher sent on WhatsApp</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="relative border-t border-white/10 bg-white/[0.03] backdrop-blur-sm">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 py-5 text-xs font-medium text-slate-300 sm:text-sm lg:grid-cols-4">
          {trust.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center justify-center gap-2 lg:justify-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-indigo-300 ring-1 ring-white/10">
                <Icon size={15} />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="h-[3px] w-full bg-gradient-to-r from-brand-500 via-violet-500 to-amber-400" aria-hidden="true" />
    </section>
  );
}
