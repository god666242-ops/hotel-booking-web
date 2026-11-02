import { KeyRound } from 'lucide-react';

export default function Logo({ light = false }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white">
        <KeyRound size={18} />
      </span>
      <span className={`text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-brand-700'}`}>PureBook</span>
      <span className={`hidden rounded-full px-2 py-0.5 text-[10px] font-semibold sm:inline ${light ? 'bg-white/10 text-slate-200' : 'bg-brand-50 text-brand-600'}`}>
        purebook.in
      </span>
    </span>
  );
}
