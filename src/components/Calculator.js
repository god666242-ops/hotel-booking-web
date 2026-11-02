"use client";

import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { PLATFORM_COMMISSION } from "@/lib/config";

// Pricing and commission assumptions
const OTA_COMMISSION = 0.2; // 20% typical OTA commission
const AVG_NIGHTS = 2; // average stay length
const COMMISSION = {
  platform: PLATFORM_COMMISSION || 0.08, // 8% default
  own: 0.05, // 5% for hotelier's own gateway
};
const GATEWAY_FEE = 0.02; // ~2% gateway fee

const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

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

  return (
    <section id="calculator" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">
            See how much margin the OTAs take from you
          </h2>
          <p className="mt-3 text-slate-600">
            Move the sliders to match your property.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
            <div>
              <div className="mb-3 flex justify-between text-sm font-medium">
                <label htmlFor="bookings">Average monthly bookings</label>
                <span className="font-bold text-brand-600">{bookings}</span>
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
              />
            </div>

            <div>
              <div className="mb-3 flex justify-between text-sm font-medium">
                <label htmlFor="rate">Average room rate per night</label>
                <span className="font-bold text-brand-600">{inr(rate)}</span>
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
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-slate-800">
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
                    className={`rounded-lg border px-3 py-2 transition text-left ${
                      gateway === k
                        ? "border-brand-500 bg-brand-50 font-semibold text-brand-700 shadow-xs"
                        : "border-slate-300 hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Assumes {AVG_NIGHTS}-night average stay,{" "}
              {(OTA_COMMISSION * 100).toFixed(0)}% OTA commission, PureBook at{" "}
              {(commission * 100).toFixed(0)}% platform commission
              {gateway === "platform"
                ? ` + ~${(GATEWAY_FEE * 100).toFixed(0)}% payment gateway charge`
                : " (gateway charges billed directly by your merchant account)"}
              .
            </p>
          </div>

          <div className="space-y-4 flex flex-col justify-between">
            <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-card">
              <p className="text-sm text-slate-500">
                Traditional OTA commission lost (at 20%)
              </p>
              <p className="mt-1 text-3xl font-extrabold text-red-500">
                {inr(otaLost)}{" "}
                <span className="text-base font-medium text-slate-400">
                  / month
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <p className="text-sm text-slate-500">
                PureBook direct cost (commission + any gateway charge)
              </p>
              <p className="mt-1 text-3xl font-extrabold text-slate-800">
                {inr(pureCost)}{" "}
                <span className="text-base font-medium text-slate-400">
                  / month
                </span>
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 text-white shadow-card">
              <p className="flex items-center gap-2 text-sm font-medium text-emerald-100">
                <TrendingUp size={16} /> Net annual margin saved
              </p>
              <p className="mt-1 text-4xl font-extrabold">
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
