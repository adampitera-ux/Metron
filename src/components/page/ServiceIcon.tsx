import type { Service } from "@/content/types";

const P = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ServiceIcon({ name, className = "size-5" }: { name: Service["icon"]; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...P}>
      {name === "bolt" && <path d="M13 2 4 14h7l-1 8 9-12h-7z" />}
      {name === "chat" && (
        <>
          <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
          <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
        </>
      )}
      {name === "flow" && (
        <>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <path d="M6.5 10v3.5a2 2 0 0 0 2 2H14" />
          <path d="M17.5 14v-3.5a2 2 0 0 0-2-2H10" />
        </>
      )}
      {name === "globe" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
        </>
      )}
      {name === "search" && (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
          <path d="M11 8v6M8 11h6" />
        </>
      )}
      {name === "star" && (
        <path d="M12 3.5 14.6 9l5.9.6-4.4 4 1.3 5.9L12 16.5l-5.4 3 1.3-5.9-4.4-4 5.9-.6z" />
      )}
    </svg>
  );
}
