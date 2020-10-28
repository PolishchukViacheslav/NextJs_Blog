import App, { AppContext, AppProps } from 'next/app';
import React from 'react';
import { wrapper } from '../src/redux/store';
import Head from 'next/head';

function HomeApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Blog</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

HomeApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default wrapper.withRedux(HomeApp);
