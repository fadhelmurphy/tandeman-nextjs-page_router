import { useGlobalUserStore } from "@/stores/user-store";

export const cFetchWithAuth = (params) => {
  const {token} = useGlobalUserStore.getState()
  return cFetch({...params, token})
}

export const cFetch= async ({
    url = null, 
    method = 'GET', 
    token = null,
    body = null,
    baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL
}) => {
   let response = await fetch(`${baseUrl}${url}`, {
        method,
        headers: {
          accept: 'application.json',
          'Content-Type': 'application/json',
          ...(token ? {Authorization : `Bearer ${token}`} : {})
        },
        ...(body ? {body : JSON.stringify(body)} : {}),
        Cache: 'default'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
    const resToJson = await response.json();
    if(resToJson?.meta?.code == 200)
      return resToJson.data
    else
      throw new Error('Failed to fetch data with status error');
}