import { Rocket, SlidersHorizontal, MessageCircle, QrCode, ShieldCheck, LayoutDashboard } from 'lucide-react';
import SectionHeading from './SectionHeading';

const features = [
  { icon: Rocket, title: '1-Minute Embed', text: 'Works seamlessly on any website builder without developer support.' },
  { icon: SlidersHorizontal, title: 'Dynamic Rates & Inventory', text: 'Update room rates, daily inventory and blackout dates in your dashboard; the widget reflects changes instantly.' },
  { icon: MessageCircle, title: 'Automated WhatsApp & Email Confirmations', text: 'Instant booking vouchers and check-in instructions sent directly to guests.' },
  { icon: QrCode, title: 'Direct UPI & QR Checkout', text: "Guests pay in 5 seconds without leaving the hotel's domain." },
  { icon: ShieldCheck, title: 'Smart Cancellation Policies', text: 'Set your own refund tiers from the dashboard. Eligible refunds are calculated automatically and returned to the guest’s original payment mode.' },
  { icon: LayoutDashboard, title: 'Hotelier Control Center', text: 'A dedicated dashboard to manage rooms, inventory, add-ons, GST/taxes, policies, bookings and commission billing.' },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-slate-50 py-24">
      <div
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(99,102,241,0.14)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-amber-300/15 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          title="Everything you need to own your bookings"
          subtitle="One embed, one dashboard, and every direct booking lands in your account."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-[0_24px_50px_-24px_rgba(79,70,229,0.45)]"
            >
              <span
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 via-violet-500 to-amber-400 transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />

              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.8)]">
                <Icon size={22} />
              </span>
              <h3 className="relative mt-5 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
