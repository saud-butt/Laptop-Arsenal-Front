import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Style from "./header.scss";
import { logoutUser } from "../../../store/actions/authActions";
import { clearCurrentUser } from "../../../store/actions/userActions";

class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentUser();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <>
        <div className="header-wishlist">
          <a href="/user/wishlist">
            <FontAwesomeIcon icon={["far", "heart"]} />
          </a>
        </div>
        <div className="header-login ml-40">
          <a href="" onClick={this.onLogoutClick.bind(this)}>
            <FontAwesomeIcon icon="sign-out-alt" />
          </a>
        </div>
      </>
    );
    const guestLinks = (
      <div className="header-login ml-40">
        <a href="/auth/login">
          <FontAwesomeIcon icon={["far", "user-circle"]} />
        </a>
      </div>
    );

    return (
      <header className={`header-area transparent-bar ${Style.sticky} pt-10`}>
        <div className="main-header-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-3">
                <div className="logo">
                  <Link href="/landing/home">
                    <a href="/landing/home">
                      <img src="../../../static/images/logo.png" alt="logo" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="main-menu menu-common-style menu-lh-1 menu-margin-4 menu-font-3 ml-20 menu-others-page">
                  <nav>
                    <ul>
                      <li className="angle-shape">
                        <Link href="/products">
                          <a>Laptops</a>
                        </Link>
                        <ul className="submenu">
                          <li>
                            <a href="index.html">Acer</a>
                          </li>
                          <li>
                            <a href="index-2.html">Apple </a>
                          </li>
                          <li>
                            <a href="index-3.html">Asus </a>
                          </li>
                          <li>
                            <a href="index-4.html">Dell </a>
                          </li>
                          <li>
                            <a href="index-5.html">GigaByte </a>
                          </li>
                          <li>
                            <a href="index-6.html">Razer </a>
                          </li>
                          <li>
                            <a href="index-7.html">Lenovo </a>
                          </li>
                          <li>
                            <a href="index-8.html">MSI </a>
                          </li>
                          <li>
                            <a href="index-9.html">Samsung </a>
                          </li>
                        </ul>
                      </li>
                      <li className="angle-shape">
                        <a href="shop.html">Tablets </a>
                        <ul className="submenu">
                          <li>
                            <a href="index.html">Acer</a>
                          </li>

                          <li>
                            <a href="index-3.html">Asus </a>
                          </li>
                          <li>
                            <a href="index-4.html">Dell </a>
                          </li>

                          <li>
                            <a href="index-7.html">Lenovo </a>
                          </li>

                          <li>
                            <a href="index-9.html">Samsung </a>
                          </li>
                        </ul>
                      </li>

                      <li className="angle-shape">
                        <Link href="/products/compare">
                          <a>Compare</a>
                        </Link>
                      </li>
                      <li className="angle-shape">
                        <Link href="/reviews">
                          <a>Reviews</a>
                        </Link>
                      </li>
                      <li className="angle-shape">
                        <Link href="/contact">
                          <a>Contact Us</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="header-right-wrap mt-10">
                  {isAuthenticated ? authLinks : guestLinks}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { clearCurrentUser, logoutUser })(
  Header
);
