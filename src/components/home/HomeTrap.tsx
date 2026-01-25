import React from "react";

export default function TheTrap() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* --- UNIFORM BACKGROUND LAYER --- */}
      {/* flex-col handles the 100% bleed while stacked (lg and below) */}
      {/* lg:flex-row handles the 50/50 split side-by-side (1025px+) */}
      <div className="absolute inset-0 z-0 flex flex-col lg:flex-row">
        {/* Blue on top (mobile/stacked) / Blue on left (desktop) */}
        <div className="w-full h-auto flex-grow lg:h-full lg:w-1/2 bg-blue"></div>
        {/* White on bottom (mobile/stacked) / White on right (desktop) */}
        <div className="w-full h-auto flex-grow lg:h-full lg:w-1/2 bg-white"></div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 mx-auto container px-6">
        <div className="flex flex-col lg:flex-row w-full">
          {/* --- LEFT COLUMN --- */}
          {/* Padding and alignment now match the HomeLeadership component exactly */}
          <div className="w-full lg:w-1/2 py-16 lg:py-24 flex items-center justify-center lg:justify-start">
            <h3 className="font-authority text-gold text-6xl lg:text-9xl leading-tight font-bold text-center lg:text-left">
              The <span className="lg:block">Trap</span>
            </h3>
          </div>

          {/* --- RIGHT COLUMN --- */}
          {/* Padded to match the right-side list spacing in the other section (lg:pl-16) */}
          <div className="w-full lg:w-1/2 py-16 lg:py-24 lg:pl-16 font-sans text-base md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-blue text-left">
            <p className="mb-4">
              You're firefighting because chaos has <b>changed who you are</b>{" "}
              and <b>who you're becoming</b>.
            </p>
            <p className="mb-4">
              Something inside won't let you quit, even when the <b>cost</b> is
              your <b>health</b>, <b>relationships</b>, <b>integrity</b>,
              and&nbsp;
              <b>time</b>.
            </p>

            <p className="mb-4">
              You tell yourself <b>"this is just what it takes."</b> From the
              outside, things might look fine.&nbsp;
              <b>You're checking the boxes, building momentum.</b>
            </p>

            <p className="mb-4">
              <b>You don't know how to turn it off.</b> So you just keep going,
              convincing yourself that it is worth the cost while it slowly
              consumes you.
            </p>
            <p className="font-serif text-xl md:text-2xl font-medium mt-4 text-center lg:text-left text-rust">
              I see you.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
