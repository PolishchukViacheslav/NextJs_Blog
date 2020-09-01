import App, { AppInitialProps, AppContext } from 'next/app';
import React from 'react';
import { wrapper } from '../src/redux/store';
import Head from 'next/head';

class HomeApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        appProp: ctx.pathname,
      },
    };
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>NextJS Blog</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default wrapper.withRedux(HomeApp);
