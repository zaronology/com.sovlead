import Image from "next/image";
import heroImg from "@/assets/images/dumpster-fire.jpg";

export default function InsightsHero() {
  return (
    // 1. OUTER WRAPPER: Full width for background image and overlay
    <section className="relative isolate w-full overflow-hidden">
      <Image
        src={heroImg}
        alt="Dumpster fire"
        fill
        priority
        className="object-cover object-bottom"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-blue/100" />

      {/* 2. INNER WRAPPER: The "Container" that locks the content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-50 flex flex-col items-center">
        <h1 className="w-full text-center font-authority text-4xl font-bold leading-tight tracking-tight capitalize text-pure md:text-5xl lg:text-6xl">
          Insights
        </h1>

        <h2 className="mt-4 w-full text-center font-serif text-3xl capitalize text-pure md:text-5xl">
          Seeing the system beneath the story.
        </h2>

        <p className="mt-6 max-w-3xl text-center leading-relaxed text-pure/90 md:text-lg">
          Field notes on leadership, engineering, and decision-making under
          pressure.
        </p>
      </div>
    </section>
  );
}
