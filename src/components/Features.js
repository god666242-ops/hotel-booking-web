import { Rocket, SlidersHorizontal, MessageCircle, QrCode, ShieldCheck, LayoutDashboard } from 'lucide-react';

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
    <section id="features" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Everything you need to own your bookings</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><Icon size={22} /></span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
