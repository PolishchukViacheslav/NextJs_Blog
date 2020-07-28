import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from '../redux/store';
import { createWrapper } from 'next-redux-wrapper';

class MyApp extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //Anything returned here can be accessed by the client
  //   return { pageProps: pageProps };
  // }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
