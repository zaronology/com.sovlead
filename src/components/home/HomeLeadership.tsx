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

export default function HomeLeadership() {
  const listItems = [
    "Make the impossible possible",
    "Solve everyone else's problems",
    "Control chaos you didn't create",
    "Keep every fire from spreading",
  ];

  return (
    <section className="relative w-full overflow-hidden py-6 xl:py-8 2xl:py-10">
      {/* --- FIXED SPLIT BACKGROUND --- */}
      {/* This div is the key. It handles the colors so the content doesn't have to. */}
      <div className="absolute inset-0 z-0 flex flex-col lg:flex-row">
        {/* White on top (mobile) / White on left (1025px+) */}
        <div className="w-full h-1/2 lg:h-full lg:w-1/2 bg-white"></div>
        {/* Blue on bottom (mobile) / Blue on right (1025px+) */}
        <div className="w-full h-1/2 lg:h-full lg:w-1/2 bg-blue"></div>
      </div>

      <div className="relative z-10 mx-auto container px-6">
        <div className="flex flex-col lg:flex-row w-full">
          {/* --- LEFT COLUMN --- */}
          {/* We removed the bg-white and negative margins because the background div above handles it now */}
          <div className="w-full lg:w-1/2 py-16 lg:py-24 flex items-center lg:pr-16">
            <div className="w-full">
              <h3 className="font-serif text-blue leading-tight font-medium">
                <span className="lg:block text-4xl xl:text-4xl/loose 2xl:text-5xl/tight">
                  Leadership taught you
                </span>
                <span className="text-rust lg:block text-4xl xl:text-5xl/tight 2xl:text-6xl/tight">
                  to absorb pressure
                </span>
                <span className="lg:block text-4xl xl:text-4xl/loose 2xl:text-5xl/tight">
                  but never taught you how
                </span>
                <span className="lg:block">
                  <span className="text-rust text-4xl xl:text-5xl/tight 2xl:text-6xl/tight">
                    to release it.
                  </span>
                </span>
              </h3>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          {/* We removed the bg-blue and negative margins here too. This keeps your container padding pure. */}
          <div className="w-full lg:w-1/2 py-16 lg:py-24 flex flex-col justify-center lg:items-end lg:pl-16">
            <div className="w-full lg:max-w-[540px] flex flex-col gap-6">
              <h3 className="text-white text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
                You're Expected To:
              </h3>

              <div className="flex flex-col gap-6">
                {listItems.map((text, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-rust">
                      <SharpCheck className="h-6 w-6 lg:h-7 lg:w-7" />
                    </div>

                    <h4 className="font-sans text-lg 2xl:text-2xl font-semibold text-white/90 leading-snug">
                      {text}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
