import React from "react";

export default function HomeTrifecta() {
  const traps = [
    {
      title: "Leaders collapse inward.",
      description:
        "It's lonely at the top. There's no equal to think out loud with. So it all stays inside.",
      impact: "The mind gets loud. The room gets quiet.",
    },
    {
      title: "Competent people over-function.",
      description:
        "They take on more. They solve faster. They carry what isn't theirs because it's easier than watching things get messy.",
      impact: "You trade your capacity for everyone else's comfort.",
    },
    {
      title: "Humans default to old patterns.",
      description:
        "This isn't a leadership flaw. It's a human trait. Under stress, you reach for what's familiar rather than what's necessary.",
      impact:
        "You're solving today's problems with yesterday's survival skills.",
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
          <p className="font-serif text-2xl lg:text-4xl text-white italic">
            "Pressure doesn't reveal your{" "}
            <span className="text-gold font-bold">potential</span>,{" "}
            <br className="hidden md:block" />
            it reveals your{" "}
            <span className="text-gold font-bold">structure</span>
            ."
          </p>
        </div>
      </div>
    </section>
  );
}
