export const metadata = { title: "Terms & Conditions – PureBook" };

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 px-5 py-16 text-slate-700 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h3]:mt-4 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-slate-800 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
      <h1>Terms &amp; Conditions</h1>
      <p className="text-sm text-slate-500">Last updated: 12 November 2026</p>

      <p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
        Please read these Terms and Conditions carefully before accessing or
        using the PureBook software platform, embedded booking engine, or
        associated services across India.
      </p>

      <h2>1. Introduction &amp; Nature of Service</h2>
      <p>
        PureBook (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides a multi-tenant
        direct booking infrastructure, software suite, administrative dashboard,
        and embeddable booking engine widget designed for independent hotels,
        resorts, homestays, and accommodation providers (&quot;Hoteliers&quot;) across
        India.
      </p>
      <p>
        PureBook acts strictly as a technology facilitator and SaaS platform.
        PureBook is neither a travel agency, tour operator, nor a direct
        hospitality service provider. The underlying contract of accommodation,
        hospitality standards, room allotment, guest check-in, and guest
        amenities is formed directly between the Hotelier and the guest (&quot;Guest&quot;).
      </p>

      <h2>2. Eligibility &amp; Pan-India Operation</h2>
      <p>
        The platform and booking engine are intended for use within India and
        comply with applicable Indian statutes:
      </p>
      <ul>
        <li>
          Users (Hoteliers, staff, and Guests) must be at least 18 years of age
          and competent to enter into a legally binding contract under the Indian
          Contract Act, 1872.
        </li>
        <li>
          All transactions are denominated and settled in Indian National Rupees
          (INR).
        </li>
        <li>
          Hoteliers operating across all Indian States and Union Territories must
          possess requisite business registrations, local municipal licenses,
          and permits (such as Sarai Act licenses, police verification protocols,
          and FSSAI licenses where meals are served).
        </li>
      </ul>

      <h2>3. Hotelier Responsibilities &amp; Dashboard Operations</h2>
      <p>By registering an account and deploying PureBook, the Hotelier agrees to:</p>
      <ul>
        <li>
          <strong>Rate &amp; Inventory Accuracy:</strong> Ensure that room rates,
          extra guest surcharges, available inventory, amenities, check-in/out
          times, and property policies configured on the dashboard are kept
          accurate in real time.
        </li>
        <li>
          <strong>Honor Confirmed Reservations:</strong> Honor all bookings
          confirmed via the PureBook engine. In the rare event of an unavoidable
          overbooking or operational inability to host, the Hotelier is solely
          responsible for arranging comparable alternative accommodation or
          initiating an immediate full refund to the Guest.
        </li>
        <li>
          <strong>Account Security:</strong> Safeguard administrator credentials,
          API keys, and webhook secrets. Any action conducted through an
          authenticated dashboard account will be deemed authorized by the Hotelier.
        </li>
      </ul>

      <h2>4. Booking, Pricing, Taxes &amp; Invoicing</h2>
      <ul>
        <li>
          <strong>Rates &amp; Indian Goods and Services Tax (GST):</strong> All room
          charges, add-on rates, and applicable GST slabs are defined and
          maintained by the respective Hotelier. Taxes are calculated in
          accordance with statutory GST council rules applicable to the room tariff.
        </li>
        <li>
          <strong>Invoices:</strong> The primary tax invoice for lodging and stay
          services is issued directly by the Hotelier to the Guest upon
          check-in or check-out. PureBook issues invoices only to the Hotelier,
          for the platform commission payable under these Terms.
        </li>
        <li>
          <strong>Payment Options:</strong> Each Hotelier offers one of two
          payment options: (a) <strong>Pay Online</strong> through the
          Hotelier&apos;s own Razorpay payment gateway, or (b){" "}
          <strong>Pay at Hotel</strong>, where the Guest pays a booking fee
          online and the balance at the property. The option that applies is
          shown to the Guest before payment.
        </li>
      </ul>

      <h2>5. Payments, Platform Commission &amp; Settlement</h2>
      <p>
        Payment processing on the PureBook platform is facilitated through
        Reserve Bank of India (RBI)-authorized payment aggregators, primarily
        Razorpay.
      </p>
      <ul>
        <li>
          <strong>Pay Online (Hotelier&apos;s Own Gateway):</strong> The Hotelier
          connects their own Razorpay account. Guest payments, UPI transfers,
          card clearances, refunds, and chargeback disputes flow directly between
          the gateway and the Hotelier&apos;s own account and bank account.
          PureBook does not hold or settle these funds. PureBook charges a
          platform commission of <strong>5%</strong> of the booking value,
          invoiced to the Hotelier weekly.
        </li>
        <li>
          <strong>Pay at Hotel:</strong> The Guest pays a booking fee of{" "}
          <strong>8%</strong> of the booking value online at checkout, which is
          retained by PureBook as its commission. The balance is paid by the
          Guest directly to the Hotelier at the property. This fee is
          non-refundable on Guest cancellation, and refunded in full if the
          Hotelier cancels, as set out in the Refund &amp; Cancellation Policy.
        </li>
        <li>
          <strong>Commission Base:</strong> Commission is calculated on the room
          tariff and add-ons, excluding the Hotelier&apos;s GST. Different rates
          apply only where agreed in writing with the Hotelier.
        </li>
        <li>
          <strong>Invoicing &amp; Non-Payment:</strong> Weekly commission
          invoices are payable within the period stated on the invoice, through
          the payment link provided. PureBook may suspend access to the booking
          engine for invoices that remain unpaid after the stated period.
        </li>
        <li>
          <strong>Taxes on Platform Fees:</strong> PureBook is currently not
          registered under GST and does not charge GST on its commission or
          booking fees. If registration becomes applicable, GST will be added
          as required by law, with notice to Hoteliers.
        </li>
        <li>
          <strong>Payment Gateway Security:</strong> PureBook does not store raw
          credit/debit card numbers, CVVs, or Net Banking credentials on its
          servers. All card processing adheres to PCI-DSS compliance standards
          governed by our payment gateway partners.
        </li>
      </ul>

      <h2>6. Cancellations &amp; Refunds</h2>
      <p>
        All cancellation requests and refund entitlements are governed by the
        Hotelier&apos;s cancellation policy displayed at the time of booking, and
        by the payment option that applies to the booking:
      </p>
      <ul>
        <li>
          Refund calculations (including free cancellation windows, deduction
          tiers, and non-refundable rates) follow the property&apos;s displayed
          rules. Under Pay Online, refunds are issued from the Hotelier&apos;s own
          gateway account.
        </li>
        <li>
          Under Pay at Hotel, a Guest cancellation simply cancels the booking,
          and the online booking fee is non-refundable.
        </li>
        <li>
          Approved refunds are credited back to the original source payment
          method (UPI, Net Banking, or Card) within standard banking turnaround
          times (typically 5 to 7 business days).
        </li>
        <li>
          For comprehensive terms regarding cancellations, please review our{" "}
          <a
            href="/refund-policy"
            className="text-brand-600 underline hover:text-brand-700"
          >
            Refund &amp; Cancellation Policy
          </a>
          .
        </li>
      </ul>

      <h2>7. Guest Conduct &amp; Identification Mandatory Rules</h2>
      <p>
        In compliance with Government of India regulations and local law
        enforcement guidelines:
      </p>
      <ul>
        <li>
          Every staying guest must present valid government-issued photographic
          proof of identity at check-in (Aadhaar Card, Passport, Voter ID, or
          Driving License). PAN Cards are generally not accepted as identity
          proof for hotel check-ins.
        </li>
        <li>
          Foreign nationals must present a valid passport and Indian Visa / OCI
          card and complete Form C compliance with the local Foreigners Regional
          Registration Office (FRRO).
        </li>
        <li>
          Hoteliers reserve the absolute right to refuse check-in or service to
          any guest failing to present appropriate identification or violating
          property code of conduct, without liability for refund.
        </li>
      </ul>

      <h2>8. Intellectual Property &amp; Widget License</h2>
      <p>
        PureBook grants the Hotelier a limited, revocable, non-exclusive,
        non-transferable license to embed and display the PureBook booking engine
        widget (<code>&lt;hotel-booking-engine&gt;</code>) on their direct domain
        names.
      </p>
      <p>
        Hoteliers and users shall not reverse engineer, decompile, duplicate, or
        tamper with the script bundle, backend endpoints, or platform styling.
        PureBook trademarks, logos, and proprietary software architecture remain
        the exclusive intellectual property of the Company.
      </p>

      <h2>9. Limitation of Liability &amp; Disclaimers</h2>
      <ul>
        <li>
          <strong>&quot;As Is&quot; Software:</strong> PureBook provides its software,
          booking engine, and servers on an &quot;as is&quot; and &quot;as available&quot; basis
          without warranty of uninterrupted uptime, although we strive for maximum
          availability.
        </li>
        <li>
          <strong>No Hospitality Liability:</strong> PureBook shall not be
          responsible or held liable for property deficiencies, room cleanliness,
          theft, injury, personal damages, or service disputes occurring during
          the Guest&apos;s stay at the Hotelier&apos;s property.
        </li>
        <li>
          <strong>Consequential Damages:</strong> To the maximum extent permitted
          by Indian law, PureBook shall not be liable for any indirect, incidental,
          or consequential damages, including loss of profits, data, or business
          interruption.
        </li>
      </ul>

      <h2>10. Governing Law &amp; Dispute Resolution</h2>
      <p>
        These Terms and Conditions shall be governed by, construed, and enforced
        in accordance with the laws of the Republic of India.
      </p>
      <p>
        Any disputes, controversies, or claims arising out of or relating to
        the platform, services, or these terms shall be subject to the
        jurisdiction of the competent courts in India.
      </p>

      <h2>11. Contact &amp; Grievance Redressal</h2>
      <p>
        In accordance with the Information Technology Act, 2000 and rules made
        thereunder, if you have any questions, clarifications, or grievances
        regarding these terms or the platform, you may contact our support desk:
      </p>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-800">
        <p className="font-semibold text-slate-900">PureBook Support Desk</p>
        <p>
          Email:{" "}
          <a
            href="mailto:support@mail.purebook.in"
            className="font-medium text-brand-600 underline hover:text-brand-700"
          >
            support@mail.purebook.in
          </a>
        </p>
        <p>Support Hours: Monday to Sunday (9:00 AM – 6:00 PM IST)</p>
      </div>
    </article>
  );
}