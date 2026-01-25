import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

interface AuthoritySystemsArticleProps {
  source: string; // The raw markdown string from your API
}

export default function AuthoritySystemsArticle({
  source,
}: AuthoritySystemsArticleProps) {
  return (
    <article className="mx-auto container px-6 py-12 md:py-20">
      <div className="mx-auto max-w-3xl prose prose-blue prose-lg md:prose-xl prose-headings:font-serif prose-headings:font-medium prose-a:text-rust hover:prose-a:text-rust/80">
        <MDXRemote source={source} />
      </div>
    </article>
  );
}
