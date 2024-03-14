import { cFetchWithAuth } from "Helpers/fetch";
  const landingService = {
    getAllKeywords: () => cFetchWithAuth({ url: "/landing/keywords"}),
    getMediaCount: () => cFetchWithAuth({ url: "/landing/media-count"}),
    getClusterExtraction: (params) => cFetchWithAuth({ url: "/landing/cluster-extraction", qParams: params})
  }
  
  export default landingService;