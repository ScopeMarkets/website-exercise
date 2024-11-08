import '@/styles/globals.css';
import '@/styles/cookie-bot-override.css';

import { type NextPage } from 'next';
import { type AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Layout from '@/components/Layout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

/**
 * The `Component` prop is the active page, so whenever you navigate between routes, `Component` will change to the new page.
 * Therefore, any props you send to `Component` will be received by the page.
 *
 * `pageProps` is an object with the initial props that were preloaded for your page
 * by one of our data fetching methods, otherwise it's an empty object.
 */
function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout;

  if (getLayout) {
    return getLayout(<Component {...pageProps} />);
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);
