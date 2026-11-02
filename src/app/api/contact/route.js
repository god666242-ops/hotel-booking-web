import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clip = (v, n = 500) => String(v ?? '').trim().slice(0, n);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const lead = {
    name: clip(body.name, 100),
    hotelName: clip(body.hotelName, 150),
    email: clip(body.email, 150),
    phone: clip(body.phone, 30),
    rooms: clip(body.rooms, 20),
    city: clip(body.city, 100),
    website: clip(body.website, 200),
    message: clip(body.message, 2000),
  };

  const missing = ['name', 'hotelName', 'email', 'phone', 'city'].filter((k) => !lead[k]);
  if (missing.length) {
    return NextResponse.json({ success: false, error: `Missing required fields: ${missing.join(', ')}` }, { status: 400 });
  }
  if (!/^\S+@\S+\.\S+$/.test(lead.email)) {
    return NextResponse.json({ success: false, error: 'Invalid email address' }, { status: 400 });
  }
  if (lead.phone.replace(/\D/g, '').length < 10) {
    return NextResponse.json({ success: false, error: 'Invalid phone number' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!apiKey && !webhook) {
    console.error('Neither RESEND_API_KEY nor CONTACT_WEBHOOK_URL is configured');
    return NextResponse.json({ success: false, error: 'Lead capture is not configured.' }, { status: 500 });
  }

  const results = [];

  if (apiKey) {
    results.push(
      (async () => {
        const resend = new Resend(apiKey);
        const { error } = await resend.emails.send({
          from: process.env.CONTACT_FROM_EMAIL,
          to: process.env.CONTACT_TO_EMAIL,
          replyTo: lead.email,
          subject: `New PureBook demo request – ${lead.hotelName} (${lead.city})`,
          html: `<h2>New demo request</h2>
            <p><b>Name:</b> ${esc(lead.name)}</p>
            <p><b>Hotel:</b> ${esc(lead.hotelName)}</p>
            <p><b>Email:</b> ${esc(lead.email)}</p>
            <p><b>Phone:</b> ${esc(lead.phone)}</p>
            <p><b>Rooms:</b> ${esc(lead.rooms)}</p>
            <p><b>City:</b> ${esc(lead.city)}</p>
            <p><b>Website:</b> ${esc(lead.website) || '—'}</p>
            <p><b>Message:</b><br/>${esc(lead.message).replace(/\n/g, '<br/>') || '—'}</p>`,
        });
        if (error) throw new Error(error.message);
      })()
    );
  }

  if (webhook) {
    results.push(
      fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString() }),
      }).then((r) => { if (!r.ok) throw new Error(`Webhook responded ${r.status}`); })
    );
  }

  const settled = await Promise.allSettled(results);
  settled.filter((s) => s.status === 'rejected').forEach((s) => console.error('Lead delivery failed:', s.reason));

  // Succeed if at least one delivery channel worked
  if (!settled.some((s) => s.status === 'fulfilled')) {
    return NextResponse.json({ success: false, error: 'Could not send your request. Please try again.' }, { status: 502 });
  }
  return NextResponse.json({ success: true });
}
