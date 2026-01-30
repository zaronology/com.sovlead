import React from "react";
import { AuthorityQuote } from "../SubComponents";

export default function FoundryTrifecta() {
  const traps = [
    {
      title: "Disorientation + Decision = Firefighting",
      description:
        "Without orientation, signal and noise blend. Everything feels critical, and decisions spark downstream fires.",
      impact: "Signal blends with noise when disoriented.",
    },
    {
      title: "Orientation is foundational",
      description:
        "You take on more. Solve faster. Carry what isn't yours because it's easier than watching things get messy.",
      impact: "Foundation determines if your structure stands or falls.",
    },
    {
      title: "Clarity requires deceleration",
      description:
        "You're optimizing for speed when what you need is the capacity to pause, see clearly, and choose your direction before moving.",
      impact: "Speed without stopping compounds drift.",
    },
  ];

  return (
    <section className="w-full overflow-hidden">
      <div className="relative w-full bg-white-soft py-20 lg:py-32">
        <div className="mx-auto container px-6 relative z-10">
          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {traps.map((trap, index) => (
              <div key={index} className="flex flex-col gap-6">
                {/* Gold "Spine" Headline */}
                <div className="border-l-4 border-gold pl-6">
                  <h3 className="tri-title">{trap.title}</h3>
                </div>

                {/* Description & Impact */}
                <div className="flex flex-col gap-4">
                  <p className="font-sans text-base lg:text-xl text-blue/70 leading-relaxed">
                    {trap.description}
                  </p>
                  <p className="font-sans text-base lg:text-lg font-bold text-rust leading-relaxed">
                    {trap.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AuthorityQuote
        lead="Pressure doesn't reveal your"
        leadEmp="potential"
        close="it reveals your"
        closeEmp="foundation"
        breakLine="xts"
        padx="px-2 xts:px-0"
      ></AuthorityQuote>
    </section>
  );
}
