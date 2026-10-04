import ToolPage from "@/components/page/ToolPage";
import ReadinessChecker from "@/components/tools/ReadinessChecker";
import { TOOLS } from "@/content/tools";
import { pageMetadata } from "@/lib/seo";

const tool = TOOLS.find((t) => t.slug === "ai-search-readiness-checker")!;

export const metadata = pageMetadata({
  title: `${tool.name} (Free)`,
  description: tool.metaDescription,
  path: "/tools/ai-search-readiness-checker",
  kicker: "Free Tool",
});

export default function Page() {
  return (
    <ToolPage slug="ai-search-readiness-checker">
      <ReadinessChecker />
    </ToolPage>
  );
}
