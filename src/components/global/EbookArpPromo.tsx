"use client";

import React from "react";
import Image from "next/image";
import EbookModalContainer from "./EbookModalContainer";

// Assuming these images exist in your project structure
import ebookImg from "@/assets/images/The-Authority-Reset-Protocol-Tablet.webp";
// import ebookMobileImg from "@/assets/images/authority-reset-protocol-ipad-forward.webp"; // Uncomment if using picture tag or conditional rendering

const BookPromo: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* --- Left Column: Text & Button --- */}
          {/* md:w-2/3 takes up equivalent of md={8} in Bootstrap */}
          <div className="w-full md:w-2/3 flex flex-col items-start">
            <span className="text-sm md:text-base font-bold uppercase tracking-widest text-blue-400 mb-3">
              Free Guide
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                Authority
              </span>{" "}
              Isn’t a Trait. It’s a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                Protocol
              </span>
            </h2>

            <div className="space-y-5 text-gray-300 text-base lg:text-lg max-w-2xl mb-10">
              <p>
                <strong className="text-yellow-400 font-bold">
                  The Authority Reset:
                </strong>{" "}
                A 5-step protocol to stop reactive panic, isolate signal from
                noise, and re-establish command when pressure spikes.
              </p>
              <p>
                <strong className="text-yellow-400 font-bold">
                  The Translation System:
                </strong>{" "}
                A practical framework for converting technical reality into
                business trade-offs executives can’t ignore.
              </p>
              <p>
                <strong className="text-yellow-400 font-bold">
                  Executive Command Under Load:
                </strong>{" "}
                Clear decision scripts to hold boundaries, force accountability,
                and execute without carrying the story or the chaos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <EbookModalContainer btn_text="Download The Ebook" btn_href="#" />
              <div className="flex items-center text-sm text-gray-500 font-medium">
                <span>PDF Format</span>
                <span className="mx-2">•</span>
                <span>11 Pages</span>
              </div>
            </div>
          </div>

          {/* --- Right Column: Book Image --- */}
          {/* md:w-1/3 takes up equivalent of md={4} in Bootstrap */}
          {/* Automatically stacks below on mobile due to natural DOM order */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[320px] md:max-w-full lg:max-w-[400px]">
              <Image
                src={ebookImg}
                alt="Dave Zaron - I help tech executives under constant pressure build the internal capacity to hold their position."
                className="w-full h-auto drop-shadow-2xl"
                priority // Priority set since this is likely a high-impact above-the-fold or key CTA element
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookPromo;
