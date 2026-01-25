import { buildMetadata } from "@/lib/seo";
import Terms from "@/components/policies/Terms";

export const metadata = buildMetadata({
  title: "Terms of Service || Sovereign Leadership",
  description:
    "Read Sovereign Leadership’s Terms of Service covering website use, purchases, intellectual property, user responsibilities, and dispute terms.",
});

const page = () => {
  return <Terms />;
};

export default page;
