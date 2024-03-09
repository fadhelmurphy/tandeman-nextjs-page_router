import { KEYWORDSQUERYKEY } from "@/query/keys/keywords";
import { useQuery, useQueryClient, useMutation } from "react-query";
import landingService from "Services/landing-service";

const useAllKeywords = () => {
  return useQuery({
    queryKey:[KEYWORDSQUERYKEY],
    queryFn: () => landingService.getAllKeywords(),
  });
};

export {
  useAllKeywords,
};