"use client";

import React from "react";
import Link from "next/link";

interface InsightsBreadcrumbProps {
  page?: boolean;
  title?: string;
}

const InsightsBreadcrumb: React.FC<InsightsBreadcrumbProps> = ({
  page,
  title,
}) => {
  return (
    <section className="px-6 py-4 bg-white shadow-sm border border-gray-100 rounded-xl mb-6">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm font-medium">
          {/* Home Link */}
          <li>
            <Link
              href="/"
              className="text-gray-400 hover:text-gold transition-colors duration-200"
            >
              Home
            </Link>
          </li>

          {/* Separator */}
          <li className="text-gray-300">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>

          {/* Insights Link */}
          <li>
            <Link
              href="/insights"
              className={`transition-colors duration-200 ${
                page
                  ? "text-gray-400 hover:text-gold"
                  : "text-gray-900 font-bold"
              }`}
            >
              Insights
            </Link>
          </li>

          {/* Active Article/Page Title */}
          {page && title && (
            <>
              <li className="text-gray-300">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
              <li
                className="text-gray-900 font-bold truncate max-w-[200px] md:max-w-none"
                aria-current="page"
              >
                {title}
              </li>
            </>
          )}
        </ol>
      </nav>
    </section>
  );
};

export default InsightsBreadcrumb;
