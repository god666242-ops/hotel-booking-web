'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { APP_URL } from '@/lib/config';

const links = [
  { href: '/#features', label: 'Features' },
  { href: '/#demo', label: 'Live Demo' },
  { href: '/#calculator', label: 'ROI Calculator' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQs' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const appUrl = APP_URL;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
        <Link href="/" aria-label="PureBook home"><Logo /></Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          {links.map((l) => <Link key={l.href} href={l.href} className="hover:text-brand-600">{l.label}</Link>)}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={appUrl} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Hotelier Login
          </a>
          <Link href="/contact" className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
            Book a Demo
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="space-y-1 border-t border-slate-200 bg-white px-5 pb-5 pt-3 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50">
              {l.label}
            </Link>
          ))}
          <a href={appUrl} className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50">Hotelier Login</a>
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 block rounded-lg bg-brand-500 px-3 py-2.5 text-center font-semibold text-white">
            Book a Demo
          </Link>
        </div>
      )}
    </header>
  );
}
