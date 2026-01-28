import React from "react";
import { AuthorityQuote } from "@/components/SubComponents";

export default function HomeLeadership() {
  return (
    <section className="relative w-full">
      <AuthorityQuote
        lead="Leadership taught you to"
        leadEmp="absorb pressure"
        close="but not how to"
        closeEmp="release it"
      ></AuthorityQuote>
    </section>
  );
}
