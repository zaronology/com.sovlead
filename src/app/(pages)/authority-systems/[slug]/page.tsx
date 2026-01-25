import { Metadata } from "next";
import { redirect } from "next/navigation"; // 1. Import redirect instead of notFound
import { buildMetadataAsync } from "@/lib/seo";
import { getAllPosts, getPostBySlug } from "@/lib/api-authority-systems";
import ASArticle from "@/components/authoritySystems/ASArticle";
import ASBreadcrumb from "@/components/authoritySystems/ASBreadcrumbs";
import ASArticleHero from "@/components/authoritySystems/ASArticleHero";

// Next.js 15+ Async Params Type
type PageParams = {
  params: Promise<{ slug: string }>;
};

// 1. Generate Static Routes
export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Generate SEO Metadata
export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  return buildMetadataAsync(async () => {
    const { slug } = await params;
    const post = await getPostBySlug(slug, ["title", "excerpt", "mdesc"]);

    if (!post) return {};

    return {
      title: `Authority Systems | ${post.title}`,
      description: post.mdesc || post.excerpt,
      canonicalPath: `/authority-systems/${slug}`,
    };
  });
}

// 3. Main Page Component
export default async function Page({ params }: PageParams) {
  const { slug } = await params;

  const postData = getPostBySlug(slug, [
    "title",
    "excerpt",
    "author",
    "subsystem",
    "content",
  ]);

  // 2. The Redirect Fix: Send them back to the main hub if the URL is broken
  if (!postData) {
    redirect("/authority-systems");
  }

  return (
    <>
      <ASArticleHero
        title={postData.title}
        excerpt={postData.excerpt}
        subsystem={postData.subsystem}
      />
      <ASBreadcrumb title={postData.title} />
      <ASArticle source={postData.content} />
    </>
  );
}
