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
} from "lucide-react";
import { WIDGET_DEMO_URL, EMBED_SNIPPET } from "@/lib/config";

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
    <section id="demo" className="mx-auto max-w-7xl px-5 py-20">
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

          {/* Clean Terminal-style Embed Code Snippet Container */}
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
            
            {/* Soft-wrapped code block with zero horizontal scrollbars */}
            <pre className="p-4 font-mono text-[11.5px] leading-relaxed text-emerald-400 whitespace-pre-wrap break-all sm:break-normal [word-break:break-word]">
              {EMBED_SNIPPET}
            </pre>
          </div>
        </div>

        {/* Simulated hotel website frame hosting the real widget */}
        <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-card">
          <div className="flex items-center gap-2 border-b bg-slate-100 px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 flex-1 truncate rounded bg-white px-3 py-1 text-xs text-slate-500">
              www.yourhotel.com
            </span>
            <a
              href={WIDGET_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-brand-600"
              aria-label="Open demo in new tab"
            >
              <ExternalLink size={14} />
            </a>
          </div>
          <div className="relative h-[620px] bg-slate-50">
            {!loaded && (
              <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-slate-50 text-sm text-slate-400">
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
    </section>
  );
}