import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Pay at Hotel",
    rate: "8%",
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
    <section id="pricing" className="mx-auto max-w-5xl px-5 py-20">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        Simple, honest pricing
      </h2>
      <p className="mt-3 text-center text-slate-600">
        No setup fee, no monthly subscription. You only pay when you earn,
        versus 18–25% on OTAs.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl border bg-white p-8 ${p.highlight ? "border-brand-500 shadow-card ring-1 ring-brand-500" : "border-slate-200"}`}
          >
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-3 text-5xl font-extrabold">{p.rate}</p>
            <p className="text-sm text-slate-500">{p.tagline}</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-emerald-500"
                  />{" "}
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 block rounded-lg bg-brand-500 py-2.5 text-center font-semibold text-white hover:bg-brand-600"
            >
              Get started
            </Link>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-slate-500">
        Payment gateway charges apply separately. Custom rates available for
        larger properties.
      </p>
    </section>
  );
}
