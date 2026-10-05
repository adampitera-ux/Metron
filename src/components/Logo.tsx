/** Metron wordmark: a geometric "M" mark plus the name set in Satoshi. */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 28 28" aria-hidden className="size-7 shrink-0">
        <defs>
          <linearGradient id="metron-mark" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFA14A" />
            <stop offset="1" stopColor="#E36D00" />
          </linearGradient>
        </defs>
        <rect width="28" height="28" rx="8" fill="url(#metron-mark)" />
        <path d="M7.5 19.5v-11l6.5 7 6.5-7v11" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="h-display text-[21px] font-bold leading-none tracking-[-0.02em] text-fg">Metron</span>
    </span>
  );
}
