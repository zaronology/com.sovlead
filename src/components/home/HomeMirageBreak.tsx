import Image from "next/image";
import stormImg from "@/assets/images/the-storm.jpg";

export default function HomeMirageBreak() {
  return (
    <section className="relative w-full bg-gradient-to-r from-black via-30% to-blue/100 overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="relative w-full lg:w-1/2 aspect-square lg:aspect-auto lg:min-h-[700px]">
          <Image
            src={stormImg}
            alt="Dramatic storm clouds"
            fill
            priority
            className="object-cover object-bottom"
          />
        </div>

        {/* --- RIGHT SIDE: CONTENT LAYER --- */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="py-16 lg:py-24 px-6 lg:pl-16 lg:pr-12 xl:pr-24 max-w-4xl">
            <div className="border-l-4 border-rust pl-6 py-2 mb-10">
              <p className="font-serif text-2xl md:text-3xl leading-tight font-bold text-pure">
                The cow runs from the storm.
              </p>
              <p className="font-serif text-lg md:text-xl leading-relaxed mt-3 text-pure/90">
                Keeps running. Stays trapped in the chaos longer.
              </p>
              <p className="font-serif text-2xl md:text-3xl leading-tight mt-6 font-bold text-pure">
                The buffalo walks into the storm.
              </p>
              <p className="font-serif text-lg md:text-xl leading-relaxed mt-3 text-pure/90">
                It knows the fastest way out of the chaos, is through.
              </p>
            </div>

            <div className="flex flex-col gap-6 font-sans text-base md:text-lg lg:text-xl leading-relaxed text-pure/80">
              <p>You can't eliminate the chaos.</p>
              <p>But you can stop wandering through it blind.</p>
              <h3 className="font-serif text-2xl lg:text-3xl text-gold font-semibold">
                I teach you how to orient under pressure.
              </h3>
              <p>
                <span className="text-gold font-bold underline decoration-rust underline-offset-4"></span>{" "}
                To see clearly when everything's obscured. To convert wasted
                energy into useful work. To lead with direction instead of just
                motion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
