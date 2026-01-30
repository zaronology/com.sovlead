import React from "react";
import { SectionHeadline, YinYang } from "../SubComponents";

export default function HomeFinalCTA() {
  return (
    <section className="relative w-full bg-white-soft py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto container px-6 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeadline classname="section-headline foundry-headline">
            The Foundry
          </SectionHeadline>

          {/* SUBTITLE: THE INFLECTION POINT SEGUE */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-rust font-medium">
              You're at an inflection point.
            </h3>
          </div>

          {/* CONTENT COLUMN: Left-Justified Prose */}
          <div className="flex flex-col gap-10 font-sans text-lg md:text-xl lg:text-2xl leading-relaxed text-blue/90 text-left">
            <div className="flex flex-col gap-12">
              <div className="border-l-4 border-rust pl-8">
                <p>
                  Keep optimizing around a{" "}
                  <b className="text-rust">cracked foundation</b>, working
                  harder, carrying more, and hoping something eventually shifts.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-8">
                <p>
                  Or learn to{" "}
                  <b className="text-gold">see clearly and orient.</b> This is
                  where that happens.
                </p>
              </div>
            </div>

            <p className="mt-4">
              You'll work directly with me to find your baseline, interrupt the
              patterns keeping you stuck, and build the internal structure that
              will <b className="text-blue">hold under pressure.</b>
            </p>

            {/* EXPANDED DECISION BOX */}
            <div className="mt-8 bg-white rounded-sm shadow-xl border border-blue/5 overflow-hidden">
              <div className="p-8 lg:p-12 pb-6">
                <p className="font-authority font-bold text-rust uppercase tracking-widest mb-10 text-sm lg:text-base">
                  Where do you want to be six months from now?
                </p>
                <YinYang
                  data={[
                    { yin: "Still buried in fires?", yang: "The Reaction" },
                    { yin: "Oriented and leading?", yang: "The Authority" },
                  ]}
                  connector=""
                ></YinYang>
              </div>

              {/* INTEGRATED PAYOFF FOOTER */}
              <div className="bg-blue/5 p-8 lg:p-10 border-t border-blue/5 text-center">
                <p className="font-authority text-blue text-xl lg:text-3xl leading-snug">
                  Discharging{" "}
                  <span className="text-rust font-bold">pressure</span> instead
                  of absorbing it. <br />
                  Leading with{" "}
                  <span className="text-gold font-bold">clarity</span> and
                  confidence.
                </p>
              </div>
            </div>

            {/* FINAL ANCHOR CTA */}
            <div className="mt-12 flex justify-center">
              <a
                href="/the-foundry/application"
                className="group relative inline-flex items-center justify-center px-12 py-6 font-authority text-2xl font-bold text-white transition-all duration-200 bg-rust hover:bg-rust/90 rounded-sm w-full md:w-auto uppercase tracking-[0.2em]"
              >
                Enter The Foundry
                <span className="ml-4 transition-transform group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
