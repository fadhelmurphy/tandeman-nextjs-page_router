import { useGlobalUserStore } from "@/stores/user-store";
import { serialize } from "./utils";

export const cFetchWithAuth = (params) => {
  const { token, project_name = null } = useGlobalUserStore.getState();
  return cFetch({ ...params, token, project_name });
};

export const cFetch = async ({
  url = null,
  method = "GET",
  token = null,
  body = null,
  baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL,
  qParams = null,
  project_name = null
}) => {

  const HTTP_TIMEOUT = 20000; // Timeout 20 seconds
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), HTTP_TIMEOUT);
  try {
    qParams = qParams ? `?${serialize(qParams)}` : serialize(qParams);
    let response = await fetch(`${baseUrl}${url}${qParams}`, {
      signal: controller.signal,
      method,
      headers: {
        accept: "application.json",
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(project_name ? {current_project: project_name} : {})
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
      Cache: "default",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const resToJson = await response.json();
    if (resToJson?.meta?.code == 200) return resToJson.data;
    else throw new Error("Failed to fetch data with status error");
  } catch (error) {
    throw new Error("Request timeout to fetch data");
  } finally {
    clearTimeout(timeoutId);
  }
};
