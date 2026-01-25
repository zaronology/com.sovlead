import React from "react";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";
import daveImg from "@/assets/images/dave-two-pocket-sm.png";

export default function Newsletter() {
  const content = {
    title: "JOIN THE VOYAGE",
    text: "Stop reacting to the noise. Start architecting your response. Get weekly protocols on stabilizing your internal OS, reading the room, and leading with absolute authority. No motivational fluff. Just the raw source code for high-performance leadership.",
  };

  return (
    /* Removed overflow-hidden to allow the image to "pop" out of the container */
    <section className="relative w-full bg-[#0a1628] mt-20 md:mt-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[400px]">
          {/* Image Column */}
          <div className="relative h-full min-h-[300px] md:min-h-[500px]">
            {/* Positioned absolute and bottom-0 to sit on the floor of the section.
              The negative top margin (-mt-24 or top-[-100px]) pulls him above the section line.
            */}
            <div className="absolute bottom-0 left-0 w-full h-[120%] md:h-[140%] z-20">
              <Image
                src={daveImg}
                alt="Dave Zaron - Sovereign Leadership"
                fill
                className="object-contain object-bottom grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="text-white py-16 md:py-24 space-y-8 relative z-10">
            <div className="space-y-4">
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-sm">
                Operational Intelligence
              </span>
              <h2 className="font-authority text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                {content.title}
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed font-sans max-w-xl">
                {content.text}
              </p>
            </div>

            <div className="w-full max-w-md pt-4">
              <NewsletterForm />
            </div>

            <p className="text-xs text-white/40 italic">
              No noise. No fluff. Just the protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
