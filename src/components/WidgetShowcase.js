"use client";

import { useState } from "react";
import {
  Code2,
  Zap,
  ShieldCheck,
  Undo2,
  Copy,
  Check,
  BedDouble,
  CreditCard,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";
import { EMBED_SNIPPET } from "@/lib/config";

const callouts = [
  {
    icon: Code2,
    title: "Zero Code Hassle",
    text: "Paste one tag into WordPress, Wix, Webflow, Squarespace, or custom HTML. Shadow DOM means your site’s CSS never breaks it.",
  },
  {
    icon: Zap,
    title: "Instant UPI & Card Settlement",
    text: "Powered by Razorpay, with guests paying without ever leaving your domain.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Double-Bookings",
    text: "Automatic inventory lock with a hold timer while the guest pays.",
  },
  {
    icon: Undo2,
    title: "Dynamic Tiered Cancellations",
    text: "Automated guest refunds based on your own cancellation tiers.",
  },
];

const demoSteps = [
  { id: "room", label: "1. Room Selection", icon: BedDouble },
  { id: "checkout", label: "2. Inline Payment", icon: CreditCard },
  { id: "confirmed", label: "3. Instant Voucher", icon: CheckCircle2 },
];

export default function WidgetShowcase() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("room");

  const copy = () => {
    navigator.clipboard.writeText(EMBED_SNIPPET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="mx-auto max-w-7xl px-5 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">
          The product experience
        </h2>
        <p className="mt-3 text-slate-600">
          How guests experience the fast, direct booking journey right on your hotel website.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
        {/* Left Column: Callouts & Embed Snippet */}
        <div className="space-y-6">
          {callouts.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon size={20} />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-600">{text}</p>
              </div>
            </div>
          ))}

          {/* Clean Terminal-style Embed Snippet */}
          <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950 shadow-xl transition-all">
            <div className="flex items-center justify-between border-b border-slate-800/70 bg-slate-900/60 px-4 py-2.5 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-700/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-700/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-700/80" />
                <span className="ml-2 font-mono text-[11px] font-medium tracking-wide text-slate-400">
                  embed.html
                </span>
              </div>
              <button
                type="button"
                onClick={copy}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/60 bg-slate-800/70 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition-all duration-150 hover:border-slate-600 hover:bg-slate-700 hover:text-white active:scale-95"
              >
                {copied ? (
                  <>
                    <Check size={12} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} className="text-slate-400" />
                    <span>Copy snippet</span>
                  </>
                )}
              </button>
            </div>

            <pre className="p-4 font-mono text-[11.5px] leading-relaxed text-emerald-400 whitespace-pre-wrap break-all sm:break-normal [word-break:break-word]">
              {EMBED_SNIPPET}
            </pre>
          </div>
        </div>

        {/* Right Column: Clean Interactive Product Tour (Zero Widgets / Zero Iframes) */}
        <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-xl">
          {/* Simulated Browser Bar */}
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <div className="ml-2 flex-1 truncate rounded bg-white px-3 py-1 font-mono text-xs text-slate-500 shadow-inner">
              https://www.grandpalmsresort.in
            </div>
            <span className="rounded bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">
              Interactive Tour
            </span>
          </div>

          {/* Flow Navigation */}
          <div className="flex border-b border-slate-200 bg-slate-50/80 p-1.5 text-xs">
            {demoSteps.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 font-medium transition-all ${
                  activeTab === id
                    ? "bg-white text-brand-600 shadow-sm ring-1 ring-slate-200"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Icon size={14} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>

          {/* Interactive Screen Display */}
          <div className="h-[520px] overflow-y-auto bg-slate-50 p-6">
            {/* Step 1: Room Selection */}
            {activeTab === "room" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                    <Calendar size={14} className="text-brand-600" />
                    <span>24 Oct – 26 Oct (2 Nights)</span>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                    2 Guests, 1 Room
                  </span>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                        AVAILABLE
                      </span>
                      <h4 className="mt-1 font-semibold text-slate-900">
                        Deluxe Valley View Room
                      </h4>
                      <p className="text-xs text-slate-500">
                        King Bed • AC • Free High-Speed WiFi • Breakfast Included
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-slate-900">₹3,499</div>
                      <span className="text-[10px] text-slate-400">per night</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-xs text-emerald-600 font-medium">
                      ✓ Instant Confirmation
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveTab("checkout")}
                      className="rounded-lg bg-brand-600 px-4 py-1.5 text-xs font-semibold text-white shadow hover:bg-brand-700"
                    >
                      Book Room
                    </button>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm opacity-70">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        Executive Suite
                      </h4>
                      <p className="text-xs text-slate-500">
                        Living Area • Bathtub • Balcony View
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-slate-900">₹5,299</div>
                      <span className="text-[10px] text-slate-400">per night</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Checkout */}
            {activeTab === "checkout" && (
              <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h4 className="font-semibold text-slate-900">
                    Direct Guest Checkout
                  </h4>
                  <span className="rounded bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                    HOLD TIMER: 09:42
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 text-slate-600">
                    <span>Deluxe Valley View (2 Nights)</span>
                    <span className="font-semibold text-slate-900">₹6,998</span>
                  </div>
                  <div className="flex justify-between py-1 text-slate-600">
                    <span>GST (12%)</span>
                    <span className="font-semibold text-slate-900">₹840</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-100 pt-2 text-sm font-bold text-slate-900">
                    <span>Total Payable</span>
                    <span className="text-brand-600">₹7,838</span>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
                  <div className="font-medium text-slate-800">
                    Supported Payment Modes:
                  </div>
                  <p className="mt-1">
                    Google Pay, PhonePe, Paytm, BHIM UPI, Credit/Debit Cards, Net Banking
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab("confirmed")}
                  className="w-full rounded-lg bg-emerald-600 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-emerald-700"
                >
                  Confirm &amp; Pay (₹7,838)
                </button>
              </div>
            )}

            {/* Step 3: Confirmed Booking */}
            {activeTab === "confirmed" && (
              <div className="space-y-4 rounded-xl border border-emerald-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Booking Confirmed!
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Booking Reference:{" "}
                    <span className="font-mono font-bold text-slate-800">
                      GP-2026-8841
                    </span>
                  </p>
                </div>

                <div className="rounded-lg bg-slate-50 p-3 text-left text-xs space-y-1.5 text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Property:</span>
                    <span className="font-medium">Grand Palms Resort</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Dates:</span>
                    <span className="font-medium">24 Oct – 26 Oct 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Payment Status:</span>
                    <span className="font-semibold text-emerald-600">Paid (Razorpay)</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab("room")}
                  className="text-xs font-medium text-brand-600 hover:underline"
                >
                  ← Start Over
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}