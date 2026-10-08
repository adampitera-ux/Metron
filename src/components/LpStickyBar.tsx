import { SITE } from "@/lib/site";

/** Mobile-only bottom bar on ad landing pages: call or jump to the form. */
export default function LpStickyBar({ cta }: { cta: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="flex gap-2.5">
        {SITE.phone && (
          <a href={`tel:${SITE.phoneE164}`} className="btn-dark flex h-12 flex-1 items-center justify-center rounded-[10px] text-[15px]">
            Call Now
          </a>
        )}
        <a href="#get-started" className="btn-orange flex h-12 flex-[2] items-center justify-center rounded-[10px] text-[15px] font-medium">
          {cta}
        </a>
      </div>
    </div>
  );
}
