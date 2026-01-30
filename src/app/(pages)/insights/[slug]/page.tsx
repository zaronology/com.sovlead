import { buildMetadataAsync } from "@/lib/seo";
import { getAllPosts, getPostBySlug } from "@/lib/api-insights";
import { permanentRedirect, notFound } from "next/navigation";
import InsightsPage from "@/components/insights/InsightsPage";
import Newsletter from "@/components/global/Newsletter";
import InsightsPageHero from "@/components/insights/InsightsPageHero";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  return buildMetadataAsync(async () => {
    const { slug } = await params;
    const post = await getPostBySlug(slug, ["title", "excerpt", "mdesc"]);
    if (!post) return {};

    return {
      title: `${post.title}`,
      description: post.mdesc || post.excerpt,
      canonicalPath: `/insights/${slug}`,
    };
  });
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  // Fetch data needed for the Hero and Redirect check
  const postData = getPostBySlug(slug, [
    "title",
    "excerpt",
    "author",
    "date",
    "redirect",
  ]);

  if (!postData) {
    notFound();
  }

  if (postData.redirect) {
    permanentRedirect(postData.redirect as unknown as string);
  }

  return (
    <>
      <InsightsPageHero
        title={postData.title}
        exerpt={postData.excerpt}
        citation={`${postData.author} | ${postData.date}`}
      />
      <InsightsPage slug={slug} />
      <Newsletter />
    </>
  );
};

export default Page;
