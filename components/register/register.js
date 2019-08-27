import React, { Component } from "react";
import Layout from "../layouts/basicLayout/layout";
import Link from "next/link";

class Register extends Component {
  render() {
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
                      <Link href="/register">
                        <a className="active" title="Register">
                          <h4> register </h4>
                        </a>
                      </Link>
                    </div>
                    <div id="lg2" className="tab-pane">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form action="#" method="post">
                            <input
                              type="text"
                              name="user-name"
                              placeholder="Username"
                            />
                            <input
                              type="password"
                              name="user-password"
                              placeholder="Password"
                            />
                            <input
                              name="user-email"
                              placeholder="Email"
                              type="email"
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

export default Register;
