import { cFetchWithAuth } from "Helpers/fetch";
const landingService = {
  getAllKeywords: () => cFetchWithAuth({ url: "/landing/keywords" }),
  getMediaCount: () => cFetchWithAuth({ url: "/landing/media-count" }),
  getClusterExtraction: (params) =>
    cFetchWithAuth({ url: "/landing/cluster-extraction", qParams: params }),
  getSentiment: (params) =>
    cFetchWithAuth({ url: "/landing/sentiment", qParams: params }),
  getCountArticlesByAcquire: async () => {
    const get = await cFetchWithAuth({
      url: "/landing/count-articles-by-acquire",
    });
    const res = Object.keys(get).map((key) => ({
      title: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " "),
      value: parseInt(get[key]),
    }));
    return res;
  },
  getCountArticlesByMonth: async () => {
    const getData = await cFetchWithAuth({
      url: "/landing/count-articles-by-month",
    });
    const labels = getData?.map((item) => item.publication_date)
    const res = {
      labels,
      datasets: [
        {
          label: "Articles by Month",
          data: labels?.map((_,idx) => getData[idx].total_per_day),
          borderColor: "#228be6",
          backgroundColor: "#228be6",
          fill: {
            target: "origin", // Set the fill options
            above: "#228be6"
          }
        },
      ]
    }
    return res;
  },
  getCountArticlesByWeek: async () => {
    const getData = await cFetchWithAuth({
      url: "/landing/count-articles-by-week",
    });
    const labels = getData?.map((item) => item.publication_date)
    const res = {
      labels,
      datasets: [
        {
          label: "Articles by Week",
          data: labels?.map((_,idx) => getData[idx].total_per_day),
          borderColor: "#228be6",
          backgroundColor: "#228be6",
          fill: {
            target: "origin", // Set the fill options
            above: "#228be6"
          }
        },
      ]
    }
    return res;
  },
};

export default landingService;
