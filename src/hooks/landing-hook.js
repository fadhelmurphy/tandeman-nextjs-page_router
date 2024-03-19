import { COUNTARTICLESBYACQUIRE, COUNTARTICLESBYDATE, COUNTARTICLESBYKEYWORD } from "@/query/keys/articles";
import { CLUSTEREXTRACTIONQUERYKEY } from "@/query/keys/cluster-extraction";
import { KEYWORDSQUERYKEY } from "@/query/keys/keywords";
import { MEDIACOUNTQUERYKEY } from "@/query/keys/media-count";
import { AUTHORQUERYKEY, METADATAQUERYKEY } from "@/query/keys/metadata";
import { SENTIMENTQUERYKEY } from "@/query/keys/sentiment";
import { COUNTYOUTUBECOMMENTS, COUNTYOUTUBEVIDEOS } from "@/query/keys/youtube";
import { useQuery, useQueryClient, useMutation, useInfiniteQuery } from "react-query";
import landingService from "Services/landing-service";

const useGetAllKeywords = (query) => {
  return useInfiniteQuery({
    queryKey:[KEYWORDSQUERYKEY, query],
    queryFn: ({ pageParam = 1 }) => landingService.getAllKeywords({page: pageParam, limit: 10}),
    getNextPageParam(lastPage, allPages) {
      return lastPage?.length > 0 ? allPages?.length + 1 : undefined;
    },
  });
};
const useGetMediaCount = () => {
  return useQuery({
    queryKey:[MEDIACOUNTQUERYKEY],
    queryFn: () => landingService.getMediaCount(),
  });
};

const useGetSentiment = (params) => {
  return useQuery({
    queryKey:[SENTIMENTQUERYKEY, params],
    queryFn: () => landingService.getSentiment(params),
  });
};

const useGetClusterExtraction = (query) => {
  return useInfiniteQuery({
    queryKey:[CLUSTEREXTRACTIONQUERYKEY, query],
    queryFn: ({ pageParam = 1 }) => landingService.getClusterExtraction({page: pageParam, limit: 3}),
    getNextPageParam(lastPage, allPages) {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

const useGetCountArticlesByAcquire = () => {
  return useQuery({
    queryKey:[COUNTARTICLESBYACQUIRE],
    queryFn: () => landingService.getCountArticlesByAcquire(),
  });
};

const useGetCountArticlesByDate = (params) => {
  return useQuery({
    queryKey:[COUNTARTICLESBYDATE, params],
    queryFn: () => params == "week" ? landingService.getCountArticlesByWeek() : landingService.getCountArticlesByMonth(),
  });
};

const useGetCountArticlesByKeyword = (params) => {
  return useQuery({
    queryKey:[COUNTARTICLESBYKEYWORD, params],
    queryFn: () => landingService.getCountArticlesByKeyword(),
  });
};

const useGetCountYtComments = () => {
  return useQuery({
    queryKey:[COUNTYOUTUBECOMMENTS],
    queryFn: () => landingService.getCountYtComments(),
  });
};

const useGetCountYtVideos = () => {
  return useQuery({
    queryKey:[COUNTYOUTUBEVIDEOS],
    queryFn: () => landingService.getCountYtVideos(),
  });
};

const useGetMetadata = (query) => {
  return useInfiniteQuery({
    queryKey:[METADATAQUERYKEY, query],
    queryFn: ({ pageParam = 1 }) => landingService.getMetadata({page: pageParam, limit: 3}),
    getNextPageParam(lastPage, allPages) {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};


const useGetAuthor = (query) => {
  return useInfiniteQuery({
    queryKey:[AUTHORQUERYKEY, query],
    queryFn: ({ pageParam = 1 }) => landingService.getAuthor({page: pageParam, limit: 4}),
    getNextPageParam(lastPage, allPages) {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export {
  useGetAllKeywords,
  useGetMediaCount,
  useGetClusterExtraction,
  useGetSentiment,
  useGetCountArticlesByAcquire,
  useGetCountArticlesByDate,
  useGetCountArticlesByKeyword,
  useGetCountYtComments,
  useGetCountYtVideos,
  useGetMetadata,
  useGetAuthor
};