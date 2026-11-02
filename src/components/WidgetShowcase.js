"use client";

import { useState } from "react";
import Script from "next/script";
import {
  Code2,
  Zap,
  ShieldCheck,
  Undo2,
  ExternalLink,
  Copy,
  Check,
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

export default function WidgetShowcase() {
  const [copied, setCopied] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(EMBED_SNIPPET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="mx-auto max-w-7xl px-5 py-20">
      {/* Load the bundle from your CDN */}
      <Script
        src="https://cdn.purebook.in/engine.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />

      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          The product experience, live
        </h2>
        <p className="mt-3 text-slate-600">
          This is the real booking engine your guests will see on your website
          (demo data).
        </p>
      </div>

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          {callouts.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon size={20} />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-slate-600">{text}</p>
              </div>
            </div>
          ))}

          <div className="overflow-hidden rounded-xl bg-navy-800">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs text-slate-400">
              <span>Embed code</span>
              <button
                onClick={copy}
                className="flex items-center gap-1 rounded bg-white/10 px-2 py-1 hover:bg-white/20"
              >
                {copied ? (
                  <Check size={12} className="text-emerald-400" />
                ) : (
                  <Copy size={12} />
                )}{" "}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-emerald-300">
              {EMBED_SNIPPET}
            </pre>
          </div>
        </div>

        {/* Simulated hotel website browser frame */}
        <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-card">
          <div className="flex items-center gap-2 border-b bg-slate-100 px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 flex-1 truncate rounded bg-white px-3 py-1 text-xs text-slate-500">
              www.yourhotel.com
            </span>
            <a
              href="/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-brand-600"
              aria-label="Open demo in new tab"
            >
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="relative h-[620px] overflow-y-auto bg-slate-50 p-4">
            {!scriptLoaded && (
              <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-slate-50 text-sm text-slate-400">
                Loading live demo…
              </div>
            )}
            {/* Direct Web Component embed */}
            <hotel-booking-engine data-hotel="grand-palms"></hotel-booking-engine>
          </div>
        </div>
      </div>
    </section>
  );
}