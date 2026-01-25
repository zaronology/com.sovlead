import { buildMetadata } from "@/lib/seo";
import FoundryApplicationPage from "@/components/foundry/application/FoundryApplicationPage";

export const metadata = buildMetadata({
  title: "The Foundry by Sovereign Leadership | Application ",
  description:
    "Apply to The Foundry. For CIOs, CTOs, VPs of Engineering, and technical founders ready to stop playing defense and lead with authority under pressure.",
  canonicalPath: "/the-foundry",
});

const page = () => {
  return (
    <>
      <FoundryApplicationPage />
    </>
  );
};

export default page;
