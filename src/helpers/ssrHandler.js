// ssrHandler.js
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

const withSSRHandler = (handler) => async (context) => {
  const queryClient = new QueryClient();

  // Periksa header Authorization di sini
//   const authorizationHeader = context.req.headers.authorization;
//   if (!authorizationHeader) {
//     // Tidak ada header Authorization, mungkin perlu memberikan respons 401 Unauthorized
//     context.res.writeHead(401, { 'Content-Type': 'application/json' });
//     context.res.end(JSON.stringify({ error: 'Unauthorized' }));
//     return { props: {} };
//   }

  // Jika otorisasi berhasil, lanjutkan ke handler asli (misalnya, getServerSideProps)
  const additionalProps = await handler(context, queryClient);

  console.log(additionalProps, "additionalProps")

  // Panggil dehydrate setelah semua query selesai di-fetch
  const dehydratedState = dehydrate(queryClient);

  return {
    props: {
      ...additionalProps, // Menambahkan props tambahan
      dehydratedState,
    },
  };
};

export { withSSRHandler };
