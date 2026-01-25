export const dynamic = "force-static";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts, type Post } from "@/lib/api-insights";
import InsightsList from "@/components/insights/InsightsList";
import InsightsHero from "@/components/insights/InsightsHero";

export const metadata = buildMetadata({
  title: "Insights for Technical Executives and Leaders",
  description:
    "Frameworks and observations on authority, systems, and execution in complex environments.",
  canonicalPath: "/insights",
});

const Page = () => {
  const rawPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "excerpt",
    "coverImage",
    "content",
  ]);

  const allPosts = rawPosts;

  return (
    <>
      <InsightsHero />
      <InsightsList posts={allPosts} />
    </>
  );
};

export default Page;
