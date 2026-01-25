import { buildMetadata } from "@/lib/seo";
import AiIntegrity from "@/components/policies/AiIntegrity";

export const metadata = buildMetadata({
  title: "AI Integrity Policy || Sovereign Leadership",
  description:
    "See Sovereign Leadership’s AI Integrity principles: responsible AI use, data protection, transparency, human oversight, and content standards.",
});

const page = () => {
  return (
    <>
      <AiIntegrity />
    </>
  );
};

export default page;
