// ssrHandler.js
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getAccessToken, getSession } from "@auth0/nextjs-auth0";

const withSSRHandler = (handler) => async (context) => {
  const queryClient = new QueryClient();

  // Periksa header Authorization di sini
  const { user = null, accessToken: token } = await getSession(
    context.req,
    context.res
  );
  if (!token) {
    // Tidak ada header Authorization, mungkin perlu memberikan respons 401 Unauthorized
    return {
      redirect: {
        permanent: false,
        destination: "/api/auth/login",
      },
    };
  }

  // Jika otorisasi berhasil, lanjutkan ke handler asli (misalnya, getServerSideProps)
  const additionalProps = await handler(context, queryClient);

  // Panggil dehydrate setelah semua query selesai di-fetch
  const dehydratedState = dehydrate(queryClient);

  return {
    props: {
      ...additionalProps, // Menambahkan props tambahan
      dehydratedState,
      userData: {
        user,
        token,
      },
    },
  };
};

export { withSSRHandler };
