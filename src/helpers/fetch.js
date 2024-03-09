export const cFetch= async ({
    url = null, 
    method = 'GET', 
    token = null,
    body = null
}) => {
   let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}${url}`, {
        method,
        headers: {
          accept: 'application.json',
          'Content-Type': 'application/json',
          ...(token ? {Authorization : `Bearer ${token}`} : {})
        },
        ...(body ? body : {}),
        Cache: 'default'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
    return await response.json();
}