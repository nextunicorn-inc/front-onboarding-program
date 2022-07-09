import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '../styles/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const [client] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <Hydrate state={pageProps.reactQueryData}>
        <ReactQueryDevtools initialIsOpen />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
