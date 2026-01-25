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

export default function HomeThenNow() {
  const thenListItems = [
    "One-size-fits-all frameworks that don't fit your reality",
    "Coaches who tell you what to do but never show you how",
    "Staying deep in everything so nothing surprises you",
    "Taking on more work hoping resilience will carry you through",
    "Reorganizing the team hoping structure will fix the culture",
  ];

  const nowListItems = [
    "Decision systems that make choices clear under pressure",
    "Boundary systems that enforce limits automatically",
    "Translation systems that make technical reality undeniable",
    "Accountability systems that keep ownership where it belongs",
    "Authority that comes from alignment and structure, not force",
  ];

  return (
    <section className="relative w-full bg-white-soft py-20 lg:py-32 overflow-hidden">
      <div className="relative z-10 mx-auto container px-6">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-authority capitalize text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-blue leading-tight border-b-2 pb-2 border-rust inline-block">
            Why Nothing Has Worked
          </h2>
        </div>
        {/* --- SIDE-BY-SIDE GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* LEFT COLUMN: The Old Reality */}
          <div className="flex justify-center lg:justify-end">
            {/* By setting a specific width (w-full) and a hard max-width, 
        we ensure the blue lane is identical to the gold lane. */}
            <div className="w-full max-w-[500px] flex flex-col gap-8">
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-blue border-l-4 border-rust pl-4">
                What You've Tried
              </h3>
              <div className="flex flex-col gap-6">
                {thenListItems.map((text, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1.5 flex-shrink-0 text-blue/30">
                      <SharpCheck className="h-5 w-5" />
                    </div>
                    {/* 'flex-1' forces the text to take up all remaining space in the 500px box */}
                    <h4 className="flex-1 font-sans text-lg lg:text-xl font-medium text-blue/60 leading-snug">
                      {text}
                    </h4>
                  </div>
                ))}
              </div>
              <div>
                <p className="font-sans text-lg lg:text-xl font-medium text-blue/60 leading-snug">
                  These are reactions, not systems. You're patching symptoms
                  while the foundation cracks.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The New Authority */}
          <div className="flex justify-center lg:justify-start">
            {/* Hard-coded to the exact same [500px] to prevent the 384px collapse */}
            <div className="w-full max-w-[500px] flex flex-col gap-8">
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-blue border-l-4 border-gold pl-4">
                What Actually Works
              </h3>
              <div className="flex flex-col gap-6">
                {nowListItems.map((text, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1.5 flex-shrink-0 text-rust">
                      <SharpCheck className="h-5 w-5 lg:h-6 lg:w-6" />
                    </div>
                    {/* 'flex-1' here ensures the 'Now' text pushes out to the same 500px boundary */}
                    <h4 className="flex-1 font-sans text-lg lg:text-xl font-medium text-blue/60 leading-snug">
                      {text}
                    </h4>
                  </div>
                ))}
              </div>
              <div>
                <p className="font-sans text-lg lg:text-xl font-medium text-blue/60 leading-snug">
                  You stop absorbing chaos. You stop running from the storm. You
                  become the buffalo.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
