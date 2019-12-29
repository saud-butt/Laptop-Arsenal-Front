import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../layouts/basicLayout/layout";
import Link from "next/link";
import PropTypes from "prop-types";
import Router from "next/router";
import $ from "jquery";

import { toggleLoader } from "../../store/actions/loading";
import { registerUser } from "../../store/actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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

    $(document).ready(function() {
      $("html, body").animate(
        {
          scrollTop: $(".login-register-tab-list").offset().top
        },
        "slow"
      );
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser);
  }
  render() {
    const { errors } = this.state;
    return (
      <>
        <Layout>
          <div className="login-register-area pt-85 pb-90">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                  <div className="login-register-wrapper">
                    <div className="login-register-tab-list nav">
                      <Link href="/auth/login">
                        <a title="Login">
                          <h4> login </h4>
                        </a>
                      </Link>
                      <Link href="/auth/register">
                        <a className="active" title="Register">
                          <h4> register </h4>
                        </a>
                      </Link>
                    </div>
                    <div id="lg2" className="tab-pane">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form noValidate onSubmit={this.onSubmit}>
                            <TextFieldGroup
                              placeholder="Name"
                              name="name"
                              value={this.state.name}
                              onChange={this.onChange}
                              error={errors.name}
                            />

                            <TextFieldGroup
                              placeholder="Email Address"
                              name="email"
                              type="email"
                              value={this.state.email}
                              onChange={this.onChange}
                              error={errors.email}
                            />
                            <TextFieldGroup
                              placeholder="Password"
                              name="password"
                              type="password"
                              value={this.state.password}
                              onChange={this.onChange}
                              error={errors.password}
                            />
                            <TextFieldGroup
                              placeholder="Confirm Password"
                              name="password2"
                              type="password"
                              value={this.state.password2}
                              onChange={this.onChange}
                              error={errors.password}
                            />

                            <div className="button-box">
                              <button type="submit">Register</button>
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
        </Layout>
      </>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { toggleLoader, registerUser })(
  Register
);
