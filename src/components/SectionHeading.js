// Shared heading for every home-page section.
// The short gradient bar repeats the 3px strip at the top of the Navbar.
export default function SectionHeading({
  title,
  subtitle,
  dark = false,
  align = 'center',
  className = '',
}) {
  const center = align === 'center';
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
      <h2
        className={`text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 via-violet-500 to-amber-400 ${
          center ? 'mx-auto' : ''
        }`}
        aria-hidden="true"
      />
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
