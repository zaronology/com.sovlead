import { buildMetadata } from "@/lib/seo";
import HomeHero from "@/components/home/HomeHero";
import HomeLeadership from "@/components/home/HomeLeadership";
import HomeWhy from "@/components/home/HomeWhy";
import HomeTrap from "@/components/home/HomeTrap";
import HomeData from "@/components/home/HomeData";
import HomeMirage from "@/components/home/HomeMirage";
import HomeMirageBreak from "@/components/home/HomeMirageBreak";
import HomeMasteryCta from "@/components/home/HomeMasteryCta";
import HomeThenNow from "@/components/home/HomeThenNow";
import EnookPromo from "@/components/global/EbookArpPromo";

export const metadata = buildMetadata({});

const page = () => {
  return (
    <>
      <HomeHero />
      <HomeLeadership />
      <HomeWhy />
      <HomeTrap />
      <HomeData />
      {/* <EnookPromo /> */}
      <HomeMirage />
      <HomeMirageBreak />
      <HomeThenNow />
      <HomeMasteryCta />
    </>
  );
};

export default page;
