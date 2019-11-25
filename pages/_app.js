import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { library } from "@fortawesome/fontawesome-svg-core";
import SetAxiosDefault from "../utils/setAxiosDefault";

import {
  faBars,
  faSearch,
  faTrashAlt,
  faDiceD20,
  faTh,
  faList,
  faSignOutAlt,
  faScrewdriver,
  faThumbsUp
} from "@fortawesome/free-solid-svg-icons";

import {
  faHeart,
  faUserCircle,
  faEye
} from "@fortawesome/free-regular-svg-icons";

import initStore from "../store/store";
import Loader from "../components/loader/Loader";
import {
  persistLogin,
  setCurrentUser,
  logoutUser
} from "../store/actions/authActions";
import { clearCurrentUser } from "../store/actions/userActions";

library.add(
  faBars,
  faSearch,
  faTrashAlt,
  faHeart,
  faUserCircle,
  faEye,
  faDiceD20,
  faTh,
  faList,
  faSignOutAlt,
  faScrewdriver,
  faThumbsUp
);

SetAxiosDefault();

class LaptopArsenal extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    const decoded = persistLogin();
    // Set user and isAuthenticated
    this.props.store.dispatch(setCurrentUser(decoded));
    if (decoded) {
      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // Logout user
        this.props.store.dispatch(logoutUser());
        // Clear current user
        this.props.store.dispatch(clearCurrentUser());
      }
    }
  }

  render() {
    const { Component, pageProps, store, loading } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Loader />
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(LaptopArsenal);
