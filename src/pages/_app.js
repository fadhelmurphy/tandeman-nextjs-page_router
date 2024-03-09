// pages/_app.js
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';// Import Mantine styles

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
