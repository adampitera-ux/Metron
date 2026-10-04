import ToolPage from "@/components/page/ToolPage";
import MissedCallCalculator from "@/components/tools/MissedCallCalculator";
import { TOOLS } from "@/content/tools";
import { pageMetadata } from "@/lib/seo";

const tool = TOOLS.find((t) => t.slug === "missed-call-revenue-calculator")!;

export const metadata = pageMetadata({
  title: `${tool.name} (Free)`,
  description: tool.metaDescription,
  path: "/tools/missed-call-revenue-calculator",
  kicker: "Free Tool",
});

export default function Page() {
  return (
    <ToolPage slug="missed-call-revenue-calculator">
      <MissedCallCalculator />
    </ToolPage>
  );
}
