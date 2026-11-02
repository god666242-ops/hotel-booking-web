export const metadata = { title: "Terms of Service – PureBook" };

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 px-5 py-16 text-slate-700 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_ul]:list-disc [&_ul]:pl-6">
      <h1>Terms of Service</h1>
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
      <h2>1. Service</h2>
      <p>
        PureBook provides an embeddable booking engine, payment collection and a
        hotelier dashboard. By using the service you agree to these terms.
      </p>
      <h2>2. Accounts</h2>
      <p>
        Hotels are responsible for the accuracy of inventory, rates, policies
        and the security of their credentials.
      </p>
      <h2>3. Fees</h2>
      <p>
        Fees are as agreed in the selected plan: a booking fee collected from
        the guest at booking (pay at hotel), or a weekly commission invoice (own
        Razorpay account). Unpaid invoices may lead to suspension of the
        listing.
      </p>
      <h2>4. Bookings and payments</h2>
      <p>
        Bookings are contracts between the guest and the hotel. PureBook
        facilitates the booking. For hotels without their own gateway, PureBook
        collects only its booking fee from the guest and the hotel collects the
        balance directly. Hotels using their own Razorpay account receive guest
        payments directly and are invoiced weekly for PureBook's commission.
      </p>
      <h2>5. Acceptable use</h2>
      <p>
        You may not misuse the service, attempt unauthorised access, or use it
        for unlawful purposes.
      </p>
      <h2>6. Liability</h2>
      <p>
        To the extent permitted by law, PureBook is not liable for indirect or
        consequential losses. Our aggregate liability is limited to fees paid in
        the preceding three months.
      </p>
      <h2>7. Termination</h2>
      <p>
        Either party may terminate with notice. Outstanding commission invoices
        remain payable after termination.
      </p>
      <h2>8. Governing law</h2>
      <p>
        These terms are governed by the laws of India. Courts at [Your City]
        have jurisdiction.
      </p>
    </article>
  );
}
