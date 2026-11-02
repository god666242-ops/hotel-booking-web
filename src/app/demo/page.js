import { WIDGET_DEMO_URL } from '@/lib/config';

export const metadata = { title: 'Live Demo – PureBook' };

export default function DemoPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-3xl font-bold">Live booking engine demo</h1>
      <p className="mt-2 text-slate-600">Pick dates, choose a room and walk through checkout. All data here is demo data.</p>
      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-300 shadow-card">
        <iframe src={WIDGET_DEMO_URL} title="PureBook live demo" className="h-[80vh] min-h-[600px] w-full border-0" allow="payment" />
      </div>
    </section>
  );
}
