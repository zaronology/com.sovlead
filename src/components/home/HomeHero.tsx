import Image from "next/image";
import heroImg from "@/assets/images/dumpster-fire.jpg";

export default function Hero() {
  return (
    <section className="relative w-full xl:min-h-[45vh] 2xl:min-h-[52vh] flex items-center overflow-hidden py-20">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Dumpster fire"
          fill
          priority
          className="object-cover object-right lg:object-bottom" // Focused right for mobile, bottom for desktop
        />
        {/* --- IMPROVED GRADIENT LAYER --- */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/20 via-60% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-90% to-blue/100" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 mx-auto container px-6 w-full">
        {/* Changed 'items-center' to 'items-start' and limited max-width for the L-Frame */}
        <div className="flex flex-col items-start text-left w-full max-w-4xl">
          <h1 className="font-authority text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight 2xl:text-7xl/tight font-bold capitalize text-pure">
            Every Day Is Another{" "}
            <span className="block text-rust">Dumpster Fire</span>
          </h1>

          <h2 className="mt-4 font-serif text-xl/snug lg:text-2xl/snug xl:text-3xl/snug 2xl:text-4xl/snug capitalize text-pure/90">
            And You're the only one with a hose
          </h2>

          <p className="mt-6 md:mt-8 max-w-2xl font-sans text-base text-md/relaxed lg:text-lg/relaxed 2xl:text-xl/relaxed lg:max-w-[590px] text-pure/80">
            The pace feels impossible. Slowing down feels dangerous. You run
            from fire to fire, burning yourself out to keep it all from burning
            down.
          </p>

          {/* Optional: Add a Call to Action button here to anchor the L-frame */}
        </div>
      </div>
    </section>
  );
}
