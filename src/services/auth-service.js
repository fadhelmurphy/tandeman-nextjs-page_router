import { cFetch } from "Helpers/fetch";
  const authService = {
    postAuthLogin: async (payload) => await cFetch({
        url: '/user-log', 
        method: 'POST',
        baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
        token: payload?.token,
        body: {
            user: payload.user
        }
    }),
  }
  
  export default authService;