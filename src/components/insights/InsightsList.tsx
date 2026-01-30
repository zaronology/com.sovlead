"use client";

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import InsightsBreadcrumbs from "./InsightsBreadcrumbs";
import daveThink from "@/assets/images/dave-think-insights.png";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
}

interface InsightsListProps {
  posts: Post[];
}

const InsightsList: React.FC<InsightsListProps> = ({ posts }) => {
  const safePosts = Array.isArray(posts) ? posts : [];

  return (
    <section className="relative w-full min-h-screen pb-20">
      <div className="container mx-auto px-6 pt-10 pb-100">
        <div className="mb-10">
          <InsightsBreadcrumbs page={false} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {safePosts.map((post) => (
            <article
              key={post.slug}
              className="group relative flex flex-col h-full bg-white-soft rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {post.coverImage && (
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                <time className="text-xs font-bold text-rust uppercase tracking-widest mb-3">
                  {post.date}
                </time>

                <h2 className="text-2xl font-bold text-blue mb-4 tracking-tight leading-tight">
                  <Link
                    href={`/insights/${post.slug}`}
                    className="hover:text-rust transition-colors outline-none after:absolute after:inset-0"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 flex items-center text-sm font-bold text-gray-900 group-hover:text-rust transition-colors">
                  Read Insight
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </article>
          ))}

          {safePosts.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-500 text-lg italic">
                No insights published yet.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-0 right-0 w-1/3 max-w-md pointer-events-none opacity-75 mix-blend-multiply">
        <Image
          src={daveThink}
          alt="Reflecting on leadership"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default InsightsList;
