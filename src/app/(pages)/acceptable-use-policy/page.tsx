import { buildMetadata } from "@/lib/seo";
import AcceptableUse from "@/components/policies/AcceptableUse";

export const metadata = buildMetadata({
  title: "Acceptable Use Policy || Sovereign Leadership",
  description:
    "Review Sovereign Leadership’s Acceptable Use Policy outlining prohibited activities, account responsibilities, and safe, lawful use of our website and services.",
});

const page = () => {
  return (
    <>
      <AcceptableUse />
    </>
  );
};

export default page;
