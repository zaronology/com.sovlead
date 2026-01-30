import React from "react";
import { SectionHeadline } from "../SubComponents";

export default function TheMirage() {
  return (
    <section className="relative w-full bg-white-soft py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto container px-6 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline: Centered with the rust border weight matching the others */}
          <SectionHeadline>You're Disoriented</SectionHeadline>
          <div className="flex flex-col gap-8 font-sans text-lg md:text-xl lg:text-2xl leading-relaxed text-blue/90 text-left">
            <p>Chaos doesn't stop you.</p>
            <p>
              <span className="italic text-rust font-medium">
                It blinds you.
              </span>
            </p>

            <p className="border-l-4 border-gold pl-8 py-2 bg-blue/[0.02]">
              You're moving,{" "}
              <b className="text-rust">
                working hard, putting in the hours, making decisions,
              </b>{" "}
              but you've lost your direction.
            </p>

            <p>
              In a storm, visibility drops. You can't see where you're going. So
              you push harder, move faster, trying every direction because
              movement feels like progress.
            </p>
            <p>
              But it's not. <b className="text-rust">It's waste heat.</b>
              &nbsp;Energy burning for nothing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
