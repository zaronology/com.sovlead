import { MDXRemote } from "next-mdx-remote/rsc";

interface InsightsArticleProps {
  source: string;
}

export default function InsightsArticle({ source }: InsightsArticleProps) {
  return (
    <article className="w-full bg-white-soft rounded-2xl shadow-sm overflow-hidden">
      <div className="p-6 md:p-12 prose-sovereign lg:text-lg">
        <MDXRemote source={source} />
      </div>
    </article>
  );
}
