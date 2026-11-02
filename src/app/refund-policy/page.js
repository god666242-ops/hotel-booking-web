export const metadata = { title: "Refund & Cancellation Policy – PureBook" };

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 px-5 py-16 text-slate-700 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_ul]:list-disc [&_ul]:pl-6">
      <h1>Refund &amp; Cancellation Policy</h1>
      <p className="text-sm text-slate-500">
        Last updated:{" "}
        {new Date().toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
        Template content – have this reviewed by a legal professional and fill
        in your company details before going live.
      </p>

      <h2>1. Guest cancellations</h2>
      <p>
        Each hotel sets and manages its own cancellation and refund policy. The
        applicable policy, including any refund tiers and deadlines, is shown to
        the guest in the booking engine before payment and is confirmed in the
        booking voucher. The refund a guest is eligible for is determined by the
        policy in effect for that booking at the time it was made.
      </p>
      <p>Rates marked non-refundable are clearly identified before payment.</p>

      <h2>2. How refunds are processed</h2>
      <p>
        When a cancellation is eligible for a refund, the amount is calculated
        automatically from the hotel’s policy and returned to the original
        payment mode. The time taken for the amount to reflect depends on the
        guest’s bank or payment provider.
      </p>

      <h2>3. Hotel-initiated cancellations</h2>
      <p>
        If a hotel cancels a confirmed booking, the guest is refunded in full.
      </p>

      <h2>4. Platform fees</h2>
      <p>
        For hotels using their own Razorpay account, PureBook commission is
        charged on confirmed bookings and is adjusted in line with any refund
        issued by the hotel. For pay-at-hotel bookings, the online booking fee
        is non-refundable if the guest cancels and is refunded in full if the
        hotel cancels.
      </p>
      <h2>5. Contact</h2>
      <p>
        For refund queries, contact the hotel first, or write to
        support@purebook.in with your booking reference.
      </p>
    </article>
  );
}
