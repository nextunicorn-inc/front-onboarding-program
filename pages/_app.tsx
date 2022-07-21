import type { AppProps } from 'next/app';

import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'wicg-inert';

import { ModalProvider } from '../commonUi/Modal';

function MyApp({ Component, pageProps }: AppProps) {
  const [client] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <Hydrate state={pageProps.reactQueryData}>
        <ReactQueryDevtools initialIsOpen />
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
