import React, { Component } from "react";
import { connect } from "react-redux";

import Style from "./Loader.scss";
import AnimatedLogo from "../AnimatedLogo";

class Loader extends Component {
  state = {
    show: true
  };

  static getDerivedStateFromProps(props, state) {
    return props.loading !== state.show ? { show: props.loading } : {};
  }

  render() {
    return (
      <div
        className={this.state.show ? Style.show : Style.hide}
        id={Style.loaderWrapper}
      >
        <AnimatedLogo theme="onOverlay" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loader.loading
});

export default connect(mapStateToProps)(Loader);
