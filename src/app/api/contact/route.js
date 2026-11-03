import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { buildLeadEmail } from '@/lib/contactEmail';

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
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    console.error('Missing RESEND_API_KEY, CONTACT_FROM_EMAIL or CONTACT_TO_EMAIL');
    return NextResponse.json({ success: false, error: 'Lead capture is not configured.' }, { status: 500 });
  }

  try {
    const { subject, html, text } = buildLeadEmail(lead);
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({ from, to, replyTo: lead.email, subject, html, text });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error('Lead email failed:', err);
    return NextResponse.json({ success: false, error: 'Could not send your request. Please try again.' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}