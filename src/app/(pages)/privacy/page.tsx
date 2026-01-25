import { buildMetadata } from "@/lib/seo";
import Privacy from "@/components/policies/Privacy";

export const metadata = buildMetadata({
  title: "Privacy Policy || Sovereign Leadership",
  description:
    "Learn how Sovereign Leadership collects, uses, shares, and protects personal information, and the choices available to you under our Privacy Policy.",
});

const page = () => {
  return (
    <>
      <Privacy />
    </>
  );
};

export default page;
