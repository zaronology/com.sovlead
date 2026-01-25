import React from "react";
import Link from "next/link";

const Error404: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Element (Optional subtle texture or gradient) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Section Label */}
          <span className="inline-block text-rust font-bold uppercase tracking-[0.2em] text-xs mb-4">
            Path Interrupted
          </span>

          {/* Main Title */}
          <h1 className="text-7xl md:text-9xl font-extrabold text-gray-900 tracking-tighter mb-6">
            404
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 font-serif italic mb-10 leading-relaxed">
            "You once were lost. But now, you're found."
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gray-900 font-authority tracking-widest uppercase hover:bg-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Return Home
              <svg
                className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1"
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404;
