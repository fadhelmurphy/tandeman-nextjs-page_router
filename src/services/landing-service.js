import { cFetch } from "Helpers/fetch";

class landingService {
    /**
     * Get all keywords
     * @returns
     */
     getAllKeywords() {
      return cFetch({ url: "/landing/keywords"});
    }
  }
  
  export default new landingService();