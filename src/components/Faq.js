"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Mail, Phone, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "Do I need a new website to use PureBook?",
    a: "No, PureBook embeds right into your current website via a simple snippet.",
  },
  {
    q: "How do I receive payments from guests?",
    a: "If you connect your own Razorpay account, guests pay the full amount straight into it. Otherwise guests pay a small booking fee online and settle the rest with you at the hotel.",
  },
  {
    q: "Can I set non-refundable and flexible rates?",
    a: "Yes, you can define room-specific policies and seasonal pricing from your dashboard.",
  },
  {
    q: "What does PureBook cost?",
    a: "No setup or monthly fee. PureBook charges 5% per booking if you connect your own Razorpay account (billed weekly), or 8% as a booking fee paid online by the guest if you use pay at hotel. Both are far below typical OTA commissions of 18–25%.",
  },
  {
    q: "What happens if a guest cancels?",
    a: "With your own Razorpay account, refunds follow your cancellation policy and are returned from your account. With pay at hotel, the online booking fee is non-refundable if the guest cancels and refunded in full if the hotel cancels. Guests can cancel online until a cutoff you set before check-in.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative overflow-hidden bg-slate-50 py-24">
      <div
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(99,102,241,0.12)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-12">
        {/* Heading + help card */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading align="left" title="Frequently asked questions" subtitle="Quick answers about setup, payments and pricing." />

            <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 p-6 text-white shadow-[0_30px_60px_-25px_rgba(55,48,163,0.8)]">
              <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <p className="text-lg font-bold">Still have questions?</p>
                <p className="mt-1 text-sm text-indigo-100">Our team replies quickly and can walk you through a live demo.</p>
                <ul className="mt-5 space-y-3 text-sm">
                  <li>
                    <a href="mailto:support@mail.purebook.in" className="flex items-center gap-3 text-white/90 transition hover:text-white">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20"><Mail size={16} /></span>
                      <span className="break-all">support@mail.purebook.in</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+916305110174" className="flex items-center gap-3 text-white/90 transition hover:text-white">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20"><Phone size={16} /></span>
                      +91 6305110174
                    </a>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5"
                >
                  Book a Demo <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-3 lg:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`relative overflow-hidden rounded-2xl border bg-white transition duration-300 ${
                  isOpen
                    ? "border-brand-500/40 shadow-[0_20px_40px_-24px_rgba(79,70,229,0.45)]"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <span
                  className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-500 via-violet-500 to-amber-400 transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                />
                <button
                  id={`faq-q-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {f.q}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? "rotate-180 bg-brand-500 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </span>
                </button>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
