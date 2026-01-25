import React from "react";

const SharpLine = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M3 10H21" /* Starts at X:3, Y:12 and draws a Horizontal line to X:21 */
      stroke="currentColor"
      strokeWidth="2.5"
      // Default linecap is "butt" which creates perfectly sharp 90-degree ends
    />
  </svg>
);

const burdenList = [
  "They stop solving things themselves",
  "They wait for you to decide",
  "You become the bottleneck",
  "Your expertise becomes your prison",
];
const outcomeList = [
  "So you say yes when you should say no",
  "You abdicate instead of delegate",
  "You can't plan when priorities keep shifting",
  "You work longer hours but nothing changes",
];

export default function WhyItHappens() {
  return (
    <section className="w-full bg-white-soft py-16 md:py-24 lg:py-40">
      <div className="mx-auto container px-6">
        {/* CENTER HEADLINE */}
        <div className="mb-16 md:mb-14 flex justify-center">
          <h2 className="font-authority text-center text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight tracking-tight text-blue max-w-4xl border-b pb-2 border-f-rust">
            Why Does This Happen?
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 py-12 lg:py-0 lg:pr-16 border-b-2 border-rust lg:border-b-0 lg:border-r-2">
            <h3 className="font-serif text-3xl  font-medium text-rust md:text-3xl lg:text-4xl xl:text-5xl  mb-4 capitalize">
              burden of competence
            </h3>
            <p className="font-sans text-base text-blue/90 md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed mb-8 max-w-1xl">
              The more capable you are, the more everyone turns to you. The more
              they rely on you, the less responsibility they take.
            </p>

            <ul className="flex flex-col gap-5">
              {burdenList.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-rust">
                    <SharpLine className="h-6 w-6" />
                  </div>
                  <span className="font-sans text-lg font-medium text-blue md:text-lg xl:text-xl 2xl:text-2xl leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT BOX: The outcome is on you */}
          <div className="w-full lg:w-1/2 py-12 lg:py-0 lg:pl-16">
            <h3 className="font-serif text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-rust mb-4 capitalize">
              outcome is on you
            </h3>
            <p className="font-sans text-base text-blue md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed mb-8">
              You're caught between people who need results yesterday and teams
              buried in fires they can't seem to put out.
            </p>

            <ul className="flex flex-col gap-5">
              {outcomeList.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-rust">
                    <SharpLine className="h-6 w-6" />
                  </div>
                  <span className="font-sans text-lg font-medium text-blue md:text-lg xl:text-xl 2xl:text-2xl leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
