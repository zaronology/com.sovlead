import React from "react";
import { AuthorityQuote } from "../SubComponents";

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

export default function HomeHow() {
  const coreItems = [
    {
      title: "Connection",
      content: "Relate to others without losing yourself",
    },
    { title: "Orientation", content: "See what's real, not what you assume" },
    {
      title: "Receptivity",
      content: "Process input without shutdown or overwhelm",
    },
    { title: "Expression", content: "Act without suppressing or reacting" },
  ];

  const listItems = [
    "You make clear decisions under pressure.",
    "You set boundaries that hold.",
    "You translate reality in ways people can't ignore.",
    "You discharge pressure instead of absorbing it.",
  ];

  return (
    <section className="w-full bg-white">
      <AuthorityQuote
        lead="You've been optimizing"
        leadEmp="performance"
        close="while your"
        closeEmp="foundation cracks"
        bgColor="blue"
        leadColor="white"
        empColor="gold"
        breakLine="xts"
      ></AuthorityQuote>

      <div className="relative w-full overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-32">
        {/* BACKGROUND LAYER (Fixed Split) */}
        <div className="absolute inset-0 z-0 flex flex-col lg:flex-row">
          <div className="w-full h-1/2 lg:h-full lg:w-1/2 bg-white"></div>
          <div className="w-full h-1/2 lg:h-full lg:w-1/2 bg-white"></div>
        </div>

        <div className="relative z-10 mx-auto container px-6">
          <div className="flex flex-col lg:flex-row w-full items-stretch">
            {/* LEFT COLUMN */}
            <div className="w-full lg:w-1/2 py-12 lg:py-16 lg:pr-16 flex flex-col justify-center">
              <div className="w-full text-blue">
                <h2 className="font-authority mb-4 text-2xl uppercase tracking-widest text-blue/70">
                  The Blueprint
                </h2>
                <h3 className="font-authority text-3xl lg:text-4xl font-bold mb-6">
                  <span className="text-rust">CORE</span> maps your foundation.
                </h3>
                <p className="mb-8 text-lg lg:text-xl leading-relaxed">
                  <b>CORE</b> is how you find your center under pressure. Four
                  densities that determine how you interact with yourself:
                </p>

                <div className="flex flex-col gap-6">
                  {coreItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2 border-l-2 border-gold/30 pl-4"
                    >
                      <h4 className="font-sans text-xl font-bold uppercase tracking-tight">
                        {item.title}:
                      </h4>
                      <span className="text-lg text-blue/80">
                        {item.content}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center py-8 lg:py-0">
              <div className="w-full h-px lg:w-0.5 lg:h-3/4 bg-rust"></div>
            </div>

            <div className="w-full lg:w-1/2 py-6 lg:py-16 lg:pl-16 flex flex-col justify-center">
              <div className="w-full text-blue pt-6">
                <p className="font-serif text-2xl lg:text-2xl/relaxed text-blue italic mb-10 leading-snug">
                  When disoriented, at least one of these is compromised. When{" "}
                  <span className="text-rust font-bold">
                    oriented in all four
                  </span>
                  , everything shifts:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                  {listItems.map((text, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <SharpCheck className="mt-1 h-5 w-5 text-rust flex-shrink-0" />
                      <span className="font-sans text-lg font-semibold text-blue leading-snug">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-blue/10 pt-8">
                  <p className="font-sans text-lg lg:text-xl text-blue/80 leading-relaxed">
                    I teach you how to assess where you are, interrupt patterns,
                    and build structure that <b>holds under pressure.</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
