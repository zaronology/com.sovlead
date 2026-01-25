import { buildMetadata } from "@/lib/seo";
import Disclaimer from "@/components/policies/Disclaimer";

export const metadata = buildMetadata({
  title: "Disclaimers || Sovereign Leadership",
  description:
    "Read the Sovereign Leadership disclaimers covering informational content, no professional advice, third-party links, and limits of liability.",
});

const page = () => {
  return (
    <>
      <Disclaimer />
    </>
  );
};

export default page;
