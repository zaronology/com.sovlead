import React from "react";
import { SectionHeadline } from "../SubComponents";

const SharpLine = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-rust ${className}`}
    aria-hidden="true"
  >
    <path d="M3 12H21" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

export default function LeadershipStats() {
  const dataPoints = [
    {
      percentage: "73%",
      description: (
        <>
          of execs work without enough rest.{" "}
          <span className="font-bold text-rust">56%</span> can't get 7–8 hours
          sleep, and <span className="font-bold text-rust">46%</span> skip
          meals.
        </>
      ),
      cite: "[Mayo Clinic/Superhuman 2025]",
    },
    {
      percentage: "47%",
      description: (
        <>of execs say burnout destroys their closest relationships.</>
      ),
      cite: "[Superhuman 2025]",
    },
    {
      percentage: "56%",
      description: (
        <>
          of leaders hit full burnout in 2024.{" "}
          <span className="font-bold text-rust">70%</span> of execs are ready to
          quit to save their sanity.
        </>
      ),
      cite: "Superhuman 2025 (Mayo Clinic data)]",
    },
    {
      percentage: "93%",
      description: (
        <>
          execs know burnout kills organizations.{" "}
          <span className="font-bold text-rust">75%</span> have colleagues who
          already quit.
        </>
      ),
      cite: "[Superhuman 2025]",
    },
  ];

  const checklist = [
    "Your family pays the price",
    "You're trading your value for a title",
    "You're paid in panic to deliver peace",
    "You forget what you're fighting for",
    "Your body is keeping score",
    "Your mind is slowly crashing",
  ];

  return (
    <section className="w-full bg-white">
      {/* 1. TOP STATS GRID (Contained) */}
      <div className="mx-auto container px-6 pb-20 lg:pb-40 pt-10">
        <SectionHeadline>You're not alone</SectionHeadline>
        <div className="w-full md:w-10/12 lg:w-full xl:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          {dataPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white-soft shadow-md text-blue aspect-square flex flex-col justify-center items-center text-center p-8 md:p-6 lg:p-6 rounded-sm border border-gold/10 "
            >
              <div className="font-authority text-7xl md:text-8xl text-rust font-bold leading-none mb-4">
                {point.percentage}
              </div>
              <p className="font-sans text-lg md:text-xl text-blue/90 leading-relaxed max-w-sm mx-auto">
                {point.description}
              </p>
              <small className="text-blue/60 mt-4 uppercase tracking-widest text-[10px] font-bold">
                {point.cite}
              </small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
