import Link from 'next/link';
import { ArrowRight, ArrowUp, Mail, Phone, ShieldCheck, FileText, Smartphone } from 'lucide-react';
import Logo from './Logo';
import { APP_URL } from '@/lib/config';

const product = [
  { label: 'Features', href: '/#features' },
  { label: 'Live Demo', href: '/demo' },
  { label: 'ROI Calculator', href: '/#calculator' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQs', href: '/#faq' },
];

const legal = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Contact Us', href: '/contact' },
];

const badges = [
  { icon: Smartphone, label: 'UPI & Cards' },
  { icon: ShieldCheck, label: 'Secure payments' },
  { icon: FileText, label: 'GST-ready invoices' },
];

const linkCls = 'inline-flex items-center gap-1 text-slate-400 transition hover:translate-x-0.5 hover:text-white';

export default function Footer() {
  const appUrl = APP_URL;
  return (
    <footer className="relative mt-24 flow-root bg-navy-900 text-slate-300">
      {/* Call-to-action card overlapping the footer edge */}
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative -mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 px-7 py-10 shadow-[0_30px_60px_-25px_rgba(55,48,163,0.8)] md:px-12">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" aria-hidden="true" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">Keep more of every direct booking.</h2>
              <p className="mt-2 max-w-xl text-sm text-indigo-100 md:text-base">
                Add PureBook to your hotel website in minutes. No OTA commission, instant UPI and card payments.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5">
                Book a Demo <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/demo" className="inline-flex items-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Try Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" aria-label="PureBook home" className="inline-block">
            <Logo light className="h-10" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            Helping independent hotels, resorts and homestays keep 100% of their direct booking revenue.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {badges.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
                <Icon size={13} className="text-indigo-300" /> {label}
              </li>
            ))}
          </ul>
        </div>

        <nav className="md:col-span-2" aria-label="Product">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Product</h3>
          <ul className="space-y-2.5 text-sm">
            {product.map((l) => (
              <li key={l.label}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
            ))}
            <li><a href={appUrl} className={linkCls}>Hotelier Login</a></li>
          </ul>
        </nav>

        <nav className="md:col-span-2" aria-label="Legal">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
          <ul className="space-y-2.5 text-sm">
            {legal.map((l) => (
              <li key={l.label}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="mailto:support@mail.purebook.in" className="group flex items-center gap-3 text-slate-300 transition hover:text-white">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-indigo-300 ring-1 ring-white/10 transition group-hover:bg-brand-500 group-hover:text-white"><Mail size={16} /></span>
                <span className="break-all">support@mail.purebook.in</span>
              </a>
            </li>
            <li>
              <a href="tel:+916305110174" className="group flex items-center gap-3 text-slate-300 transition hover:text-white">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-indigo-300 ring-1 ring-white/10 transition group-hover:bg-brand-500 group-hover:text-white"><Phone size={16} /></span>
                +91 6305110174
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} PureBook. All rights reserved.</p>
          <p className="hidden sm:block">Built for independent hotels in India</p>
          <a href="#top" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">
            Back to top <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
