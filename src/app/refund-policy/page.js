export const metadata = { title: "Refund & Cancellation Policy – PureBook" };

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 px-5 py-16 text-slate-700 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h3]:mt-4 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-slate-800 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
      <h1>Refund &amp; Cancellation Policy</h1>
      <p className="text-sm text-slate-500">Last updated: 12 November 2026</p>

      <p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
        This Refund and Cancellation Policy governs cancellations, modifications,
        and refunds for reservations made through the PureBook direct booking
        engine and software platform across India.
      </p>

      <h2>1. Nature of the Platform &amp; Contractual Hierarchy</h2>
      <p>
        PureBook (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides SaaS
        technology and a booking engine for independent accommodation providers
        (&quot;Hoteliers&quot;) operating across India.
      </p>
      <p>
        PureBook facilitates the reservation technology but is not the provider
        of accommodation. The contract of hospitality exists solely between the
        guest (&quot;Guest&quot;) and the respective Hotelier. Every property sets
        and enforces its own cancellation rules, refund tiers, and check-in
        timelines.
      </p>

      <h2>2. How Payments Work: Two Payment Options</h2>
      <p>
        Each property offers one of the following payment options. The option
        applicable to your booking is shown before you pay and on your booking
        confirmation.
      </p>
      <ul>
        <li>
          <strong>Option A: Pay Online (Hotel&apos;s Own Payment Gateway):</strong>{" "}
          You pay the booking amount online, directly into the hotel&apos;s own
          Razorpay account. Refunds, where applicable, are issued from the
          hotel&apos;s account in line with the hotel&apos;s cancellation policy.
        </li>
        <li>
          <strong>Option B: Pay at Hotel:</strong> You pay a booking fee online
          to secure the reservation, and pay the remaining amount directly at
          the hotel. The booking fee is shown at checkout before you pay.
        </li>
      </ul>

      <h2>3. Guest-Initiated Cancellations</h2>
      <p>
        Guests may cancel a confirmed reservation through the self-service link
        in their booking voucher / confirmation email, or by contacting the hotel
        directly. Online cancellation is available until the cutoff time set by
        the hotel before check-in. After the cutoff, please contact the hotel.
      </p>
      <ul>
        <li>
          <strong>Policy Visibility:</strong> The hotel&apos;s cancellation policy,
          cutoff time and any deduction schedule are displayed on the room
          selection screen before payment and repeated on the booking
          confirmation.
        </li>
        <li>
          <strong>Applicable Rules:</strong> Your cancellation is assessed
          against the policy that was displayed when your booking was confirmed.
        </li>
        <li>
          <strong>Option A (Pay Online):</strong>
          <ul className="mt-2 list-circle pl-6">
            <li>
              <strong>Free Cancellation Window:</strong> If you cancel before
              the hotel&apos;s cutoff, you receive a refund of the amount paid as
              stated in the displayed policy.
            </li>
            <li>
              <strong>Partial Refund Window:</strong> If you cancel within a
              tiered window defined by the hotel, the refund reflects the
              percentage or fixed deduction stated in that policy (for example,
              retention of the first night&apos;s tariff).
            </li>
            <li>
              <strong>Late Cancellation / Non-Refundable Rates:</strong>{" "}
              Cancellations after the final cutoff, and bookings made under a
              &quot;Non-Refundable&quot; rate, are not eligible for a refund.
            </li>
          </ul>
        </li>
        <li>
          <strong>Option B (Pay at Hotel):</strong> Cancelling simply cancels
          your reservation and releases the room, and nothing further is payable
          at the hotel. The booking fee paid online is{" "}
          <strong>non-refundable</strong> when the guest cancels, as it secures
          the reservation and the room inventory.
        </li>
      </ul>

      <h2>4. No-Show &amp; Early Departure</h2>
      <ul>
        <li>
          <strong>No-Show:</strong> If a guest does not check in on the scheduled
          arrival date and has not informed the hotel, the booking is treated as
          a &quot;No-Show&quot; and the room is released. Under Option A, any refund
          follows the hotel&apos;s displayed policy for no-shows. Under Option B,
          the online booking fee is not refunded.
        </li>
        <li>
          <strong>Early Check-Out:</strong> If a guest shortens the stay after
          check-in, refunds for unused nights are at the sole discretion of the
          Hotelier. PureBook cannot issue refunds for early check-outs.
        </li>
      </ul>

      <h2>5. Hotel-Initiated Cancellations &amp; Operational Disruptions</h2>
      <p>
        If a Hotelier cancels a confirmed booking because of unforeseen
        operational circumstances, natural events, overbooking, or maintenance
        issues:
      </p>
      <ul>
        <li>
          The Guest is entitled to a <strong>100% full refund</strong> of all
          amounts paid online for the booking. Under Option A this is refunded
          from the hotel&apos;s account; under Option B the online booking fee is
          refunded in full.
        </li>
        <li>
          Alternatively, the Hotelier may, with the Guest&apos;s consent, arrange
          equivalent or better accommodation nearby at no extra cost to the
          Guest.
        </li>
        <li>
          PureBook is not liable for compensation, travel inconvenience, or
          incidental costs arising from a hotel-initiated cancellation.
        </li>
      </ul>

      <h2>6. Refund Processing, Timelines &amp; Payment Modes</h2>
      <p>
        Online payments and refunds are processed through RBI-authorised payment
        aggregators (primarily Razorpay).
      </p>
      <ul>
        <li>
          <strong>Source Account Reversal:</strong> Approved refunds are
          credited back to the original payment method used at checkout (UPI,
          credit/debit card, or net banking). Refunds are not issued in cash or
          to third-party accounts.
        </li>
        <li>
          <strong>Who Issues the Refund:</strong> Under Option A, the hotel
          issues the refund from its own Razorpay account. Under Option B, the
          refund of the booking fee (when due) is issued through PureBook&apos;s
          payment account.
        </li>
        <li>
          <strong>Banking Turnaround Timelines:</strong>
          <ul className="mt-2 list-circle pl-6">
            <li>
              <strong>UPI:</strong> Typically reflected within 24 to 48 banking
              hours.
            </li>
            <li>
              <strong>Net Banking, RuPay / Visa / Mastercard Debit &amp; Credit
              Cards:</strong> Typically 5 to 7 business days, depending on your
              bank&apos;s settlement cycle.
            </li>
          </ul>
        </li>
        <li>
          <strong>Payment Failures / Double Debits:</strong> If your account is
          debited but the booking was not confirmed because of a network or
          server timeout, our reconciliation process initiates an automatic
          reversal once the payment is verified. The credit then follows the
          banking timelines above.
        </li>
      </ul>

      <h2>7. Taxes on Cancellations</h2>
      <ul>
        <li>
          Where a full refund is issued before check-in, any GST collected by
          the Hotelier on the amount paid is refunded along with it.
        </li>
        <li>
          Where retention fees or cancellation charges are kept by the Hotelier,
          they may attract GST as per applicable Indian tax rules.
        </li>
        <li>
          Credit notes or amended invoices, where required, are issued by the
          Hotelier to the Guest.
        </li>
      </ul>

      <h2>8. Force Majeure &amp; Extraordinary Circumstances</h2>
      <p>
        Neither PureBook nor the Hotelier is in breach of obligations where a
        stay cannot be hosted because of Acts of God, extreme natural disasters,
        pandemic lockdowns, curfew orders, state-level travel bans, or civil
        unrest that makes the accommodation physically or legally inaccessible.
      </p>
      <p>
        In such cases, Hoteliers are encouraged to offer date-change credits or
        full refunds, subject to government directions in force at the time.
      </p>

      <h2>9. Contact &amp; Dispute Escalation</h2>
      <p>
        For questions or status updates on an existing cancellation or refund:
      </p>
      <ol>
        <li>
          <strong>First Point of Contact:</strong> Contact the hotel directly
          using the phone number or email on your booking voucher, as the hotel
          manages room availability and policy exceptions.
        </li>
        <li>
          <strong>PureBook Support Desk:</strong> If you cannot resolve the
          matter with the hotel, or need technical verification of a payment
          refund reference number (RRN), write to our support team:
        </li>
      </ol>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-800">
        <p className="font-semibold text-slate-900">
          PureBook Refund &amp; Help Desk
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:support@mail.purebook.in"
            className="font-medium text-brand-600 underline hover:text-brand-700"
          >
            support@mail.purebook.in
          </a>
        </p>
        <p>
          Please include your <strong>Booking ID</strong>,{" "}
          <strong>Registered Mobile Number</strong>, and{" "}
          <strong>Hotel Name</strong> in the subject line for faster resolution.
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Support Hours: Monday to Sunday (9:00 AM – 6:00 PM IST)
        </p>
      </div>
    </article>
  );
}