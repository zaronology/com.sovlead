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
    <section className="relative w-full bg-blue mt-20 md:mt-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-full min-h-[300px] md:min-h-[500px] hidden lg:block">
            <div className="absolute bottom-0 left-0 w-full h-[120%] md:h-[114%] z-20">
              <Image
                src={daveImg}
                alt="Dave Zaron - Sovereign Leadership"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

          <div className="text-white py-10 space-y-3 relative z-10">
            <div className="space-y-1">
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
