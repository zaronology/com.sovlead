"use client";

import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
  title?: string;
}

const AuthoritySystemsBreadcrumb: React.FC<BreadcrumbProps> = ({ title }) => {
  return (
    <section className="w-full bg-gray-50 border-b border-gray-100">
      {/* Matches the exact site grid lock */}
      <div className="mx-auto container px-6 py-4">
        <nav aria-label="breadcrumb">
          <ol className="flex items-center text-sm font-medium text-gray-500">
            <li>
              <Link href="/" className="hover:text-rust transition-colors">
                Home
              </Link>
            </li>
            
            <li className="flex items-center">
              <span className="mx-2 text-gray-300">/</span>
              <Link href="/authority-systems" className="hover:text-rust transition-colors">
                Authority Systems
              </Link>
            </li>

            {title && (
              <li className="flex items-center" aria-current="page">
                <span className="mx-2 text-gray-300">/</span>
                <span className="text-gray-900 font-semibold truncate max-w-[200px] sm:max-w-md">
                  {title}
                </span>
              </li>
            )}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default AuthoritySystemsBreadcrumb;