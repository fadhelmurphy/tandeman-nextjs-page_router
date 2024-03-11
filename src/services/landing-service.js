import { cFetch } from "Helpers/fetch";

  const landingService = {
    getAllKeywords: () => cFetch({ url: "/landing/keywords"}),
    getMediaCount: () => cFetch({ url: "/landing/media-count"})
  }
  
  export default landingService;