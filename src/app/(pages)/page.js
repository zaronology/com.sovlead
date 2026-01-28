import { buildMetadata } from "@/lib/seo";
import HomeHero from "@/components/home/HomeHero";
import HomeLeadership from "@/components/home/HomeLeadership";
import HomeTrifecta from "@/components/home/HomeTrifecta";
import HomeWhy from "@/components/home/HomeWhy";
import HomeData from "@/components/home/HomeData";
import HomeMirage from "@/components/home/HomeMirage";
import HomeMirageBreak from "@/components/home/HomeMirageBreak";
import HomeHow from "@/components/home/HomeHow";
import HomeOriented from "@/components/home/HomeOriented";
import HomeThenNow from "@/components/home/HomeThenNow";
import HomeMasteryCta from "@/components/home/HomeMasteryCta";

export const metadata = buildMetadata({});

const page = () => {
  return (
    <>
      <HomeHero />
      <HomeLeadership />
      <HomeTrifecta />
      <HomeWhy />
      <HomeData />
      <HomeMirage />
      <HomeMirageBreak />
      <HomeHow />
      <HomeOriented />
      <HomeThenNow />
      <HomeMasteryCta />
    </>
  );
};

export default page;
