import { Metadata } from "next";
import { getAllPosts } from "@/lib/api-authority-systems";
// Import your UI components here, e.g., a Grid or List component for the articles
// import ASGrid from "@/components/authoritySystems/ASGrid";

// 1. (Optional) SEO Metadata
export const metadata: Metadata = {
  title: "Authority Systems | Sovereign Leadership",
  description: "Leadership systems for people responsible for outcomes.",
};

// 2. THIS IS THE CRITICAL PART: Must be 'export default' and return JSX
export default async function AuthoritySystemsIndexPage() {
  // Fetch all posts to display in the grid/list
  const allPosts = getAllPosts([
    "title",
    "slug",
    "excerpt",
    "date",
    "subsystem",
  ]);

  return (
    <main className="mx-auto container px-6 py-16 md:py-24">
      <div className="max-w-4xl">
        <h1 className="font-authority text-4xl md:text-6xl font-bold text-blue mb-6">
          Authority Systems
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Select an article below to learn the systems and protocols.
        </p>
      </div>

      {/* Render your list of posts here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPosts.map((post) => (
          <div
            key={post.slug}
            className="border border-gray-200 p-6 rounded-lg"
          >
            <h2 className="text-xl font-bold text-blue mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <a
              href={`/authority-systems/${post.slug}`}
              className="text-rust font-bold hover:underline"
            >
              Read System &rarr;
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
