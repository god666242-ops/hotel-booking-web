'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, LogIn } from 'lucide-react';
import Logo from './Logo';
import { APP_URL } from '@/lib/config';

const links = [
  { id: 'features', href: '/#features', label: 'Features' },
  { id: 'demo', href: '/#demo', label: 'Live Demo' },
  { id: 'calculator', href: '/#calculator', label: 'ROI Calculator' },
  { id: 'pricing', href: '/#pricing', label: 'Pricing' },
  { id: 'faq', href: '/#faq', label: 'FAQs' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const pathname = usePathname();
  const appUrl = APP_URL;

  // Shadow + stronger background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the link of the section currently in view (home page only)
  useEffect(() => {
    if (pathname !== '/') { setActive(''); return undefined; }
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!els.length || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Close the mobile menu on Esc, on page change and when the screen becomes wide
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-slate-200/80 bg-white/90 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.35)] backdrop-blur-xl'
          : 'border-b border-transparent bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="h-[3px] w-full bg-gradient-to-r from-brand-500 via-violet-500 to-amber-400" aria-hidden="true" />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3" aria-label="Main">
        <Link href="/" aria-label="PureBook home" className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-brand-600' : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand-500 transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={appUrl}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500/50 hover:text-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <LogIn size={15} /> Hotelier Login
          </a>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.8)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(79,70,229,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            Book a Demo
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu (smooth height animation) */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="max-h-[calc(100vh-4.5rem)] space-y-1 overflow-y-auto border-t border-slate-200 bg-white px-5 pb-6 pt-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-[15px] font-medium transition ${
                  active === l.id ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {l.label}
                <ArrowRight size={16} className="text-slate-400" />
              </Link>
            ))}
            <div className="grid gap-2.5 pt-3">
              <a
                href={appUrl}
                tabIndex={open ? 0 : -1}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <LogIn size={16} /> Hotelier Login
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30"
              >
                Book a Demo <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
