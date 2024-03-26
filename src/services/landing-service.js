import { formatCompactNumber, random_rgba, toCapitalize } from "@/helpers/utils";
import { cFetchWithAuth } from "Helpers/fetch";
const landingService = {
  getAllKeywords: (params) => cFetchWithAuth({ url: "/landing/keywords", qParams: params }),
  getMediaCount: async () => {
    const getData = await cFetchWithAuth({ url: "/landing/media-count" });
    return getData.map((item) => {
      item.count = formatCompactNumber(parseInt(item.count));
      return item;
    });
  },
  getClusterExtraction: (params) =>
    cFetchWithAuth({ url: "/landing/cluster-extraction", qParams: params }),
  getSentiment: (params) =>
    cFetchWithAuth({ url: "/landing/sentiment", qParams: params }),
  getCountArticlesByAcquire: async () => {
    const get = await cFetchWithAuth({
      url: "/landing/count-articles-by-acquire",
    });
    const res = get ? Object.keys(get).map((key) => ({
      title: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " "),
      value: formatCompactNumber(parseInt(get[key])),
    })) : [];
    return res;
  },
  getCountArticlesByMonth: async () => {
    const getData = await cFetchWithAuth({
      url: "/landing/count-articles-by-month",
    });
    const labels = getData?.map((item) => item.publication_date);
    const res = {
      labels,
      datasets: [
        {
          label: "Articles by Month",
          data: labels?.map((_, idx) => getData[idx].total_per_day),
          borderColor: "#228be6",
          backgroundColor: "#228be6",
          fill: {
            target: "origin", // Set the fill options
            above: "#228be6",
          },
        },
      ],
    };
    return res;
  },
  getCountArticlesByWeek: async () => {
    const getData = await cFetchWithAuth({
      url: "/landing/count-articles-by-week",
    });
    const labels = getData?.map((item) => item.publication_date);
    const res = {
      labels,
      datasets: [
        {
          label: "Articles by Week",
          data: labels?.map((_, idx) => getData[idx].total_per_day),
          borderColor: "#228be6",
          backgroundColor: "#228be6",
          fill: {
            target: "origin", // Set the fill options
            above: "#228be6",
          },
        },
      ],
    };
    return res;
  },
  getCountArticlesByKeyword: async () => {
    const getData = await cFetchWithAuth({
      url: "/landing/count-articles-by-keyword",
    });
    function groupByPublicationDate(data) {
      const groupedData = {};

      data.forEach(entry => {
          const date = entry.publication_date;
          if (!groupedData[date]) {
              groupedData[date] = [];
          }
          groupedData[date].push(entry.total);
      });
  
      return groupedData;
  }
  function groupByKeywordGroup(data) {
    const groupedData = {};

    data.forEach(entry => {
        const keywordGroup = entry.keyword_group;
        if (!groupedData[keywordGroup]) {
            groupedData[keywordGroup] = [];
        }
        groupedData[keywordGroup].push(entry.total);
    });

    return groupedData;
}
  const groupedData = groupByPublicationDate(getData);
  const getKeywords = groupByKeywordGroup(getData)
    const res = {
      labels: Object.keys(groupedData),
      datasets: [
        ...Object.keys(getKeywords).map((label) => {
          const codeColors = random_rgba()
          return {
            label: label,
            data: getKeywords ? getKeywords[label] : [0],
            borderColor: codeColors,
            backgroundColor: codeColors,
            fill: "origin",
          }
        }),
      ],
    };
    return res;
  },
  getCountYtComments: async () => {
    const getData = await cFetchWithAuth({
      url: "/landing/count-yt-comments",
    });
    const labels = getData?.map((item) => toCapitalize(item.tanggal));
    const res = {
      labels,
      datasets: [
        {
          label: "Youtube Comments",
          data: labels?.map((_, idx) => getData[idx].total),
          borderColor: "#ff6b6b",
          backgroundColor: "#ff6b6b",
          fill: {
            target: "origin", // Set the fill options
            above: "#ff6b6b",
          },
        },
      ],
    };
    return res;
  },
  getCountYtVideos: async () => {
    const getData = await cFetchWithAuth({
      url: "/landing/count-yt-videos",
    });
    const labels = getData?.map((item) => toCapitalize(item.tanggal));
    const res = {
      labels,
      datasets: [
        {
          label: "Youtube Videos",
          data: labels?.map((_, idx) => getData[idx].total),
          borderColor: "#e03132",
          backgroundColor: "#e03132",
          fill: "origin", // Set the fill options
        },
      ],
    };
    return res;
  },
  getMetadata: async (params) => {
    const getData = await cFetchWithAuth({
      url: "/landing/metadata",
      qParams: params,
    });
    const res = getData?.length ? getData.map((item) => ({
      ...item,
      author: toCapitalize(item.author),
      tags: toCapitalize(item.tags),
    })) : [];
    return res;
  },
  getAuthor: (params) =>
    cFetchWithAuth({ url: "/landing/metadata-author", qParams: params }),
};

export default landingService;
