import { Quote } from 'lucide-react';

// TODO: replace these placeholders with real, approved customer quotes before launch.
const items = [
  { quote: 'Replace with a real quote about commission savings.', name: 'Owner name', place: 'Property, City' },
  { quote: 'Replace with a real quote about setup speed.', name: 'General Manager name', place: 'Property, City' },
  { quote: 'Replace with a real quote about guest payments.', name: 'Owner name', place: 'Property, City' },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">Loved by independent hoteliers</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <Quote className="text-brand-500" size={22} />
            <blockquote className="mt-3 text-slate-700">{t.quote}</blockquote>
            <figcaption className="mt-4 text-sm"><b>{t.name}</b><br /><span className="text-slate-500">{t.place}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
