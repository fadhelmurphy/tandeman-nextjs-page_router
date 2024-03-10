import landingService from "@/services/landing-service";

const { KEYWORDSQUERYKEY } = require("../keys/keywords");

export const getServerAllKeywords = (queryClient) => {
    return queryClient.prefetchQuery([KEYWORDSQUERYKEY], {queryFn: () =>  landingService.getAllKeywords()});
  }