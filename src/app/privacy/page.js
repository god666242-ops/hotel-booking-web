export const metadata = { title: "Privacy Policy – PureBook" };

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 px-5 py-16 text-slate-700 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h3]:mt-4 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-slate-800 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
      <h1>Privacy Policy</h1>
      <p className="text-sm text-slate-500">
        Last updated:{" "}
        {new Date().toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
        This Privacy Policy explains how PureBook collects, handles, stores, and
        safeguards information across our multi-tenant SaaS booking
        infrastructure, administrative dashboards, public marketing portals, and
        embedded booking widgets operating across India.
      </p>

      <h2>1. Introduction &amp; Scope</h2>
      <p>
        PureBook (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides direct-booking
        engine software, hotel management interfaces, and embeddable web
        components for independent accommodation providers (&quot;Hoteliers&quot;)
        across India.
      </p>
      <p>
        This Privacy Policy applies to all individuals who interact with our
        services, including:
      </p>
      <ul>
        <li>
          <strong>Hoteliers &amp; Staff:</strong> Hotel owners, managers, and front
          desk personnel accessing the PureBook Admin and Superadmin portals.
        </li>
        <li>
          <strong>Guests:</strong> Visitors making room reservations through the
          PureBook direct booking engine embedded on partner hotel websites or
          served via our CDN endpoints.
        </li>
        <li>
          <strong>Website Visitors:</strong> Prospective clients exploring our
          marketing portal, requesting product demonstrations, or contacting our
          sales desk.
        </li>
      </ul>

      <h2>2. Roles Under Indian Data Protection Laws</h2>
      <p>
        In accordance with the Information Technology Act, 2000, the Information
        Technology (Reasonable Security Practices and Procedures and Sensitive
        Personal Data or Information) Rules, 2011, and the Digital Personal Data
        Protection (DPDP) Act, 2023:
      </p>
      <ul>
        <li>
          <strong>Data Fiduciary / Data Controller:</strong> The respective
          Hotelier acts as the Data Fiduciary regarding Guest reservation details,
          guest preferences, stay history, and guest communication for bookings
          conducted at their property.
        </li>
        <li>
          <strong>Data Processor:</strong> PureBook acts as a Data Processor
          processing Guest personal data on the express instructions and on
          behalf of the Hotelier to generate booking vouchers, calculate taxes,
          hold inventory, and initiate payment webhooks.
        </li>
        <li>
          <strong>PureBook as Data Fiduciary:</strong> PureBook acts as an
          independent Data Fiduciary regarding Hotelier registration data,
          platform login credentials, billing records, and direct inquiries
          submitted through our platform.
        </li>
      </ul>

      <h2>3. Information We Collect</h2>
      <h3>A. Information Collected from Guests</h3>
      <ul>
        <li>
          <strong>Contact &amp; Identity Information:</strong> Full name, email
          address, mobile number, and residential address submitted during
          checkout.
        </li>
        <li>
          <strong>Reservation Details:</strong> Check-in and check-out dates,
          room type selections, occupancy numbers, special requests, selected
          add-ons, and booking voucher identifiers.
        </li>
        <li>
          <strong>Transaction Metadata:</strong> Razorpay order IDs, payment IDs,
          transaction timestamps, payment method type (UPI, Card, Net Banking),
          and advance payment amounts.
        </li>
      </ul>

      <h3>B. Information Collected from Hoteliers &amp; Staff</h3>
      <ul>
        <li>
          <strong>Account &amp; Property Details:</strong> Property name, legal
          entity name, GSTIN (Goods and Services Tax Identification Number),
          property address, primary contact details, bank account details for
          settlement, and hotel branding assets.
        </li>
        <li>
          <strong>Operational Credentials:</strong> Business email address,
          hashed authentication passwords, role-based access tokens, and staff
          invitations.
        </li>
        <li>
          <strong>Gateway Integrations:</strong> API key identifiers, Razorpay
          webhook secrets, and third-party calendar sync URLs (iCal feeds) linked
          to property listings.
        </li>
      </ul>

      <h3>C. Technical &amp; Automated Device Information</h3>
      <ul>
        <li>
          IP addresses, browser engine user-agents, operating system details,
          HTTP referring headers, time stamps, and session state logs.
        </li>
        <li>
          Diagnostic error telemetry and network performance metrics collected
          during booking engine initialization and widget execution.
        </li>
      </ul>

      <h2>4. Sensitive Financial Information &amp; Payment Processing</h2>
      <p>
        All digital payment transactions initiated on PureBook and its embedded
        widgets are processed through Reserve Bank of India (RBI)-authorized
        payment aggregators (primarily Razorpay).
      </p>
      <ul>
        <li>
          <strong>No Card Storage:</strong> PureBook never collects, stores, or
          processes debit/credit card numbers, CVVs, card expiration dates, UPI
          PINs, or Net Banking passwords on its servers.
        </li>
        <li>
          <strong>Secure Tokenization:</strong> All monetary transactions occur
          directly within the secure, PCI-DSS compliant checkout frame of the
          payment aggregator.
        </li>
        <li>
          <strong>Webhook Verification:</strong> PureBook receives solely
          cryptographically signed webhook notifications confirming whether a
          transaction was authorized, captured, or refunded to unlock or confirm
          room inventory.
        </li>
      </ul>

      <h2>5. How We Use Your Information</h2>
      <p>We process personal information for the following specific purposes:</p>
      <ul>
        <li>
          <strong>Booking Execution:</strong> Reserving inventory, generating
          automated booking confirmation codes, issuing GST-compliant guest
          invoices, and providing digital booking vouchers.
        </li>
        <li>
          <strong>Operational Notifications:</strong> Delivering transactional
          communications via email or SMS/WhatsApp regarding booking
          confirmations, stay reminders, and cancellation updates.
        </li>
        <li>
          <strong>Inventory Protection &amp; Reconciliation:</strong> Managing
          real-time room hold locks, preventing double-bookings, and reconciling
          payment webhooks against pending reservations.
        </li>
        <li>
          <strong>Service Maintenance &amp; Security:</strong> Mitigating abuse,
          rate-limiting suspicious API calls, diagnosing platform uptime, and
          safeguarding system integrity.
        </li>
        <li>
          <strong>Statutory &amp; Legal Compliance:</strong> Assisting Hoteliers in
          satisfying mandatory Indian hospitality reporting requirements (such as
          local police registration regulations and Form C compliance for
          foreign nationals where applicable).
        </li>
      </ul>

      <h2>6. Data Sharing &amp; Third-Party Disclosures</h2>
      <p>
        PureBook does not sell, rent, monetize, or trade personal data to third
        parties for marketing or advertising purposes. Disclosures occur strictly
        as necessary:
      </p>
      <ul>
        <li>
          <strong>With the Accommodation Provider:</strong> Guest data is directly
          transferred to the specific Hotelier with whom the reservation was
          placed.
        </li>
        <li>
          <strong>Authorized Infrastructure Providers:</strong> Cloud hosting
          providers, managed database nodes (MongoDB Atlas), distributed cache
          providers (Redis), automated email delivery services, and payment
          gateways operating under strict confidentiality covenants.
        </li>
        <li>
          <strong>Legal Obligations:</strong> When mandated by court order, law
          enforcement request, investigative agency warrant, or statutory
          mandate under applicable Indian legislation.
        </li>
      </ul>

      <h2>7. Cookies, Local Storage &amp; Embedded Tracking</h2>
      <ul>
        <li>
          <strong>Session &amp; Authentication Tokens:</strong> We use secure,
          HTTP-only cookies or local session storage to maintain authenticated
          dashboard sessions for Hoteliers and administrators.
        </li>
        <li>
          <strong>Widget Isolation:</strong> The PureBook booking widget uses
          Shadow DOM encapsulation and local state storage strictly to preserve
          the guest&apos;s active booking flow, selected check-in/out dates, and
          guest counts. We do not place third-party cross-site advertising
          trackers inside the widget embed.
        </li>
      </ul>

      <h2>8. Data Security &amp; Storage Protocols</h2>
      <p>
        PureBook implements reasonable technical, administrative, and physical
        safeguards designed to protect personal information against loss, theft,
        unauthorized access, and alteration:
      </p>
      <ul>
        <li>
          End-to-end Transport Layer Security (TLS 1.2/1.3) encryption across all
          public web endpoints, API routes, and administrative dashboards.
        </li>
        <li>
          Database encryption at rest for stored records and sensitive API
          credentials.
        </li>
        <li>
          Cryptographic password hashing utilizing modern salted key derivation
          algorithms.
        </li>
      </ul>

      <h2>9. Data Retention &amp; Erasure</h2>
      <ul>
        <li>
          <strong>Guest Booking Records:</strong> Maintained for as long as
          necessary to fulfill reservation commitments, resolve potential
          billing disputes, process authorized refunds, and fulfill statutory
          Indian taxation and accounting retention rules (typically up to 8
          financial years for invoice records).
        </li>
        <li>
          <strong>Hotelier Account Data:</strong> Maintained during the active
          tenancy of the hotel&apos;s subscription and archived upon contract
          termination in line with standard dispute limitation windows.
        </li>
        <li>
          <strong>Temporary Hold Data:</strong> Expired holds and abandoned
          booking attempts are cleared automatically through background
          cleanup routines.
        </li>
      </ul>

      <h2>10. Your Rights &amp; Choices</h2>
      <p>
        Subject to applicable Indian laws and validation of identity, users have
        the following rights:
      </p>
      <ul>
        <li>
          <strong>Access &amp; Rectification:</strong> Hoteliers can review and
          update property details and administrative profiles directly in the
          dashboard. Guests may request copies of their stored reservation
          records.
        </li>
        <li>
          <strong>Correction of Inaccuracies:</strong> Request correction of
          erroneous, outdated, or incomplete personal data.
        </li>
        <li>
          <strong>Erasure:</strong> Request deletion of personal information,
          subject to statutory retention mandates (e.g., GST audit requirements
          and lawful accounting records).
        </li>
      </ul>

      <h2>11. Grievance Officer &amp; Privacy Contact</h2>
      <p>
        In accordance with the Information Technology Act, 2000 and the Rules
        framed thereunder, the details of the Grievance Officer for PureBook are
        provided below:
      </p>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-800">
        <p className="font-semibold text-slate-900">
          PureBook Grievance &amp; Privacy Desk
        </p>
        <p>Attention: Grievance Officer</p>
        <p>
          Email:{" "}
          <a
            href="mailto:support@mail.purebook.in"
            className="font-medium text-brand-600 underline hover:text-brand-700"
          >
            support@mail.purebook.in
          </a>
        </p>
        <p>Operating Hours: Monday to Friday (10:00 AM – 6:00 PM IST)</p>
        <p className="mt-2 text-xs text-slate-500">
          We endeavor to acknowledge privacy-related inquiries and grievances
          within 48 hours and resolve them within statutory time limits.
        </p>
      </div>
    </article>
  );
}