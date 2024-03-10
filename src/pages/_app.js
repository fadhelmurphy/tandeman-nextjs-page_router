// pages/_app.js
import { MantineProvider } from "@mantine/core";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "@mantine/core/styles.css"; // Import Mantine styles
import { defaultOptions } from "@/query/options";

function MyApp({ Component, pageProps }) {
  /* Create a client */
  const queryClient = new QueryClient({
    defaultOptions,
  });
  return (
    <QueryClientProvider client={queryClient} state={pageProps.dehydratedState}>
    <Hydrate state={pageProps.dehydratedState}>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
