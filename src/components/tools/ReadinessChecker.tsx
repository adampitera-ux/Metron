"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Check } from "@/app/api/ai-readiness/route";
import { Button } from "../ui";

type Result = { url: string; score: number; checks: Check[] };

const STATUS = {
  pass: { label: "Pass", cls: "bg-[#e8f7ee] text-[#137a3a]", dot: "bg-[#16a34a]" },
  warn: { label: "Improve", cls: "bg-[#fff4e5] text-[#a65a00]", dot: "bg-orange" },
  fail: { label: "Missing", cls: "bg-[#fdeceb] text-[#b42318]", dot: "bg-[#dc2626]" },
} as const;

function ScoreRing({ score }: { score: number }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const color = score >= 80 ? "#16a34a" : score >= 55 ? "#e87811" : "#dc2626";
  return (
    <div className="relative grid size-[140px] place-items-center">
      <svg width="140" height="140" viewBox="0 0 140 140" className="-rotate-90">
        <circle cx="70" cy="70" r={r} stroke="#eee" strokeWidth="10" fill="none" />
        <motion.circle
          cx="70"
          cy="70"
          r={r}
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - score / 100) }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="absolute text-center">
        <p className="h-display text-[40px] leading-none text-fg">{score}</p>
        <p className="mt-1 text-xs text-muted-2">out of 100</p>
      </div>
    </div>
  );
}

export default function ReadinessChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  async function run(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/ai-readiness", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  const groups = result ? [...new Set(result.checks.map((c) => c.group))] : [];
  const fixes = result?.checks.filter((c) => c.status !== "pass").sort((a, b) => b.weight - a.weight) ?? [];

  return (
    <div className="rounded-[26px] border border-line bg-white p-6 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.35)] md:p-10">
      <form onSubmit={run} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="url" className="sr-only">
          Website URL
        </label>
        <input
          id="url"
          type="text"
          inputMode="url"
          autoComplete="url"
          required
          placeholder="yourbusiness.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="h-[54px] flex-1 rounded-[10px] border border-line-strong bg-[#fafafa] px-4 text-lg text-fg outline-none transition focus:border-orange focus:bg-white focus:ring-4 focus:ring-orange/15"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-orange h-[54px] rounded-[10px] px-7 text-base font-medium disabled:opacity-70"
        >
          {loading ? "Checking…" : "Check My Site"}
        </button>
      </form>
      <p className="mt-3 text-sm text-muted-2">
        We fetch your page, robots.txt, sitemap and llms.txt and check the signals engines use. Nothing is stored.
      </p>

      <AnimatePresence mode="wait">
        {loading && (
          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-10 space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="h-12 rounded-xl bg-[#f3f3f3]"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.12 }}
              />
            ))}
          </motion.div>
        )}

        {error && (
          <motion.p key="error" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-8 rounded-xl border border-[#f5c2c0] bg-[#fdeceb] p-4 text-[#b42318]">
            {error}
          </motion.p>
        )}

        {result && (
          <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-10">
            <div className="flex flex-col items-center gap-6 rounded-[20px] bg-[#fafafa] p-6 sm:flex-row sm:items-center">
              <ScoreRing score={result.score} />
              <div className="text-center sm:text-left">
                <p className="h-display text-[24px] text-fg">
                  {result.score >= 80 ? "Strong foundation" : result.score >= 55 ? "Good start — room to improve" : "Significant gaps to fix"}
                </p>
                <p className="mt-2 break-all text-[15px] text-muted-2">{result.url}</p>
                <p className="mt-3 text-[15.5px] leading-[1.6] text-muted">
                  {fixes.length ? `${fixes.length} item${fixes.length > 1 ? "s" : ""} to improve. Highest-impact fixes are listed first.` : "Everything we check is in place. Nice work."}
                </p>
              </div>
            </div>

            {groups.map((g) => (
              <div key={g} className="mt-8">
                <p className="font-mono text-xs tracking-[0.12em] text-orange uppercase">{g}</p>
                <ul className="mt-3 divide-y divide-line rounded-[16px] border border-line">
                  {result.checks
                    .filter((c) => c.group === g)
                    .map((c, i) => (
                      <motion.li
                        key={c.id}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * i }}
                        className="flex flex-col gap-2 p-4 sm:flex-row sm:items-start sm:gap-4"
                      >
                        <span className={`inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${STATUS[c.status].cls}`}>
                          <span className={`size-1.5 rounded-full ${STATUS[c.status].dot}`} />
                          {STATUS[c.status].label}
                        </span>
                        <div>
                          <p className="font-medium text-fg">{c.label}</p>
                          <p className="mt-1 text-[14.5px] leading-[1.55] break-words text-muted">{c.detail}</p>
                        </div>
                      </motion.li>
                    ))}
                </ul>
              </div>
            ))}

            <div className="mt-10 flex flex-col items-center gap-4 rounded-[20px] border border-orange/25 bg-[#fff8f1] p-6 text-center sm:flex-row sm:text-left">
              <p className="flex-1 text-[16px] leading-[1.55] text-fg-2">
                Want us to fix these for you? Our AEO & GEO service handles schema, content structure, crawler access and more.
              </p>
              <Button href="/services/aeo-geo" variant="orange">
                See AEO & GEO
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
