import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const ArrowUpRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const ArrowDownRight = (p: P) => (
  <svg {...base(p)}>
    <path d="m7 7 10 10" />
    <path d="M17 8v9H8" />
  </svg>
);

export const ChevronDown = (p: P) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const CheckCircle = (p: P) => (
  <svg {...base(p)}>
    <path d="M21.8 10A10 10 0 1 1 17 3.34" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

export const Brain = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 5a3 3 0 1 0-6 .13 4 4 0 0 0-2.52 5.77 4 4 0 0 0 .55 6.59A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 6 .13 4 4 0 0 1 2.52 5.77 4 4 0 0 1-.55 6.59A4 4 0 1 1 12 18Z" />
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    <path d="M17.6 6.5a3 3 0 0 0 .4-1.38" />
    <path d="M6 5.13a3 3 0 0 0 .4 1.37" />
    <path d="M3.48 10.9a4 4 0 0 1 .58-.4" />
    <path d="M19.94 10.5a4 4 0 0 1 .58.4" />
    <path d="M6 18a4 4 0 0 1-1.97-.52" />
    <path d="M19.97 17.48A4 4 0 0 1 18 18" />
  </svg>
);

export const ThumbsUp = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 10v12" />
    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
  </svg>
);

export const Team = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="6.5" r="2.5" />
    <circle cx="5" cy="8" r="2" />
    <circle cx="19" cy="8" r="2" />
    <path d="M8 19v-2.5a4 4 0 0 1 8 0V19" />
    <path d="M2 18v-1.5A3 3 0 0 1 5 13.5c.7 0 1.4.24 1.93.66" />
    <path d="M22 18v-1.5a3 3 0 0 0-3-3c-.7 0-1.4.24-1.93.66" />
  </svg>
);

export const Star = (p: P) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...p}>
    <path
      fill="currentColor"
      d="M11.05 2.93c.3-.92 1.6-.92 1.9 0l1.62 4.97a1 1 0 0 0 .95.69h5.23c.97 0 1.37 1.24.59 1.81l-4.23 3.07a1 1 0 0 0-.36 1.12l1.61 4.97c.3.92-.75 1.69-1.54 1.12l-4.23-3.07a1 1 0 0 0-1.18 0l-4.23 3.07c-.78.57-1.84-.2-1.54-1.12l1.62-4.97a1 1 0 0 0-.37-1.12L2.66 10.4c-.78-.57-.38-1.81.59-1.81h5.23a1 1 0 0 0 .95-.69z"
    />
  </svg>
);

export const Sparkle = (p: P) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...p}>
    <path
      fill="currentColor"
      d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0Z"
    />
  </svg>
);

export const Menu = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 8h16" />
    <path d="M4 16h16" />
  </svg>
);

export const Close = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </svg>
);

export const Phone = (p: P) => (
  <svg {...base(p)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const Mail = (p: P) => (
  <svg {...base(p)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);
