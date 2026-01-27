import React from "react";

export default function HomeTrifecta() {
  const traps = [
    {
      title: "Leaders collapse inward",
      description:
        "It's lonely at the top. There's no equal to think out loud with. When pressure rises, clarity collapses inward.",
      impact: "The mind gets loud. The room gets quiet.",
    },
    {
      title: "Competence becomes a trap",
      description:
        "You take on more. Solve faster. Carry what isn't yours because it's easier than watching things get messy.",
      impact: "You trade your capacity for everyone else's comfort.",
    },
    {
      title: "Patterns resurface under stress",
      description:
        "Old behaviors return under stress. You reach for what's familiar rather than what's necessary.",
      impact:
        "You're solving tomorrow's problems with yesterday's survival skills.",
    },
  ];

  return (
    <section className="w-full overflow-hidden">
      <div className="relative w-full bg-white-soft py-20 lg:py-32">
        <div className="mx-auto container px-6 relative z-10">
          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {traps.map((trap, index) => (
              <div key={index} className="flex flex-col gap-6">
                {/* Gold "Spine" Headline */}
                <div className="border-l-4 border-gold pl-6">
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-blue leading-tight italic">
                    {trap.title}
                  </h3>
                </div>

                {/* Description & Impact */}
                <div className="flex flex-col gap-4">
                  <p className="font-sans text-lg lg:text-xl text-blue/70 leading-relaxed">
                    {trap.description}
                  </p>
                  <p className="font-sans text-lg lg:text-xl font-bold text-rust leading-relaxed">
                    {trap.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full bg-blue py-20">
        <div className="mx-auto container border-t border-blue/10 text-center">
          <p className="font-serif capitalize text-2xl lg:text-4xl text-white italic">
            "Pressure doesn't reveal your{" "}
            <span className="text-gold font-bold">potential</span>,{" "}
            <br className="hidden md:block" />
            it reveals your{" "}
            <span className="text-gold font-bold">foundation</span>
            ."
          </p>
        </div>
      </div>
    </section>
  );
}
