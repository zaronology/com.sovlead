import Image from "next/image";
import stormImg from "@/assets/images/the-storm.jpg";

export default function HomeMirageBreak() {
  return (
    <section className="relative w-full bg-gradient-to-r from-black via-30% to-blue/100 overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* --- LEFT SIDE: IMAGE LAYER --- */}
        {/* On mobile/stacked: Full width, set height */}
        {/* On lg+: Takes up exactly half the screen width */}
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
          {/* This is the secret sauce for your consistency:
              We use the container padding logic on the right side ONLY 
              so the text lines up with the text in the components above.
          */}
          <div className="py-16 lg:py-24 px-6 lg:pl-16 lg:pr-12 xl:pr-24 max-w-4xl">
            <h2 className="font-authority text-3xl md:text-4xl inline-block border-b-2 pb-2 border-gold mb-10 font-bold text-gold tracking-wide">
              Breaking The Mirage
            </h2>

            <div className="border-l-4 border-rust pl-6 py-2 mb-10">
              <p className="font-serif text-2xl md:text-3xl leading-tight font-bold text-pure">
                The cow runs from the storm.
              </p>
              <p className="font-serif text-lg md:text-xl leading-relaxed mt-3 text-pure/90">
                The storm moves faster, overtaking them. They keep running,
                trapped in the chaos of the storm.
              </p>
              <p className="font-serif text-2xl md:text-3xl leading-tight mt-6 font-bold text-pure">
                The buffalo walks into the storm.
              </p>
              <p className="font-serif text-lg md:text-xl leading-relaxed mt-3 text-pure/90">
                The buffalo knows the fastest way out of the chaos, is through.
              </p>
            </div>

            <div className="flex flex-col gap-6 font-sans text-base md:text-lg lg:text-xl leading-relaxed text-pure/80">
              <h3 className="font-serif text-2xl lg:text-3xl text-gold font-semibold">
                Charge the storm. Shatter the mirage.
              </h3>
              <p>
                The mirage demands your best performance, a mask that hides who
                you are meant to be.
              </p>

              <p>
                <span className="text-gold font-bold underline decoration-rust underline-offset-4">
                  Self-return
                </span>{" "}
                reclaims it.&nbsp;
                <b>Absorb</b> the useful. <b>Discard</b> the rest.&nbsp;
                <b>Own</b> who you're becoming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
