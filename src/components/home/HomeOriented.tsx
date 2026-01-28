import React from "react";
import { AuthorityQuote, SectionHeadline, YinYang } from "../SubComponents";

export default function HomeOriented() {
  const quotebox = [
    {
      headline: "Stop reacting to every fire.",
      text: 'You know what matters now and what can wait. Decisions come from <b className="text-gold">clarity</b>, not panic.',
    },
    {
      headline: "Get back to center in minutes, not days.",
      text: 'Week-long retreats not required. You can <b className="text-gold">return to yourself</b>, even in the chaos.',
    },
    {
      headline: "Stop performing what you don't want to be.",
      text: 'You lead from <b className="text-gold">who you are</b>, not from something you’re trying to prove.',
    },
    {
      headline: "Discharge pressure instead of absorbing it.",
      text: 'Your energy converts to <b className="text-rust">useful work</b> instead of burning off as waste heat.',
    },
  ];
  const yinYang = [
    { yin: "Focus", yang: "burnout" },
    { yin: "Authority", yang: "reactivity" },
    { yin: "Leadership", yang: "firefighting" },
  ];

  return (
    <section className="relative w-full bg-white-soft py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto container px-6 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeadline>When You're Oriented</SectionHeadline>
          <div className="flex flex-col gap-10 font-sans text-lg md:text-xl lg:text-2xl leading-relaxed text-blue/90 text-left">
            <p className="font-serif text-lg md:text-2xl lg:text-3xl italic text-blue">
              When orientation is restored, effort drops and authority holds
              under pressure. You:
            </p>

            <div className="flex flex-col gap-12">
              {quotebox.map((item, idx) => (
                <div key={idx} className="border-l-4 border-gold pl-8">
                  <h4 className="quotebox-headline">{item.headline}</h4>
                  <p
                    className="text-base md:text-lg lg:text-xl"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  ></p>
                </div>
              ))}
            </div>
            <AuthorityQuote
              lead="Orientation doesn’t make the"
              leadEmp="storm disappear"
              close="It changes how you"
              closeEmp="move inside it"
              bgColor="white-soft"
            ></AuthorityQuote>
            <div className="bg-white-soft p-8 lg:p-12 text-blue rounded-sm shadow-md border border-blue/10">
              <p className="font-authority font-medium text-rust uppercase tracking-widest mb-8 text-sm lg:text-base">
                Orientation is the difference between:
              </p>
              <YinYang data={yinYang}></YinYang>
            </div>

            <p className="text-center font-authority text-lg xs:text-2xl md:text-3xl lg:text-5xl text-blue mt-8 leading-relaxed">
              You stop being{" "}
              <span className="text-rust underline decoration-gold underline-offset-8">
                owned
              </span>{" "}
              by success. <br />
              <span className="font-bold">And start owning it.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
