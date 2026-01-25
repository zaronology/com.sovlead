import { MDXRemote } from "next-mdx-remote/rsc";

interface InsightsArticleProps {
  source: string;
}

export default function InsightsArticle({ source }: InsightsArticleProps) {
  return (
    <article className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* 'prose-sovereign' is the custom utility we defined in the CSS file.
         It handles all the MDX nesting automatically.
      */}
      <div className="px-6 py-10 md:px-12 md:py-16 prose-sovereign lg:text-lg">
        <MDXRemote source={source} />
      </div>
    </article>
  );
}
