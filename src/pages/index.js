// pages/index.js
import React, { useMemo, useState } from "react";
import DashboardLayout from "@/containers/layout/dashboard";
import {
  useGetAllKeywords,
  useGetClusterExtraction,
  useGetCountArticlesByAcquire,
  useGetCountArticlesByDate,
  useGetCountArticlesByKeyword,
  useGetMediaCount,
  useGetSentiment,
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
import { getCurrDate } from "@/helpers/utils";
import { Grid } from "@mantine/core";
import Legend from "@/components/Legend";
import StatisticsArticle from "@/components/StatisticsArticle";
import TotalArticles from "@/components/TotalArticles";
import TwoColumnsGrid from "@/containers/layout/TwoColumnsGrid";
import ProcessingTask from "@/components/ProcessingTask";
import Authors from "@/components/NewsAuthors";
import TopIssuesAuthors from "@/components/TopIssuesAuthors";
import MetaDataLists from "@/components/MetaDataLists";
import KeywordArticles from "@/components/KeywordArticles";

const Home = () => {
  const [sentimentFilter, setSentimentFilter] = useState("week");
  const [articlesFilter, setArticlesFilter] = useState("week");
  const { data: allKeywordsData, isLoading: isAllKeywordsLoading } =
    useGetAllKeywords();
  const { data: mediaCountData, isLoading: isMediaCntLoading } =
    useGetMediaCount();
  const { data: sentimentData, isLoading: isSentimentLoading } =
    useGetSentiment({
      limit: 10,
      page: 1,
      date: getCurrDate(),
      filter_by: sentimentFilter,
    });
  const {
    data: clusterExtractionData,
    isLoading: isClusterExtractionLoading,
    fetchNextPage,
    fetchPreviousPage,
  } = useGetClusterExtraction({ page: 1 });
  const { data: countArticlesData, isLoading: isCountArticlesLoading } =
    useGetCountArticlesByAcquire();
  const { data: countArticlesDateData, isLoading: isCountArticlesDateLoading } =
    useGetCountArticlesByDate(articlesFilter);
    const { data: countArticlesKeywordData, isLoading: isCountArticlesKeywordLoading } =
      useGetCountArticlesByKeyword();
  const FooterComponent = (
    <Grid columns={12}>
      <Grid.Col span={4}>
        <Legend
          text="Positive"
          style={{ background: "var(--mantine-color-blue-6)" }}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Legend
          text="Negative"
          style={{ background: "var(--mantine-color-red-6)" }}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Legend
          text="Neutral"
          style={{ background: "var(--mantine-color-green-6)" }}
        />
      </Grid.Col>
    </Grid>
  );
  const filterSentimentData = useMemo(
    () => [
      {
        parent_text: "Select Period",
        data: [
          {
            label: "Day",
            onClick: () => setSentimentFilter("day"),
          },
          {
            label: "Week",
            onClick: () => setSentimentFilter("week"),
          },
          {
            label: "Month",
            onClick: () => setSentimentFilter("month"),
          },
          {
            label: "Year",
            onClick: () => setSentimentFilter("year"),
          },
        ],
      },
    ],
    []
  );
  const filterArticlesData = useMemo(
    () => [
      {
        parent_text: "Select Period",
        data: [
          {
            label: "Week",
            onClick: () => setArticlesFilter("week"),
          },
          {
            label: "Month",
            onClick: () => setArticlesFilter("month"),
          },
        ],
      },
    ],
    []
  );
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
          leftDataDropdown={filterArticlesData}
          leftDropdownText={articlesFilter}
          ChildrenLeft={
            <StatisticsArticle
              isWaveChartLoading={isCountArticlesDateLoading}
              isAcquireLoading={isCountArticlesLoading}
              acquireData={countArticlesData}
              waveChartData={countArticlesDateData}
            />
          }
          ChildrenRight={
            <ClusterExtraction
              data={clusterExtractionData?.pages}
              isLoading={isClusterExtractionLoading}
              fetchNextPage={fetchNextPage}
            />
          }
        />
        <RightSidebarGrid
          leftTitle="Total Articles Per Subjects"
          rightTitle="Sentiment Analysis"
          rightDropdownText={sentimentFilter}
          rightDataDropdown={filterSentimentData}
          ChildrenLeft={
            <KeywordArticles 
            waveChartData={countArticlesKeywordData}
            isWaveChartLoading={isCountArticlesKeywordLoading}
            />
          }
          ChildrenRight={
            <>
              <HorizontalBarChart
                data={sentimentData}
                isLoading={isSentimentLoading}
                FooterComponent={FooterComponent}
              />
            </>
          }
        />
        <TwoColumnsGrid
          leftTitle="Processing Task [Not Integrated]"
          rightTitle={[
            "Metadata Collection [Not Integrated]",
            "News Authors [Not Integrated]",
            "Topic Issued by Author [Not Integrated]",
          ]}
          rightDropdownText={[sentimentFilter.toUpperCase()]}
          rightDataDropdown={[filterSentimentData]}
          ChildrenLeft={
            <ProcessingTask
              data={sentimentData}
              isLoading={isSentimentLoading}
            />
          }
          ChildrenRight={
            <>
              <MetaDataLists />
              <Authors />
              <TopIssuesAuthors />
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
