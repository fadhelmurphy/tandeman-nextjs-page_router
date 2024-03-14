// pages/index.js
import React from "react";
import DashboardLayout from "@/containers/layout/dashboard";
import {
  useGetAllKeywords,
  useGetClusterExtraction,
  useGetMediaCount,
} from "@/hooks/landing-hook";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
// import { getServerAllKeywords } from '@/query/features/landing';
import { withSSRHandler } from "@/helpers/ssrHandler";
import KeywordsLists from "@/components/Keywords/KeywordsLists";
import SectionBox from "@/containers/sections/Box";
import SectionMediaBox from "@/containers/sections/MediaBox";
import RightSidebarGrid from "@/containers/layout/RightSidebarGrid";
import ClusterExtraction from "@/components/ClusterExtraction";
import HorizontalBarChart from "@/components/HorizontalBarChart";

const Home = () => {
  const { data: allKeywordsData, isLoading: isAllKeywordsLoading } =
    useGetAllKeywords();
  const { data: mediaCountData, isLoading: isMediaCntLoading } =
    useGetMediaCount();
  const {
    data: clusterExtractionData,
    isLoading: isClusterExtractionLoading,
    fetchNextPage,
    fetchPreviousPage,
  } = useGetClusterExtraction({ page: 1 });
  return (
    <>
      <DashboardLayout>
        <SectionBox title="Keywords" isLoading={isAllKeywordsLoading}>
          <KeywordsLists data={allKeywordsData} />
        </SectionBox>
        <SectionMediaBox data={mediaCountData} isLoading={isMediaCntLoading} />
        <RightSidebarGrid
          leftTitle="Statistics Articles Acquirement"
          rightTitle="Clusters Extraction"
          isRightLoading={isClusterExtractionLoading}
          childrenRight={
            <>
              <ClusterExtraction
                data={clusterExtractionData?.pages}
                isLoading={isClusterExtractionLoading}
                fetchNextPage={fetchNextPage}
              />
            </>
          }
        />
        <RightSidebarGrid
          leftTitle="Total Articles Per Subjects"
          rightTitle="Sentiment Analysis"
          childrenRight={
            <>
            <HorizontalBarChart />
            </>
          }
        />
      </DashboardLayout>
    </>
  );
};

// Fungsi getServerSideProps yang dipindahkan queryClient-nya
export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: withSSRHandler(),
});
export default Home;
