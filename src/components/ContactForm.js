'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

const initial = { name: '', hotelName: '', email: '', phone: '+91 ', rooms: '1–10', city: '', website: '', message: '' };

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = 'Please enter your name';
  if (!f.hotelName.trim()) e.hotelName = 'Please enter your property name';
  if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email address';
  if (f.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a valid phone number';
  if (!f.city.trim()) e.city = 'Please enter your city';
  if (f.website.trim() && !/^https?:\/\/\S+\.\S+/.test(f.website.trim())) e.website = 'Start with http:// or https://';
  return e;
}

function Field({ label, error, children }) {
  return (
    <label className="block text-sm font-semibold text-slate-700">
      {label}
      <div className="mt-1.5">{children}</div>
      {error && (
        <span className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600">
          <AlertCircle size={12} className="shrink-0" /> {error}
        </span>
      )}
    </label>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [serverError, setServerError] = useState('');

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  async function onSubmit(e) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    setStatus('sending');
    setServerError('');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Something went wrong');
      setStatus('success');
      setForm(initial);
    } catch (err) {
      setServerError(err.message);
      setStatus('error');
    }
  }

  const base =
    'w-full rounded-xl border px-3.5 py-2.5 text-sm font-normal text-slate-900 placeholder:text-slate-400 transition focus:outline-none focus:ring-4';
  const cls = (n) =>
    `${base} ${
      errors[n]
        ? 'border-red-400 bg-red-50/50 focus:ring-red-500/15'
        : 'border-slate-300 bg-slate-50/60 hover:border-slate-400 focus:border-brand-500 focus:bg-white focus:ring-brand-500/15'
    }`;

  if (status === 'success') {
    return (
      <div role="status" className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 text-center text-emerald-900">
        <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-emerald-400/20 blur-2xl" aria-hidden="true" />
        <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-[0_12px_30px_-10px_rgba(16,185,129,0.8)]">
          <CheckCircle2 size={28} />
        </span>
        <p className="relative mt-4 text-xl font-bold">Request received!</p>
        <p className="relative mt-1 text-sm text-emerald-800">
          Our team will contact you on WhatsApp/phone shortly to schedule your demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {status === 'error' && (
        <div role="alert" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3.5 text-sm text-red-700">
          <AlertCircle size={18} className="mt-0.5 shrink-0" /> {serverError}
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field error={errors.name} label="Full name *"><input className={cls('name')} name="name" value={form.name} onChange={onChange} /></Field>
        <Field error={errors.hotelName} label="Hotel / property name *"><input className={cls('hotelName')} name="hotelName" value={form.hotelName} onChange={onChange} /></Field>
        <Field error={errors.email} label="Work email *"><input className={cls('email')} type="email" name="email" value={form.email} onChange={onChange} /></Field>
        <Field error={errors.phone} label="WhatsApp / phone *"><input className={cls('phone')} type="tel" name="phone" value={form.phone} onChange={onChange} /></Field>
        <Field error={errors.rooms} label="Total room inventory">
          <select className={cls('rooms')} name="rooms" value={form.rooms} onChange={onChange}>
            {['1–10', '11–25', '26–50', '50+'].map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field error={errors.city} label="Hotel location / city *"><input className={cls('city')} name="city" placeholder="e.g. Guntur, Goa, Ooty" value={form.city} onChange={onChange} /></Field>
      </div>
      <Field error={errors.website} label="Current website URL (optional)"><input className={cls('website')} name="website" placeholder="https://" value={form.website} onChange={onChange} /></Field>
      <Field error={errors.message} label="Message / special needs (optional)"><textarea className={cls('message')} rows={3} name="message" value={form.message} onChange={onChange} /></Field>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 px-6 py-3.5 font-semibold text-white shadow-[0_12px_30px_-10px_rgba(79,70,229,0.9)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-10px_rgba(79,70,229,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:translate-y-0 disabled:opacity-60"
      >
        {status === 'sending' && <Loader2 size={18} className="animate-spin" />}
        {status === 'sending' ? 'Sending…' : 'Request Free Setup & Live Demo'}
        {status !== 'sending' && <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />}
      </button>
      <p className="text-center text-xs text-slate-500">No credit card required • 24-hour setup turnaround • Works with any existing website.</p>
    </form>
  );
}
