import { COUNTARTICLESBYACQUIRE, COUNTARTICLESBYDATE, COUNTARTICLESBYKEYWORD } from "@/query/keys/articles";
import { CLUSTEREXTRACTIONQUERYKEY } from "@/query/keys/cluster-extraction";
import { KEYWORDSQUERYKEY } from "@/query/keys/keywords";
import { MEDIACOUNTQUERYKEY } from "@/query/keys/media-count";
import { SENTIMENTQUERYKEY } from "@/query/keys/sentiment";
import { useQuery, useQueryClient, useMutation, useInfiniteQuery } from "react-query";
import landingService from "Services/landing-service";

const useGetAllKeywords = () => {
  return useQuery({
    queryKey:[KEYWORDSQUERYKEY],
    queryFn: () => landingService.getAllKeywords(),
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
    queryFn: ({ pageParam = 1 }) => landingService.getClusterExtraction({page: pageParam, limit: 4}),
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

export {
  useGetAllKeywords,
  useGetMediaCount,
  useGetClusterExtraction,
  useGetSentiment,
  useGetCountArticlesByAcquire,
  useGetCountArticlesByDate,
  useGetCountArticlesByKeyword,
};