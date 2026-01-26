import React from "react";
import Image from "next/image";
import theFoundryLogo from "@/assets/images/fd-logo-horizontial-w.png";
export default function FoundrySections() {
  return (
    <section className="relative w-full bg-blue py-20 lg:py-32 overflow-hidden">
      {/* THE GLOBAL CONTAINER: Ensuring horizontal consistency */}
      <div className="relative z-10 mx-auto container px-6">
        <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-24">
          {/* LEFT SIDE: Headline & Lead */}
          <div className="w-full lg:w-5/12">
            <div className="border-b-4 pb-6 mb-8 border-f-rust">
              <Image
                src={theFoundryLogo}
                alt="The Foundry Logo"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <p className="text-pure text-2xl md:text-3xl font-serif italic leading-tight mb-6">
              This work doesn’t happen in theory.
            </p>
            <p className="text-pure text-2xl md:text-3xl font-serif italic leading-tight">
              <span className="text-gold">Self-return</span> isn’t something you
              learn by reading about it. Authority isn’t built by collecting
              frameworks.
            </p>
          </div>

          {/* RIGHT SIDE: Details & CTA */}
          <div className="w-full lg:w-7/12 flex flex-col items-start">
            <div className="flex flex-col gap-8 text-white/90 text-lg md:text-xl lg:text-2xl font-sans leading-relaxed mb-12">
              <p>
                It’s forged under pressure, inside the decisions you carry, the
                boundaries you’re expected to hold, and the weight that comes
                with staying when others walk away.
              </p>
              <p>
                The Foundry is the arena where sovereign leaders are forged.
              </p>

              <p>
                It’s where pressure is no longer something you absorb, but
                something you learn to work within, without losing yourself in
                the process. The Foundry exists to turn lived experience into
                authority, chaos into structure, and weight into clarity.
              </p>
              <p>This isn’t for everyone. And it doesn’t need to be.</p>
            </div>

            {/* BUTTON: Styled as requested (Anchor Tag) */}
            <a
              href="#apply"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-authority text-xl font-bold text-white transition-all duration-200 bg-rust hover:bg-rust/90 rounded-sm w-full md:w-auto text-center uppercase tracking-[0.2em]"
            >
              Explore The Foundry
              <span className="ml-3 transition-transform group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
