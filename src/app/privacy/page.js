export const metadata = { title: 'Privacy Policy – PureBook' };

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 px-5 py-16 text-slate-700 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_ul]:list-disc [&_ul]:pl-6">
      <h1>Privacy Policy</h1>
      <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800">Template content – have this reviewed by a legal professional and fill in your company details before going live.</p>
      <h2>1. Who we are</h2>
      <p>PureBook ("we", "us") provides a direct-booking engine for hotels. Contact: support@purebook.in.</p>
      <h2>2. Information we collect</h2>
      <ul>
        <li>Details you submit through our contact form (name, hotel, email, phone, city, website, message).</li>
        <li>Basic usage data such as pages visited, device and browser information.</li>
        <li>For hotel accounts and guest bookings: guest names, contact details and booking details processed on behalf of hotels.</li>
      </ul>
      <h2>3. How we use information</h2>
      <p>To respond to demo requests, provide and improve the service, process bookings and payments, send confirmations, and meet legal obligations.</p>
      <h2>4. Payments</h2>
      <p>Payments are processed by Razorpay. We do not store card, UPI PIN or net-banking credentials.</p>
      <h2>5. Sharing</h2>
      <p>We share data only with service providers (e.g. payment gateway, email delivery) and as required by law. We do not sell personal data.</p>
      <h2>6. Retention and security</h2>
      <p>We retain data only as long as needed for the purposes above and use reasonable safeguards to protect it.</p>
      <h2>7. Your rights</h2>
      <p>You may request access, correction or deletion of your personal data by writing to support@purebook.in.</p>
      <h2>8. Changes</h2>
      <p>We may update this policy and will post the latest version on this page.</p>
    </article>
  );
}
