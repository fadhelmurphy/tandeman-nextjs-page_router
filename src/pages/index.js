// pages/index.js
import React from "react";
import DashboardLayout from "@/containers/layout/dashboard";
import { useGetAllKeywords, useGetMediaCount } from "@/hooks/landing-hook";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
// import { getServerAllKeywords } from '@/query/features/landing';
import { withSSRHandler } from "@/helpers/ssrHandler";
import KeywordsLists from "@/components/Keywords/KeywordsLists";
import SectionBox from "Containers/layout/sections/Box";
import SectionMediaBox from "Containers/layout/sections/MediaBox";

const Home = () => {
  const { data: allKeywordsData, isLoading: isAllKeywordsLoading } = useGetAllKeywords();
  const { data: mediaCountData, isLoading: isMediaCntLoading } = useGetMediaCount();
  return (
    <>
      <DashboardLayout>
        <SectionBox title="Keywords" isLoading={isAllKeywordsLoading}>
          <KeywordsLists data={allKeywordsData} />
        </SectionBox>
        <SectionMediaBox data={mediaCountData} />
      </DashboardLayout>
    </>
  );
};

// Fungsi getServerSideProps yang dipindahkan queryClient-nya
export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: withSSRHandler(),
});
export default Home;
