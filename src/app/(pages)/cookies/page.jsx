import { buildMetadata } from "@/lib/seo";
import Cookies from "@/components/policies/Cookies";

export const metadata = buildMetadata({
  title: "Cookie Policy || Sovereign Leadership",
  description:
    "Learn how Sovereign Leadership uses cookies and similar technologies, what they do, and how to manage preferences in our Cookies Policy.",
});

const page = () => {
  return (
    <>
      <Cookies />
    </>
  );
};

export default page;
