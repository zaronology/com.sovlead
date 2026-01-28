import React from "react";
import { SectionHeadline } from "../SubComponents";

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
  "You carry more, they carry less.",
  "They wait for you to have the answer",
  "You lose yourself in the work",
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
    <section className="w-full">
      <div className="w-full bg-white-soft py-16 md:py-24 lg:pt-30 lg:pb-60">
        <div className="mx-auto container px-6">
          <SectionHeadline>Why Does This Happen?</SectionHeadline>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 pb-12 pt-0 lg:py-0 lg:pr-16 border-b-2 border-rust lg:border-b-0 lg:border-r-2">
              <h3 className="font-serif text-2xl font-semibold text-rust md:text-3xl lg:text-4xl mb-4 capitalize">
                burden of competence
              </h3>
              <p className="font-sans text-base text-blue/90 md:text-lg xl:text-xl leading-relaxed mb-8 max-w-1xl">
                The more capable you are, the more others rely on you, 
                narrowing your focus to immediate problems while you lose sight
                of the full picture.
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
            <div className="w-full lg:w-1/2 pt-12 pb-0 lg:py-0 lg:pl-16">
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-rust mb-4 capitalize">
                The Burden Escalates
              </h3>
              <p className="font-sans text-base text-blue md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed mb-8">
                You're caught between needing results yesterday and teams buried
                in fires. You become the bridge, absorbing pressure from both
                sides.
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
      </div>
      <div className="mx-auto container pb-16 lg:pb-30 ">
        <div className="bg-white-soft lg:max-w-7/12 text-blue mx-auto py-10 px-6 md:px-10 text-lg lg:text-xl xl:text-2xl lg:-mt-40 shadow-sm">
          <p className="mb-6">
            Something inside won't let you quit, even when the cost is your
            health, relationships, integrity, and time.
          </p>
          <p className="mb-6">
            You're still checking the boxes, building momentum. But you've lost
            track of where it's taking you.
          </p>
          <p>
            You don't know how to turn it off. So you just keep going,
            convincing yourself it's worth the cost while it slowly consumes
            you.
          </p>
        </div>
      </div>
    </section>
  );
}
