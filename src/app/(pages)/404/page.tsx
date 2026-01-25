import { buildMetadata } from "@/lib/seo";
import Error404 from "@/components/Error404";

export const metadata = buildMetadata({
  title: "Sovereign Leadership | 404",
  description: "",
});

const page = () => {
  return (
    <>
      <Error404 />
    </>
  );
};

export default page;
