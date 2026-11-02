import ContactForm from './ContactForm';

export default function ContactSection({ id = 'contact', heading = true }) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-5 py-20">
      {heading && (
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to reclaim your hotel revenue? Let’s get you set up.</h2>
          <p className="mt-3 text-slate-600">Our technical team will configure your inventory and embed the engine on your property’s website within 24 hours.</p>
        </div>
      )}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <ContactForm />
      </div>
    </section>
  );
}
