import { getPostBySlug } from "@/lib/api-insights";
import { notFound } from "next/navigation";
import InsightsBreadcrumbs from "./InsightsBreadcrumbs";
import InsightsArticle from "./InsightsArticle";

interface InsightsPageProps {
  slug: string;
}

export default async function InsightsPage({ slug }: InsightsPageProps) {
  // LOGGING: Useful for debugging build-time issues
  console.log(`Processing Post Content: ${slug}`);

  const post = getPostBySlug(slug, [
    "title",
    "date",
    "slug",
    "content",
    "author",
    "excerpt",
  ]);

  if (!post) {
    console.error(`FAILED to find post for slug: ${slug}`);
    notFound();
  }

  return (
    <section className="w-full bg-gray-50/50 pb-20">
      <div className="container mx-auto px-6">
        {/* Breadcrumbs Row */}
        <div className="pt-6 mb-6">
          <InsightsBreadcrumbs page={true} title={post.title} />
        </div>

        {/* Article Content Row */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {/* The actual MDX/Markdown content parser */}
            <InsightsArticle source={post.content} />
          </div>
        </div>
      </div>
    </section>
  );
}
