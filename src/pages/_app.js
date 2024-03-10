// pages/_app.js
import "@mantine/core/styles.css"; // Import Mantine styles
import { MantineProvider } from "@mantine/core";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { defaultOptions } from "@/query/options";
// import { UserProvider } from '@auth0/nextjs-auth0/client';
import { useGlobalUserStore } from "@/stores/auth-store";

function MyApp({ Component, pageProps }) {
  const { userData } = pageProps;
  const setUser = useGlobalUserStore((state) => state.setUser);
  setUser({...userData, status: "success"});
  /* Create a client */
  const queryClient = new QueryClient({
    defaultOptions,
  });
  return (
    <QueryClientProvider client={queryClient} state={pageProps.dehydratedState}>
      <Hydrate state={pageProps.dehydratedState}>
        <MantineProvider>
          {/* <UserProvider> */}
          <Component {...pageProps} />
          {/* </UserProvider> */}
        </MantineProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
