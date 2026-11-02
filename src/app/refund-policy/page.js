export const metadata = { title: "Refund & Cancellation Policy – PureBook" };

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 px-5 py-16 text-slate-700 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h3]:mt-4 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-slate-800 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
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
        This Refund and Cancellation Policy governs the terms, conditions, and
        procedures applicable to cancellations, modifications, and monetary
        refunds for reservations processed via the PureBook direct booking engine
        and software platform across India.
      </p>

      <h2>1. Nature of the Platform &amp; Contractual Hierarchy</h2>
      <p>
        PureBook (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides SaaS
        technology, booking engine infrastructure, and payment processing
        integrations for independent accommodation providers (&quot;Hoteliers&quot;)
        operating across Indian States and Union Territories.
      </p>
      <p>
        PureBook facilitates the reservation technology but is not the direct
        provider of accommodation. The contract of hospitality and accommodation
        exists solely between the guest (&quot;Guest&quot;) and the respective Hotelier.
        Consequently, every property configures, manages, and enforces its own
        cancellation rules, refund tiers, and check-in timelines in accordance
        with their operational requirements.
      </p>

      <h2>2. Guest-Initiated Cancellations</h2>
      <p>
        Guests may cancel a confirmed reservation either through the self-service
        link provided in their digital booking voucher / email confirmation or by
        contacting the hotel front desk directly.
      </p>
      <ul>
        <li>
          <strong>Policy Visibility:</strong> The exact cancellation policy,
          free cancellation cutoff deadlines, and tiered deduction schedules are
          explicitly displayed on the room selection screen before payment and
          reiterated on the booking confirmation voucher.
        </li>
        <li>
          <strong>Calculation of Entitlement:</strong> Refund eligibility is
          strictly evaluated against the cancellation rules in force at the
          exact moment the reservation was confirmed.
        </li>
        <li>
          <strong>Standard Cancellation Tiers:</strong>
          <ul className="mt-2 list-circle pl-6">
            <li>
              <strong>Free Cancellation Window:</strong> If cancelled prior to
              the property&apos;s specified cutoff deadline (e.g., 24, 48, or 72 hours
              prior to standard check-in time), the guest receives a full refund
              of the advance deposit, minus any non-refundable platform or
              statutory gateway handling charges if specified prior to booking.
            </li>
            <li>
              <strong>Partial Refund Window:</strong> If cancelled within a
              tiered window (e.g., between 24 and 48 hours prior to check-in),
              the refund will reflect the percentage or fixed deduction defined
              by the hotel (such as retention of the first night&apos;s tariff).
            </li>
            <li>
              <strong>Late Cancellation / Non-Refundable Rates:</strong> Bookings
              cancelled after the final deadline, or reservations explicitly
              booked under promotional &quot;Non-Refundable&quot; rates, are not eligible
              for a refund.
            </li>
          </ul>
        </li>
      </ul>

      <h2>3. No-Show &amp; Early Departure Policy</h2>
      <ul>
        <li>
          <strong>No-Show:</strong> If a guest fails to check in on the scheduled
          arrival date without prior written communication to the hotel, the
          booking is classified as a &quot;No-Show&quot;. In such cases, the entire
          advance payment or the total retention fee stipulated by the property
          is forfeited, and the room inventory is released.
        </li>
        <li>
          <strong>Early Check-Out:</strong> If a guest chooses to shorten their
          stay after check-in has taken place, refunds for unused room nights are
          at the sole discretion of the Hotelier. PureBook cannot unilaterally
          issue refunds for early check-outs without formal dashboard approval
          from the property administration.
        </li>
      </ul>

      <h2>4. Hotel-Initiated Cancellations &amp; Operational Disruptions</h2>
      <p>
        In the rare circumstance that a Hotelier cancels a confirmed booking due
        to unforeseen operational circumstances, natural events, overbooking, or
        maintenance issues:
      </p>
      <ul>
        <li>
          The Guest is entitled to a <strong>100% full refund</strong> of all
          monies paid in advance, including any convenience or online booking
          fees.
        </li>
        <li>
          Alternatively, the Hotelier may, with the express consent of the Guest,
          arrange equivalent or upgraded alternative accommodation within
          reasonable proximity at no additional cost to the Guest.
        </li>
        <li>
          PureBook shall not be held liable for compensatory damages, travel
          inconvenience, or ancillary costs incurred by the Guest arising from a
          hotel-initiated cancellation.
        </li>
      </ul>

      <h2>5. Pay-at-Hotel &amp; Partial Deposit Bookings</h2>
      <ul>
        <li>
          <strong>Pay-at-Hotel:</strong> Where a booking is secured via a nominal
          advance booking fee or token deposit, that token fee is
          non-refundable in the event of a guest cancellation or no-show, as it
          serves as an inventory reservation guarantee. If the hotel cancels the
          booking, the token fee is refunded in full.
        </li>
        <li>
          <strong>Partial Deposit Bookings:</strong> If an advance deposit (e.g.,
          25% or 50%) was collected online, any refund calculation applies
          proportionately to the advance amount collected, in accordance with the
          hotel&apos;s cancellation tier.
        </li>
      </ul>

      <h2>6. Refund Processing, Timelines &amp; Payment Modes</h2>
      <p>
        All digital payment transactions and refunds on PureBook are processed
        through Reserve Bank of India (RBI)-authorized payment aggregators
        (primarily Razorpay).
      </p>
      <ul>
        <li>
          <strong>Source Account Reversal:</strong> Once a cancellation is
          processed and confirmed, refunds are automatically credited back to
          the original payment method used during checkout (UPI ID, credit/debit
          card, or Net Banking account). PureBook does not issue cash refunds or
          third-party transfers.
        </li>
        <li>
          <strong>Banking Turnaround Timelines:</strong>
          <ul className="mt-2 list-circle pl-6">
            <li>
              <strong>UPI Transactions:</strong> Typically reflected within 24
              to 48 banking hours.
            </li>
            <li>
              <strong>Net Banking &amp; RuPay / Visa / Mastercard Debit &amp; Credit Cards:</strong>{" "}
              Typically processed within 5 to 7 business days, depending on the
              guest&apos;s issuing bank settlement cycles.
            </li>
          </ul>
        </li>
        <li>
          <strong>Payment Gateway Failures / Double Debits:</strong> If a guest&apos;s
          account is debited but the booking was not confirmed due to network or
          server timeout, the automated reconciliation engine initiates a full
          reversal within 24 hours.
        </li>
      </ul>

      <h2>7. Goods and Services Tax (GST) Treatment on Cancellations</h2>
      <p>
        In compliance with the Central Goods and Services Tax (CGST) and State
        Goods and Services Tax (SGST) regulations in India:
      </p>
      <ul>
        <li>
          Where a full refund is issued prior to check-in, the associated GST
          component collected on the advance is credited back in full.
        </li>
        <li>
          Where retention fees or cancellation penalties are retained by the
          Hotelier, such fees may be treated as charges for cancellation services
          and subject to statutory GST deductions in accordance with applicable
          Indian tax rules.
        </li>
        <li>
          GST credit notes or amended invoices will be generated and issued by
          the Hotelier to the Guest where statutory invoicing has already occurred.
        </li>
      </ul>

      <h2>8. Force Majeure &amp; Extraordinary Circumstances</h2>
      <p>
        Neither PureBook nor the Hotelier shall be deemed in breach of their
        obligations for failure to host or execute reservations resulting from
        Acts of God, extreme natural disasters, pandemic lockdowns, curfew
        orders, state-level travel bans, or civil unrest making the accommodation
        physically or legally inaccessible.
      </p>
      <p>
        In such circumstances, Hoteliers are encouraged to provide date change
        credits or full refunds subject to state governmental directives issued
        at the time.
      </p>

      <h2>9. Contact &amp; Dispute Escalation</h2>
      <p>
        For questions or status updates regarding an existing cancellation or
        refund:
      </p>
      <ol>
        <li>
          <strong>First Point of Contact:</strong> Contact the hotel directly
          using the phone number or email address listed on your booking voucher,
          as the hotel administers inventory approvals and policy waivers.
        </li>
        <li>
          <strong>PureBook Support Desk:</strong> If you are unable to resolve
          the matter with the hotel or require technical verification of a
          payment refund reference number (RRN), write to our support team:
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
          Support Hours: Monday to Saturday (9:00 AM – 6:00 PM IST)
        </p>
      </div>
    </article>
  );
}