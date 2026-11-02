"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <section id="faq" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="rounded-xl border border-slate-200 bg-white"
            >
              <button
                className="flex w-full items-center justify-between px-5 py-4 text-left font-medium"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                {f.q}
                <ChevronDown
                  size={18}
                  className={`transition ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <p className="px-5 pb-4 text-sm text-slate-600">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
