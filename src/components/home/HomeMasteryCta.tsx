import React from "react";
import Image from "next/image";
import theFoundryLogo from "@/assets/images/fd-logo-horizontial-w.png";
export default function FoundrySections() {
  return (
    <section className="relative w-full bg-white-soft py-20 lg:py-32 overflow-hidden">
      {/* THE GLOBAL CONTAINER: Ensuring horizontal consistency */}
      <div className="relative z-10 mx-auto container px-6 ">
        <div className="flex flex-col w-full lg:flex-row gap-30">
          {/* LEFT SIDE: Headline & Lead */}
          <div className="w-full lg:w-6/12 text-blue ">
            <div className="border-b-4 pb-6 mb-8 border-f-rust">
              <h2 className="font-authority text-8xl font-bold">
                The
                <br />
                Foundry
              </h2>
            </div>
            <p className="text-xl md:text-2xl font-serif italic leading-tight mb-4">
              This work doesn't happen in theory.
            </p>
            <p className="text-xl md:text-2xl font-serif  leading-tight mb-4">
              <b className="text-rust italic">Orientation</b>&nbsp;under
              pressure &nbsp;isn't something you learn by reading about it.
            </p>
            <p className="text-xl md:text-2xl mb-4">
              <b className="text-rust italic">Authority</b> isn't built by
              collecting frameworks or optimizing your calendar.
            </p>
            <p className="text-xl md:text-2xl">
              It's forged in the arena. Inside the decisions you carry, the
              boundaries you hold, and the weight that comes with staying when
              others walk away.
            </p>
          </div>

          {/* RIGHT SIDE: Details & CTA */}
          <div className="w-full lg:w-1/2 flex flex-col items-start pt-10">
            <div className="flex flex-col gap-6 text-blue/90 text-lg md:text-xl lg:text-2xl font-sans leading-relaxed mb-12">
              <p>The Foundry is where you learn to orient.</p>

              <p>
                Where pressure becomes signal instead of noise. Where waste heat
                converts to useful work. Where you stop running from the storm
                and walk into it.
              </p>
              <p>
                The Foundry teaches you where you are, so you can choose how to
                move.
              </p>
              <p>
                You'll learn to assess your baseline across four densities.
                Interrupt the patterns keeping you stuck. Build decision systems
                that hold under pressure.
              </p>
              <p>This isn’t for everyone. And it doesn’t need to be.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a
            href="#apply"
            className="group relative inline-flex items-center justify-center px-10 py-5 font-authority text-xl font-bold text-pure transition-all duration-200 bg-rust hover:bg-rust/90 rounded-sm w-full md:w-auto text-center uppercase tracking-[0.2em]"
          >
            Explore The Foundry
            <span className="ml-3 transition-transform group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
