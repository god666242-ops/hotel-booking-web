"use client";

import { useState, useEffect } from "react";
import {
  Code2,
  Zap,
  ShieldCheck,
  Undo2,
  ExternalLink,
  Copy,
  Check,
  Lock,
} from "lucide-react";
import { WIDGET_DEMO_URL, EMBED_SNIPPET } from "@/lib/config";
import SectionHeading from "./SectionHeading";

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
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState(null);

  // Attach the iframe only after hydration so onLoad can never be missed.
  useEffect(() => {
    setSrc(WIDGET_DEMO_URL);
    // Safety net: never leave the loading overlay up forever.
    const t = setTimeout(() => setLoaded(true), 10000);
    return () => clearTimeout(t);
  }, []);

  const copy = () => {
    navigator.clipboard.writeText(EMBED_SNIPPET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-amber-300/15 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          title="The product experience, live"
          subtitle="This is the real booking engine your guests will see on your website (demo data)."
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            {callouts.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition duration-300 hover:border-brand-500/40 hover:shadow-[0_20px_40px_-24px_rgba(79,70,229,0.45)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.8)]">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              </div>
            ))}

            {/* Terminal-style embed code snippet */}
            <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.8)]">
              <div className="h-[3px] w-full bg-gradient-to-r from-brand-500 via-violet-500 to-amber-400" aria-hidden="true" />
              <div className="flex items-center justify-between border-b border-slate-800/70 bg-slate-900/60 px-4 py-2.5 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  <span className="ml-2 font-mono text-[11px] font-medium tracking-wide text-slate-400">
                    embed.html
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copy}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/60 bg-slate-800/70 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition-all duration-150 hover:border-slate-600 hover:bg-slate-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 active:scale-95"
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

          {/* Simulated hotel website frame hosting the real widget */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-500/25 via-violet-500/10 to-amber-400/25 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-[0_30px_60px_-30px_rgba(55,48,163,0.45)]">
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 flex flex-1 items-center gap-1.5 truncate rounded-lg bg-white px-3 py-1 text-xs text-slate-500 ring-1 ring-slate-200">
                  <Lock size={11} className="shrink-0 text-emerald-500" />
                  www.yourhotel.com
                </span>
                <a
                  href={WIDGET_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-1 text-slate-500 transition hover:bg-white hover:text-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  aria-label="Open demo in new tab"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
              <div className="relative h-[620px] bg-slate-50">
                {!loaded && (
                  <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-slate-50 text-sm text-slate-400">
                    <span className="h-8 w-8 animate-spin rounded-full border-2 border-brand-500/20 border-t-brand-500" aria-hidden="true" />
                    Loading live demo…
                  </div>
                )}
                {src && (
                  <iframe
                    src={src}
                    title="PureBook live booking engine demo"
                    className="h-full w-full border-0"
                    onLoad={() => setLoaded(true)}
                    allow="payment"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
