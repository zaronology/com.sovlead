import React from "react";

const SharpCheck = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M2 12.5L8.5 19L22 4"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

export default function HomeThisIsForYou() {
  const triedItems = [
    "One-size-fits-all frameworks that don't fit your reality",
    "Coaches who tell you what to do but never show you how",
    "Staying deep in everything so nothing surprises you",
    "Taking on more work, hoping resilience will carry you through",
    "Reorganizing structure, hoping it will fix the culture",
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* --- SPLIT BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 flex flex-col lg:flex-row">
        {/* Blue on top/left */}
        <div className="w-full h-1/2 lg:h-full lg:w-1/2 bg-blue"></div>
        {/* White on bottom/right */}
        <div className="w-full h-1/2 lg:h-full lg:w-1/2 bg-white"></div>
      </div>

      <div className="relative z-10 mx-auto container px-6">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-full lg:w-1/2 py-16 lg:py-24 flex items-center lg:pr-16">
            <div className="w-full flex flex-col gap-8">
              <h2 className="font-authority text-gold text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                This Is For You <span className="text-white">If...</span>
              </h2>

              <div className="flex flex-col gap-8">
                <div className="border-l-4 border-rust pl-6">
                  <h3 className="font-serif text-2xl lg:text-3xl/relaxed font-bold text-white mb-2">
                    You're high-functioning
                    <span className="text-gold italic block">
                      but disoriented.
                    </span>
                  </h3>
                  <p className="font-sans text-lg text-white/70">
                    You're capable. Smart. Effective.
                    <b className="block">But you're quietly lost.</b>
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="font-authority text-gold font-semibold uppercase tracking-widest text-md">
                    You've already tried:
                  </p>
                  {triedItems.map((text, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="mt-1.5 flex-shrink-0 text-white/20">
                        <SharpCheck className="h-5 w-5 text-rust" />
                      </div>
                      <h4 className="flex-1 font-sans text-lg lg:text-xl font-medium text-white/60 leading-snug">
                        {text}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE SHIFT & THE SYSTEM (WHITE) */}
          <div className="w-full lg:w-1/2 py-16 lg:py-24 flex flex-col justify-center lg:items-end lg:pl-16">
            <div className="w-full  flex flex-col gap-8 text-blue">
              <div className="space-y-4">
                <p className="font-serif text-xl lg:text-2xl leading-relaxed">
                  These are <b className="text-rust">reactions</b>, not
                  structure.
                </p>
                <p className="font-sans text-lg lg:text-xl text-blue/80">
                  You're optimizing performance while your{" "}
                  <b className="text-rust">operating system crashes</b> in the
                  background.
                </p>
                <p className="font-sans text-lg lg:text-xl text-blue/80">
                  You're patching symptoms while the foundation cracks.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6 space-y-6">
                <h3 className="font-authority text-2xl lg:text-3xl font-bold uppercase tracking-tight">
                  What's Different:
                </h3>
                <p className="font-sans text-lg lg:text-xl text-blue/90">
                  I don't give you another framework to execute.{" "}
                  <b>I show you where you are</b> so you can orient yourself.
                </p>
                <p className="font-sans text-lg lg:text-xl text-blue/90">
                  I teach you how to <b>assess your baseline</b>, interrupt
                  patterns, and build structure that <b>hold under pressure.</b>
                </p>
              </div>

              <div className="mt-4 pt-8 border-t border-blue/20">
                <p className="font-authority text-3xl text-blue leading-tight mb-4">
                  You stop absorbing chaos.
                </p>
                <p className="font-authority text-3xl text-blue leading-tight mb-4">
                  You stop running from the storm.
                </p>
                <p className="font-authority text-3xl text-blue leading-tight">
                  <span className="text-rust font-bold text-4xl lg:text-5xl underline decoration-gold underline-offset-8">
                    You become the buffalo.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
