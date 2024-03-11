import { cFetchWithAuth } from "Helpers/fetch";
  const landingService = {
    getAllKeywords: () => cFetchWithAuth({ url: "/landing/keywords"}),
    getMediaCount: () => cFetchWithAuth({ url: "/landing/media-count"})
  }
  
  export default landingService;