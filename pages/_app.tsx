import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { LayoutContextProvider } from '../contexts/LayoutContext';

function MyApp({ Component, pageProps }: AppProps) {
  return <LayoutContextProvider>
    <Component {...pageProps} />
  </LayoutContextProvider>;
}

export default MyApp;
