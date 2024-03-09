// pages/_app.js
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "@mantine/core/styles.css"; // Import Mantine styles

function MyApp({ Component, pageProps }) {
  /* Create a client */
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
        refetchOnReconnect: 'always',
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchInterval: false,
        refetchIntervalInBackground: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
