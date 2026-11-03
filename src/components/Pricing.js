import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const plans = [
  {
    name: "Pay at Hotel",
    rate: "8%",
    badge: "Fastest go-live",
    tagline:
      "booking fee paid online by the guest, the rest at your front desk",
    highlight: true,
    features: [
      "Fastest go-live: no payment gateway account needed",
      "Guests pay the 8% booking fee online (UPI, card & net-banking)",
      "Guests pay the balance at your front desk",
      "Fee collected upfront, so nothing to invoice later",
    ],
  },
  {
    name: "Your Own Razorpay Account",
    rate: "5%",
    badge: "Lowest commission",
    tagline: "per booking, billed weekly",
    features: [
      "Guests pay the full amount straight into your Razorpay account",
      "Refunds and cancellations handled from your own account",
      "One simple commission invoice every week",
      "Same booking engine and dashboard",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-24">
      <div
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(99,102,241,0.12)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-5">
        <SectionHeading
          title="Simple, honest pricing"
          subtitle="No setup fee, no monthly subscription. You only pay when you earn, versus 18–25% on OTAs."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative overflow-hidden rounded-3xl p-8 transition duration-300 hover:-translate-y-1 ${
                p.highlight
                  ? "bg-gradient-to-br from-brand-600 via-brand-700 to-navy-900 text-white shadow-[0_30px_60px_-25px_rgba(55,48,163,0.8)]"
                  : "border border-slate-200 bg-white shadow-card hover:border-brand-500/40 hover:shadow-[0_24px_50px_-24px_rgba(79,70,229,0.4)]"
              }`}
            >
              {p.highlight && (
                <>
                  <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
                  <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" aria-hidden="true" />
                </>
              )}
              {!p.highlight && (
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-violet-500 to-amber-400" aria-hidden="true" />
              )}

              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      p.highlight
                        ? "border border-white/25 bg-white/10 text-amber-200"
                        : "bg-brand-50 text-brand-700 ring-1 ring-brand-500/20"
                    }`}
                  >
                    {p.badge}
                  </span>
                </div>

                <p className="mt-5 text-6xl font-extrabold tracking-tight">{p.rate}</p>
                <p className={`mt-1 text-sm ${p.highlight ? "text-indigo-100" : "text-slate-500"}`}>
                  {p.tagline}
                </p>

                <div className={`my-6 h-px ${p.highlight ? "bg-white/15" : "bg-slate-200"}`} />

                <ul className={`space-y-3 text-sm ${p.highlight ? "text-indigo-50" : "text-slate-700"}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          p.highlight ? "bg-emerald-400/20 text-emerald-300" : "bg-emerald-50 text-emerald-600"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-center font-semibold transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    p.highlight
                      ? "bg-white text-brand-700 shadow-lg focus-visible:ring-white focus-visible:ring-offset-brand-700"
                      : "bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.8)] focus-visible:ring-brand-500"
                  }`}
                >
                  Get started
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Payment gateway charges apply separately. Custom rates available for
          larger properties.
        </p>
      </div>
    </section>
  );
}
