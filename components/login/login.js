import React, { Component } from "react";
import Layout from "../layouts/basicLayout/layout";
import Link from "next/link";

class Login extends Component {
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
                      <Link href="/login">
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
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label>Remember me</label>
                                  <a href="#">Forgot Password?</a>
                                </div>
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

export default Login;
