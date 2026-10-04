import ToolPage from "@/components/page/ToolPage";
import RoiCalculator from "@/components/tools/RoiCalculator";
import { TOOLS } from "@/content/tools";
import { pageMetadata } from "@/lib/seo";

const tool = TOOLS.find((t) => t.slug === "ai-automation-roi-calculator")!;

export const metadata = pageMetadata({
  title: `${tool.name} (Free)`,
  description: tool.metaDescription,
  path: "/tools/ai-automation-roi-calculator",
  kicker: "Free Tool",
});

export default function Page() {
  return (
    <ToolPage slug="ai-automation-roi-calculator">
      <RoiCalculator />
    </ToolPage>
  );
}
