import { cFetchWithAuth } from "Helpers/fetch";
  const landingService = {
    getAllKeywords: () => cFetchWithAuth({ url: "/landing/keywords"}),
    getMediaCount: () => cFetchWithAuth({ url: "/landing/media-count"}),
    getClusterExtraction: (params) => cFetchWithAuth({ url: "/landing/cluster-extraction", qParams: params}),
    getSentiment: (params) => cFetchWithAuth({ url: "/landing/sentiment", qParams: params}),
  }
  
  export default landingService;