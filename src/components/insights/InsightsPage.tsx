import { getPostBySlug } from "@/lib/api-insights";
import { notFound } from "next/navigation";
import InsightsBreadcrumbs from "./InsightsBreadcrumbs";
import InsightsArticle from "./InsightsArticle";

interface InsightsPageProps {
  slug: string;
}

export default async function InsightsPage({ slug }: InsightsPageProps) {
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
    <section className="w-full pb-20">
      <div className="container mx-auto px-6">
        <div className="pt-6 mb-6">
          <InsightsBreadcrumbs page={true} title={post.title} />
        </div>

        <div className="flex justify-center">
          <div className="w-full">
            <InsightsArticle source={post.content} />
          </div>
        </div>
      </div>
    </section>
  );
}
