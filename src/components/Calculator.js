"use client";

import { useState } from "react";
import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { PLATFORM_COMMISSION } from "@/lib/config";
import SectionHeading from "./SectionHeading";

// Pricing and commission assumptions
const OTA_COMMISSION = 0.2; // 20% typical OTA commission
const AVG_NIGHTS = 2; // average stay length
const COMMISSION = {
  platform: PLATFORM_COMMISSION || 0.08, // 8% default
  own: 0.05, // 5% for hotelier's own gateway
};
const GATEWAY_FEE = 0.02; // ~2% gateway fee

const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

const rangeCls =
  "h-2 w-full cursor-pointer accent-brand-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-800";

export default function Calculator() {
  const [bookings, setBookings] = useState(80);
  const [rate, setRate] = useState(6000);
  const [gateway, setGateway] = useState("platform");
  const commission = COMMISSION[gateway];

  const monthlyRevenue = bookings * rate * AVG_NIGHTS;
  const otaLost = monthlyRevenue * OTA_COMMISSION;
  const pureCost =
    monthlyRevenue * (commission + (gateway === "own" ? GATEWAY_FEE : 0));
  const annualSaved = Math.max(0, (otaLost - pureCost) * 12);
  const costShare = otaLost > 0 ? Math.min(100, (pureCost / otaLost) * 100) : 0;

  return (
    <section
      id="calculator"
      className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 py-24 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          dark
          title="See how much margin the OTAs take from you"
          subtitle="Move the sliders to match your property."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Controls */}
          <div className="space-y-8 rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-8">
            <div>
              <div className="mb-3 flex items-center justify-between text-sm font-medium">
                <label htmlFor="bookings" className="text-slate-200">
                  Average monthly bookings
                </label>
                <span className="rounded-lg bg-brand-500/20 px-2.5 py-1 font-bold text-indigo-200 ring-1 ring-brand-400/30">
                  {bookings}
                </span>
              </div>
              <input
                id="bookings"
                type="range"
                min="20"
                max="500"
                step="5"
                value={bookings}
                onChange={(e) => setBookings(+e.target.value)}
                aria-label="Average monthly bookings slider"
                className={rangeCls}
              />
              <div className="mt-1.5 flex justify-between text-[11px] text-slate-500">
                <span>20</span>
                <span>500</span>
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between text-sm font-medium">
                <label htmlFor="rate" className="text-slate-200">
                  Average room rate per night
                </label>
                <span className="rounded-lg bg-brand-500/20 px-2.5 py-1 font-bold text-indigo-200 ring-1 ring-brand-400/30">
                  {inr(rate)}
                </span>
              </div>
              <input
                id="rate"
                type="range"
                min="2500"
                max="25000"
                step="500"
                value={rate}
                onChange={(e) => setRate(+e.target.value)}
                aria-label="Average room rate per night slider"
                className={rangeCls}
              />
              <div className="mt-1.5 flex justify-between text-[11px] text-slate-500">
                <span>₹2,500</span>
                <span>₹25,000</span>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-slate-200">
                Payment gateway
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  [
                    "platform",
                    `Pay at hotel · ${(COMMISSION.platform * 100).toFixed(0)}%`,
                  ],
                  [
                    "own",
                    `My own Razorpay · ${(COMMISSION.own * 100).toFixed(0)}%`,
                  ],
                ].map(([k, label]) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setGateway(k)}
                    aria-pressed={gateway === k}
                    className={`rounded-xl border px-3.5 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                      gateway === k
                        ? "border-brand-400 bg-brand-500/25 font-semibold text-white shadow-[0_8px_20px_-10px_rgba(79,70,229,0.9)]"
                        : "border-white/15 text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              Assumes {AVG_NIGHTS}-night average stay,{" "}
              {(OTA_COMMISSION * 100).toFixed(0)}% OTA commission, PureBook at{" "}
              {(commission * 100).toFixed(0)}% platform commission
              {gateway === "platform"
                ? ` + ~${(GATEWAY_FEE * 100).toFixed(0)}% payment gateway charge`
                : " (gateway charges billed directly by your merchant account)"}
              .
            </p>
          </div>

          {/* Results */}
          <div className="flex flex-col justify-between gap-4">
            <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-6 backdrop-blur">
              <p className="flex items-center gap-2 text-sm text-red-200">
                <TrendingDown size={16} /> Traditional OTA commission lost (at 20%)
              </p>
              <p className="mt-1 text-3xl font-extrabold text-red-300">
                {inr(otaLost)}{" "}
                <span className="text-base font-medium text-red-200/70">
                  / month
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <p className="flex items-center gap-2 text-sm text-slate-300">
                <Wallet size={16} /> PureBook direct cost (commission + any gateway charge)
              </p>
              <p className="mt-1 text-3xl font-extrabold text-white">
                {inr(pureCost)}{" "}
                <span className="text-base font-medium text-slate-400">
                  / month
                </span>
              </p>

              <div className="mt-4">
                <div className="h-2.5 overflow-hidden rounded-full bg-red-400/30">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-emerald-500 transition-all duration-500"
                    style={{ width: `${costShare}%` }}
                  />
                </div>
                <p className="mt-1.5 text-[11px] text-slate-400">
                  PureBook cost compared with the OTA commission
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 text-white shadow-[0_30px_60px_-25px_rgba(16,185,129,0.6)]">
              <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/15 blur-2xl" aria-hidden="true" />
              <p className="relative flex items-center gap-2 text-sm font-medium text-emerald-100">
                <TrendingUp size={16} /> Net annual margin saved
              </p>
              <p className="relative mt-1 text-4xl font-extrabold">
                {inr(annualSaved)}{" "}
                <span className="text-base font-medium text-emerald-100">
                  / year
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
