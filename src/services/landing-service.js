import { toCapitalize } from "@/helpers/utils";
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
  getCountArticlesByKeyword: async () => {
    const getData = await cFetchWithAuth({
      url: "/landing/count-articles-by-keyword",
    });
    const labels = getData?.map((item) => toCapitalize(item.keyword_group.replace("_", " - ")))
    const res = {
      labels,
      datasets: [
        {
          label: "Articles by Keyword",
          data: labels?.map((_,idx) => getData[idx].total),
          borderColor: "#7AD1DD",
          backgroundColor: "#7AD1DD",
          fill: {
            target: "origin", // Set the fill options
            above: "#7AD1DD"
          }
        },
      ]
    }
    return res;
  },
  getCountYtComments: async () => {
    const getData = await cFetchWithAuth({
      url: "/landing/count-yt-comments",
    });
    const labels = getData?.map((item) => toCapitalize(item.tanggal))
    const res = {
      labels,
      datasets: [
        {
          label: "Youtube Comments",
          data: labels?.map((_,idx) => getData[idx].total),
          borderColor: "#FF6B6B",
          backgroundColor: "#FF6B6B",
          fill: {
            target: "origin", // Set the fill options
            above: "#FF6B6B"
          }
        },
      ]
    }
    return res;
  },
  getCountYtVideos: async () => {
    const getData = await cFetchWithAuth({
      url: "/landing/count-yt-videos",
    });
    const labels = getData?.map((item) => toCapitalize(item.tanggal))
    const res = {
      labels,
      datasets: [
        {
          label: "Youtube Videos",
          data: labels?.map((_,idx) => getData[idx].total),
          borderColor: "#E03131",
          backgroundColor: "#E03131",
          fill: {
            target: "origin", // Set the fill options
            above: "#E03131"
          }
        },
      ]
    }
    return res;
  },
};

export default landingService;
