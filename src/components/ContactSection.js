import { Clock, ShieldCheck, Globe } from 'lucide-react';
import ContactForm from './ContactForm';
import SectionHeading from './SectionHeading';

const perks = [
  { icon: Clock, label: '24-hour setup' },
  { icon: ShieldCheck, label: 'No credit card required' },
  { icon: Globe, label: 'Works with any website' },
];

export default function ContactSection({ id = 'contact', heading = true }) {
  return (
    <section id={id} className="relative mx-auto max-w-3xl px-5 py-20">
      <div className="pointer-events-none absolute -right-10 top-10 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-10 bottom-10 h-56 w-56 rounded-full bg-amber-300/15 blur-3xl" aria-hidden="true" />

      {heading && (
        <SectionHeading
          className="relative mb-10"
          title="Ready to reclaim your hotel revenue? Let’s get you set up."
          subtitle="Our technical team will configure your inventory and embed the engine on your property’s website within 24 hours."
        />
      )}

      <ul className="relative mb-6 flex flex-wrap items-center justify-center gap-2">
        {perks.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm"
          >
            <Icon size={13} className="text-brand-600" /> {label}
          </li>
        ))}
      </ul>

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_60px_-30px_rgba(55,48,163,0.4)]">
        <div className="h-[3px] w-full bg-gradient-to-r from-brand-500 via-violet-500 to-amber-400" aria-hidden="true" />
        <div className="p-6 sm:p-9">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
