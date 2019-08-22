import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import ProductDetails from "../components/product/productDetail/ProductDetail";
import ProductCompare from "../components/product/productCompare/ProductCompare";
import ProductList from "../components/product/productList/ProductList";

import initStore from "../store/store";

class LaptopArsenal extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          {/* <Component {...pageProps} /> */}
          <ProductCompare />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(LaptopArsenal);
