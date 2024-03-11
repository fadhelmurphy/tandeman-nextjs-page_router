import { KEYWORDSQUERYKEY, MEDIACOUNTQUERYKEY } from "@/query/keys/keywords";
import { useQuery, useQueryClient, useMutation } from "react-query";
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

export {
  useGetAllKeywords,
  useGetMediaCount
};