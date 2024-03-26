// ssrHandler.js
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getAccessToken, getSession } from "@auth0/nextjs-auth0";
import Cookies from "cookies";

const withSSRHandler = (handler = () => {}) => async (context) => {
  const queryClient = new QueryClient();

  // Periksa header Authorization di sini
  const { user = null, accessToken: token } = await getSession(
    context.req,
    context.res
  );
  const cookies = new Cookies(context.req, context.res)
  const getProjectId = cookies.get('project_id') ?? null
  const getProjectName = cookies.get('project_name') ?? null
  if (!token || !getProjectId) {
    // Tidak ada header Authorization, mungkin perlu memberikan respons 401 Unauthorized
    return {
      redirect: {
        permanent: false,
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login?returnTo=${process.env.NEXT_PUBLIC_PREFIX}`,
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
        project_id: getProjectId,
        project_name: getProjectName
      },
    },
  };
};

export { withSSRHandler };
