import { Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';

// TODO: replace these placeholders with real, approved customer quotes before launch.
const items = [
  { quote: 'Replace with a real quote about commission savings.', name: 'Owner name', place: 'Property, City' },
  { quote: 'Replace with a real quote about setup speed.', name: 'General Manager name', place: 'Property, City' },
  { quote: 'Replace with a real quote about guest payments.', name: 'Owner name', place: 'Property, City' },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-amber-300/15 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading title="Loved by independent hoteliers" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure
              key={i}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-[0_24px_50px_-24px_rgba(79,70,229,0.45)]"
            >
              <span
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 via-violet-500 to-amber-400 transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.8)]">
                <Quote size={20} />
              </span>
              <blockquote className="mt-5 flex-1 leading-relaxed text-slate-700">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5 text-sm">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-brand-600 font-bold text-white"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <span>
                  <b className="block text-slate-900">{t.name}</b>
                  <span className="text-slate-500">{t.place}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
