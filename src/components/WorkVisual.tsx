/**
 * Clean, product-style screens used in the Works section in place of stock photos.
 * Each one is a simplified view of a system we build (calls, follow-up, back office).
 */

const Card = ({ title, meta, children }: { title: string; meta: string; children: React.ReactNode }) => (
  <div className="absolute inset-[7%] flex flex-col rounded-xl border border-black/[0.06] bg-white shadow-[0_24px_50px_-28px_rgba(0,0,0,0.35)]">
    <div className="flex items-center justify-between border-b border-black/[0.06] px-[4.5%] py-[3%]">
      <span className="text-[clamp(10px,1.4vw,13px)] font-semibold text-fg">{title}</span>
      <span className="rounded-full bg-[#ecfdf3] px-2 py-0.5 text-[clamp(8px,1.1vw,11px)] font-medium text-[#067647]">{meta}</span>
    </div>
    <div className="flex-1 overflow-hidden px-[4.5%] py-[3%]">{children}</div>
  </div>
);

const Dot = ({ c }: { c: string }) => <span className="size-1.5 shrink-0 rounded-full" style={{ background: c }} />;
const t = "text-[clamp(8.5px,1.15vw,12px)]";

function Calls() {
  const rows = [
    ["Mike R.", "Furnace not heating", "Booked · Tue 9am", "#12b76a"],
    ["Dana L.", "AC tune-up quote", "Booked · Wed 1pm", "#12b76a"],
    ["(718) 555-0142", "Missed call · 6:42pm", "Texted back", "#e87811"],
  ];
  return (
    <Card title="AI Receptionist · Example" meta="0 missed">
      <ul className="divide-y divide-black/[0.05]">
        {rows.map(([n, d, s, c]) => (
          <li key={n} className={`flex items-center gap-3 py-[2.2%] ${t}`}>
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#f2f2f2] text-[9px] font-semibold text-fg-2">{/[a-z]/i.test(n[0]) ? n[0] : "?"}</span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-medium text-fg">{n}</span>
              <span className="block truncate text-muted-2">{d}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-fg-2">
              <Dot c={c} />
              {s}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function Pipeline() {
  const cols = [
    ["New", ["Kitchen remodel", "Roof inspection"]],
    ["Contacted", ["Deck repair", "Gutter install"]],
    ["Quoted", ["Siding job"]],
    ["Won", ["Bath remodel", "Patio"]],
  ] as const;
  return (
    <Card title="Lead Follow-Up · Example" meta="Replies < 60s">
      <div className="grid h-full grid-cols-4 gap-2">
        {cols.map(([h, items], i) => (
          <div key={h} className="rounded-lg bg-[#f7f7f7] p-1.5">
            <p className={`mb-1.5 px-0.5 font-semibold text-fg-2 ${t}`}>{h}</p>
            <div className="space-y-1.5">
              {items.map((x) => (
                <div key={x} className={`rounded-md border border-black/[0.05] bg-white px-1.5 py-1.5 ${t} text-fg`}>
                  <span className="block truncate">{x}</span>
                  <span className={`mt-1 block h-1 rounded-full ${i === 3 ? "bg-[#12b76a]" : "bg-orange/70"}`} style={{ width: `${40 + i * 18}%` }} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function BackOffice() {
  const bars = [38, 52, 46, 64, 58, 76, 88];
  return (
    <Card title="Back Office · Example" meta="Automated">
      <div className="grid h-full grid-cols-[1fr_1.3fr] gap-[5%]">
        <div className="flex flex-col justify-center gap-[10%]">
          {[
            ["Invoices sent", "214"],
            ["Paid on time", "92%"],
            ["Hours saved", "61"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className={`text-muted-2 ${t}`}>{k}</p>
              <p className="h-display text-[clamp(16px,2.6vw,26px)] leading-tight text-fg">{v}</p>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-[6%] border-b border-black/[0.06] pb-1">
          {bars.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-[4px]"
              style={{ height: `${h}%`, background: i === bars.length - 1 ? "linear-gradient(#ffa14a,#e36d00)" : "#ececec" }}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}

export default function WorkVisual({ kind }: { kind: "calls" | "pipeline" | "backoffice" }) {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_0%,#fff6ee_0%,#f4f4f4_70%)]">
      {kind === "calls" ? <Calls /> : kind === "pipeline" ? <Pipeline /> : <BackOffice />}
    </div>
  );
}
