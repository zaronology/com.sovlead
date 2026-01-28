import Image from "next/image";
import heroImg from "@/assets/images/dumpster-fire.jpg";

export default function InsightsHero() {
  return (
    <section className="relative w-full py-14 min-h-none xs:min-h-[45vh] 2xl:min-h-[52vh] flex items-center overflow-hidden ">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Dumpster fire"
          fill
          priority
          className="object-cover object-right lg:object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/20 via-60% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-90% to-blue/100" />
      </div>

      <div className="relative z-10 mx-auto container px-6 w-full">
        <div className="flex flex-col items-start text-left w-full max-w-4xl">
          <h1 className="hero-headline">
            <span className="block text-gold">Insights</span>
          </h1>

          <h2 className="hero-sub_headline">
            Seeing the system beneath the story.
          </h2>

          <p className="hero-pg">
            Field notes on leadership, engineering, and decision-making under
            pressure.
          </p>
        </div>
      </div>
    </section>
  );
}
