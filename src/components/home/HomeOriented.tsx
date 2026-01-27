import React from "react";

export default function HomeOriented() {
  return (
    <section className="relative w-full bg-white-soft py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto container px-6 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-12 lg:mb-16">
            <h2 className="font-authority capitalize text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-blue leading-tight border-b-2 pb-2 border-rust inline-block">
              When You're Oriented
            </h2>
          </div>

          <div className="flex flex-col gap-10 font-sans text-lg md:text-xl lg:text-2xl leading-relaxed text-blue/90 text-left">
            <p className="font-serif text-2xl lg:text-3xl italic text-blue">
              When orientation is restored, effort drops and authority holds
              under pressure. You:
            </p>

            <div className="flex flex-col gap-12">
              <div className="border-l-4 border-gold pl-8">
                <h4 className="font-authority text-blue font-bold text-2xl lg:text-3xl mb-2">
                  Stop reacting to every fire.
                </h4>
                <p>
                  You know what matters now and what can wait. Decisions come
                  from <b className="text-gold">clarity</b>, not panic.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-8">
                <h4 className="font-authority text-blue font-bold text-2xl lg:text-3xl mb-2">
                  Get back to center in minutes, not days.
                </h4>
                <p>
                  Week-long retreats not required. You can&nbsp;
                  <b className="text-gold">return to yourself</b>, even in the
                  chaos.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-8">
                <h4 className="font-authority text-blue font-bold text-2xl lg:text-3xl mb-2">
                  Stop performing what you don't want to be.
                </h4>
                <p>
                  You lead from <b className="text-gold">who you are</b>, not
                  from something you’re trying to prove.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-8">
                <h4 className="font-authority text-blue font-bold text-2xl lg:text-3xl mb-2">
                  Discharge pressure instead of absorbing it.
                </h4>
                <p>
                  Your energy converts to{" "}
                  <b className="text-rust">useful work</b> instead of burning
                  off as waste heat.
                </p>
              </div>
            </div>
            <div className="text-center py-10">
              <p className="font-serif capitalize text-2xl lg:text-4xl text-blue italic">
                "Orientation doesn’t make the&nbsp;
                <span className="text-rust font-bold">storm disappear</span>
                , <br className="hidden md:block" />
                It changes how you&nbsp;
                <span className="text-rust font-bold">move inside it</span>
                ."
              </p>
            </div>

            <div className="bg-white-soft p-8 lg:p-12 text-blue rounded-sm shadow-md border border-blue/10">
              <p className="font-authority font-medium text-rust uppercase tracking-widest mb-8 text-sm lg:text-base">
                Orientation is the difference between:
              </p>
              <ul className="flex flex-col gap-6 font-serif text-2xl lg:text-4xl italic">
                {/* Item 1 */}
                <li className="flex flex-col gap-2">
                  <div className="flex justify-between items-baseline">
                    <span>Focus</span>{" "}
                    <span className="text-rust font-sans font-bold not-italic text-lg lg:text-2xl uppercase">
                      and burnout
                    </span>
                  </div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-blue/60 via-blue/20 to-rust/80" />
                </li>

                {/* Item 2 */}
                <li className="flex flex-col gap-2">
                  <div className="flex justify-between items-baseline">
                    <span>Authority</span>{" "}
                    <span className="text-rust font-sans font-bold not-italic text-lg lg:text-2xl uppercase">
                      and reactivity
                    </span>
                  </div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-blue/60 via-blue/20 to-rust/80" />
                </li>

                {/* Item 3 */}
                <li className="flex flex-col gap-2">
                  <div className="flex justify-between items-baseline">
                    <span>Leadership</span>{" "}
                    <span className="text-rust font-sans font-bold not-italic text-lg lg:text-2xl uppercase">
                      and firefighting
                    </span>
                  </div>
                  {/* Final line optional, or keep for closure */}
                  <div className="h-[1px] w-full bg-gradient-to-r from-blue/60 via-blue/20 to-rust/80" />
                </li>
              </ul>
            </div>

            <p className="text-center font-authority text-3xl lg:text-5xl text-blue mt-8 leading-tight">
              You stop being{" "}
              <span className="text-rust underline decoration-gold underline-offset-8">
                owned
              </span>{" "}
              by success. <br />
              <span className="font-bold">And start owning it.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
