import React from "react";

export default function TheMirage() {
  return (
    /* Standardized Section Wrapper: White background */
    <section className="relative w-full bg-white-soft py-20 lg:py-32 overflow-hidden">
      {/* THE GLOBAL CONTAINER: This ensures horizontal consistency with the rest of the site */}
      <div className="mx-auto container px-6 relative z-10">
        {/* WRAPPER: 
            - 'mx-auto' centers the entire block of content.
            - 'text-center' centers the headline and the container of the prose.
            - 'max-w-4xl' ensures the column isn't too wide for the eye to track.
        */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline: Centered with the rust border weight matching the others */}
          <div className="mb-12 lg:mb-16">
            <h2 className="font-authority capitalize text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-blue leading-tight border-b-2 pb-2 border-rust inline-block">
              Chasing the Mirage
            </h2>
          </div>

          {/* Content Wrapper: 
              - 'text-left' keeps the prose easy to read.
              - 'mx-auto' keeps this left-aligned block centered under the title.
          */}
          <div className="flex flex-col gap-8 font-sans text-lg md:text-xl lg:text-2xl leading-relaxed text-blue/90 text-left">
            <p>
              The world drowns us in information. We're absorbing{" "}
              <b className="text-blue">3x more data yearly</b> than a decade
              ago.
            </p>

            <p>
              Shiny new tools. Perfect frameworks.{" "}
              <span className="italic text-gold font-medium">
                "This will fix everything."
              </span>
            </p>

            <p className="border-l-4 border-gold pl-8 py-2 bg-blue/[0.02]">
              <b className="text-blue">It's a mirage.</b> The harder you chase,
              the more it steals: your <b className="text-rust">time</b>, your{" "}
              <b className="text-rust">passion</b>, and your{" "}
              <b className="text-rust">integrity</b>.
            </p>

            <p>
              <b className="text-blue">Nature proves it.</b> Fish chase shiny
              lures. Moths spiral into flames.{" "}
              <span className="font-bold">Entropy wins every time.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
