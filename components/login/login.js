import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../layouts/basicLayout/layout";
import Link from "next/link";
import PropTypes from "prop-types";
import Router from "next/router";

import { loginUser } from "../../store/actions/authActions";
import { toggleLoader } from "../../store/actions/loading";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      Router.push("/");
    }
    this.props.toggleLoader(false);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      Router.push("/");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <>
        <Layout>
          <div className="login-register-area pt-50 pb-90">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                  <div className="login-register-wrapper">
                    <div className="login-register-tab-list nav">
                      <Link href="/auth/login">
                        <a className="active" title="Login">
                          <h4> login </h4>
                        </a>
                      </Link>
                      <Link href="/auth/register">
                        <a title="Register">
                          <h4> register </h4>
                        </a>
                      </Link>
                    </div>
                    <div className="tab-content">
                      <div id="lg1" className="tab-pane active">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={this.onSubmit}>
                              <input
                                placeholder="Email Address"
                                name="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.onChange}
                                error={errors.email}
                              />
                              <input
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.onChange}
                                error={errors.password}
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn"></div>
                                <button type="submit">Login</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { toggleLoader, loginUser })(Login);
