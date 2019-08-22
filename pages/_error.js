import React from "react";
import PropTypes from "prop-types";
import Error from "next/error";

class CustomError extends React.Component {
  static getInitialProps({ res, err }) {
    let statusCode = null;
    if (res) {
      ({ statusCode } = res);
    } else if (err) {
      ({ statusCode } = err);
    }
    return {
      statusCode
    };
  }

  render() {
    return <Error statusCode={this.props.statusCode} />;
  }
}

CustomError.defaultProps = {
  statusCode: null
};

CustomError.propTypes = {
  statusCode: PropTypes.number
};

export default CustomError;
