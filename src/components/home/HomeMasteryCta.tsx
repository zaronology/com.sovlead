import React from "react";

export default function FoundrySections() {
  return (
    <div className="w-full">
      {/* SECTION 5: THE SOLUTION (White Background) */}
      <section className="bg-white pt-20 pb-32 md:pt-32 md:pb-48 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-authority text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Breaking the Mirage
          </h2>
          <div className="max-w-2xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              We all get lost. It's something we do over and over again, almost
              every single day of our lives. It's not getting lost that breaks
              us. It's forgetting how to find our way back.
            </p>
            <p>A sovereign leader has mastered the art of self-return.</p>
            <p>
              The environment no longer consumes you. When chaos is everywhere,
              you are calm, and your calm spreads into the environment.
            </p>
            <p>
              You're no longer consumed by what you can't control. You're
              focused. You don't waiver. You don't negotiate boundaries - you
              enforce them. You don't accept vague commitments or abandoned
              accountability.
            </p>
            <p>
              You know what you're responsible for - and what you're not. You
              stop saying yes to carry burdens that are not yours to carry. You
              make decisions without second-guessing them.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-6 bg-blue">
        <div className="max-w-5xl mx-auto">
          <div className="relative -mt-32 md:-mt-40 bg-[#0a1628] border-2 border-gold/30 rounded-lg p-8 md:p-12 shadow-2xl z-20">
            <h3 className="text-gold font-authority text-2xl md:text-4xl text-center mb-6 tracking-tight">
              THE FOUNDRY
            </h3>
            <p className="text-white text-xl md:text-2xl italic text-center mb-10 border-b border-white/10 pb-8">
              "Warriors aren't built in a classroom, they're built on the
              battlefield."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white/80 text-sm md:text-base leading-relaxed mb-10">
              <p>
                Warriors aren't built in a classroom, they're built on the
                battlefield. You'e connuetions built in a classroom, roo
                dosooomg cenecmoriate evimcs of organitiara buil the neeehirirry
                classroom eveduising.
              </p>
              <p>
                Longisem Is anew evalyorou sfor bony continue that evory coc're
                saising orp, umoses imeputtling penesless you. Keoe your
                onoooraed. Hfoccniwalvovs hve and banlt us onlithe battlefield
                for the clooscnrs.
              </p>
            </div>

            <button className="w-full bg-rust hover:bg-rust/90 text-white font-bold py-4 px-8 rounded uppercase tracking-widest transition-colors">
              [Apply for The Foundry - Limited Spots]
            </button>
          </div>
        </div>

        {/* SECTION 7: FINAL URGENCY (Dark Background) */}
        <div className="max-w-4xl mx-auto py-24 md:py-32 text-center text-white">
          <p className="text-sm font-bold tracking-widest text-white/50 uppercase mb-4">
            Section 7: Final Urgency
          </p>
          <h2 className="font-authority text-4xl md:text-6xl font-bold mb-4">
            FINAL URGENCY
          </h2>
          <p className="text-gold italic text-lg mb-10 underline decoration-gold/30 underline-offset-8">
            How This Works
          </p>

          <div className="space-y-4 mb-12">
            <p className="text-xl md:text-2xl font-light">
              We all believe we have time...
            </p>
            <p className="text-xl md:text-2xl font-light">
              You don't have five years...
            </p>
          </div>

          <h3 className="text-4xl md:text-7xl font-authority font-bold text-white mb-10 tracking-tighter">
            YOU HAVE ONE HEARTBEAT.
          </h3>

          <p className="max-w-2xl mx-auto text-white/70 leading-relaxed mb-12">
            Every coutnibitton noes thezy noater to our wirt braw wsoletss tirey
            can have fire hoot headed nisan npvtest alone. The Foundry eio key
            treads riera abore eunto maint remsing internstiow operastion.
          </p>

          <div className="inline-block border border-gold/50 px-8 py-4 mb-12 rounded bg-gold/5">
            <p className="text-gold text-sm md:text-base">
              The Foundry is 1:1, and onke as scectitler in to eudly uel as an
              erriting with masters sre ruiss.
            </p>
          </div>

          <div>
            <button className="bg-rust hover:bg-rust/90 text-white font-bold py-4 px-12 rounded uppercase tracking-widest transition-colors">
              [Apply for The Foundry]
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
