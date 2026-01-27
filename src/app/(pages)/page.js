import { buildMetadata } from "@/lib/seo";
import HomeHero from "@/components/home/HomeHero";
import HomeLeadership from "@/components/home/HomeLeadership";
import HomeWhy from "@/components/home/HomeWhy";
import HomeHow from "@/components/home/HomeHow";
import HomeData from "@/components/home/HomeData";
import HomeMirage from "@/components/home/HomeMirage";
import HomeMirageBreak from "@/components/home/HomeMirageBreak";
import HomeMasteryCta from "@/components/home/HomeMasteryCta";
import HomeThenNow from "@/components/home/HomeThenNow";
import HomeOriented from "@/components/home/HomeOriented";

export const metadata = buildMetadata({});

const page = () => {
  return (
    <>
      <HomeHero />
      <HomeLeadership />
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
