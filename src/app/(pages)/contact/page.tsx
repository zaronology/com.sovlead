import { buildMetadata } from "@/lib/seo";
import ContactPage from "@/components/ContactPage";

export const metadata = buildMetadata({
  title: "Contact Us | Sovereign Leadership",
  description: "",
  canonical: "https://sovlead.com/contact",
});

const page = () => {
  return (
    <>
      <ContactPage />
    </>
  );
};

export default page;
