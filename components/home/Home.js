import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Router from "next/router";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "react-bootstrap/Dropdown";

import { logoutUser } from "../../store/actions/authActions";
import {
  getProduct,
  getRelatedProduct,
  getProductByName
} from "../../store/actions/productActions";
import { clearCurrentUser } from "../../store/actions/userActions";
import ListCard from "../product/list/listCard";
import Style from "./Home.scss";
import Footer from "../layouts/footer/footer";
import ReactSelect from "../reactSelect/ReactSelect";

class Home extends Component {
  componentDidMount() {
    const brand = "dell";
    this.props.getRelatedProduct(brand);
  }
  onClick = brand => {
    this.props.getRelatedProduct(brand);
  };
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentUser();
    this.props.logoutUser();
  }
  onChange = (selectedProduct, key) => {
    //this.props.getProduct(selectedProduct.value, true, key);
    Router.push(`/products/show?id=${selectedProduct.value}`);
    console.log(selectedProduct);
    console.log(key);
  };
  render() {
    const { products } = this.props;
    const { isAuthenticated, user } = this.props.auth;
    const productData = products.map((product, index) => (
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" key={index}>
        <ListCard
          brand={product.brand}
          name={product.name}
          href={`/products/show?id=${product._id}`}
          src={product.cover}
          alt={product.name}
          title="Add to Wishlist"
          price={product.price}
          id={product._id}
        />
      </div>
    ));

    let authLinks = null;

    if (user) {
      authLinks = (
        <>
          <Link href="/user/wishlist">
            <a title="Wishlist">Wishlist</a>
          </Link>
          <Link href="/user/account">
            <a title="My Account">
              <img
                className="rounded-circle"
                src={user.avatar}
                alt={user.name}
                style={{ width: "25px", marginRight: "5px" }}
                title="You must have a Gravatar connected to your email to display image"
              />
              My Account
            </a>
          </Link>

          <a href="" onClick={this.onLogoutClick.bind(this)}>
            Logout <FontAwesomeIcon icon="sign-out-alt" />
          </a>
        </>
      );
    }
    const guestLinks = (
      <>
        <Link href="/auth/login">
          <a title="Sign in">Login</a>
        </Link>
        <Link href="/auth/register">
          <a title="Sign in">Register</a>
        </Link>
      </>
    );

    return (
      <>
        <div className="main-wrapper">
          <header className="header-area">
            <div className="main-header-wrap">
              <div className="header-top pt-15 pb-15 bg-black-4">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="welcome">
                        <p>Welcome to Laptop Arsenal</p>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="setting-wrap-2">
                        <div className="setting-content2-left">
                          <a className="currency-dropdown-active" href="#">
                            USD <i className="la la-angle-down" />
                          </a>
                          <div className="currency-dropdown">
                            <ul>
                              <li>
                                <a href="#">USD</a>
                              </li>
                              <li>
                                <a href="#">Euro</a>
                              </li>
                              <li>
                                <a href="#">Rs.</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="setting-content2-right">
                          {isAuthenticated ? authLinks : guestLinks}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-middle border-top-2 pt-30 pb-30">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-2 col-lg-2">
                      <div className="logo">
                        <a href="/landing/home">
                          <img
                            src="../../static/assets/images/logo/logo-1.png"
                            alt="Laptop Arsenal"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="offset-3 col-xl-7 col-lg-6 ">
                      <ReactSelect
                        className="input-text"
                        onChange={this.onChange}
                        liberateOptions={this.props.getProductByName}
                        placeholder={`Search`}
                        searchedOptions={this.props.searchedProducts}
                      >
                        <FontAwesomeIcon icon="search" />
                      </ReactSelect>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-bottom sticky-bar bg-red">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <div className="category-menu-wrap dropdown">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="none"
                            id="dropdown-basic"
                            className="showcat"
                            style={{ color: "#ffff", fontWeight: "500" }}
                          >
                            <img
                              className="category-menu-non-stick "
                              src="../../static/assets/images/icon-img/category-menu.png"
                              alt="icon"
                            />
                            {"  "}
                            Dropdown Button
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item
                              href="#/action-1"
                              className="dropdown-item"
                            >
                              Acer
                              <Dropdown.Item href="#/action-5">
                                In Acer
                              </Dropdown.Item>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Asus
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Apple
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Dell
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              GigaByte
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">HP</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Lenovo
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">MSI</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Razer
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    {/* <div className="col-lg-4">
                      <div className="category-menu-wrap dropdown">
                        <h3 className="showcat">
                          <button
                            href="#"
                            className="btn dropdown-toggle "
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <img
                              className="category-menu-non-stick "
                              src="../../static/assets/images/icon-img/category-menu.png"
                              alt="icon"
                            />
                            {"  "}All Companies
                          </button>
                        </h3>
                        <div
                          className="category-menu hidecat dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <nav>
                            <ul>
                              <li className="cr-dropdown">
                                <a href="#" class="dropdown-item">
                                  Acer <span className="la la-angle-right" />
                                </a>
                                <div className="category-menu-dropdown ct-menu-res-height-1">
                                  <div className="single-category-menu ct-menu-mrg-bottom category-menu-border">
                                    <ul>
                                      <li>
                                        <a href="shop.html">Standard Laptops</a>
                                      </li>
                                      <li>
                                        <a href="shop.html">Gaming Laptops</a>
                                      </li>
                                      <li>
                                        <a href="shop.html">2 in 1</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className="cr-dropdown">
                                <a href="#" class="dropdown-item">
                                  Asus <span className="la la-angle-right" />
                                </a>
                                <div className="category-menu-dropdown ct-menu-res-height-2">
                                  <div className="single-category-menu">
                                    <ul>
                                      <li>
                                        <a href="shop.html">Standard Laptops</a>
                                      </li>
                                      <li>
                                        <a href="shop.html">2 in 1</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className="cr-dropdown">
                                <a href="#" class="dropdown-item">
                                  Apple <span className="la la-angle-right" />
                                </a>
                                <div className="category-menu-dropdown ct-menu-res-height-1">
                                  <div className="single-category-menu ct-menu-mrg-bottom category-menu-border">
                                    <ul>
                                      <li>
                                        <a href="shop.html">MacBook Air</a>
                                      </li>
                                      <li>
                                        <a href="shop.html">MacBook Pro</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className="cr-dropdown">
                                <a href="#" class="dropdown-item">
                                  Dell <span className="la la-angle-right" />
                                </a>
                                <div className="category-menu-dropdown ct-menu-res-height-2">
                                  <div className="single-category-menu">
                                    <ul>
                                      <li>
                                        <a href="#">Home</a>
                                      </li>
                                      <li>
                                        <a href="#">Work</a>
                                      </li>
                                      <li>
                                        <a href="#">2 in 1</a>
                                      </li>
                                      <li>
                                        <a href="#">Alienware</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className="cr-dropdown">
                                <a href="#" class="dropdown-item">
                                  GigaByte{" "}
                                  <span className="la la-angle-right" />
                                </a>
                                <div className="category-menu-dropdown ct-menu-res-height-2">
                                  <div className="single-category-menu">
                                    <ul>
                                      <li>
                                        <a href="#">Standard Laptops</a>
                                      </li>
                                      <li>
                                        <a href="#">Gaming Laptops</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className="cr-dropdown">
                                <a href="#" class="dropdown-item">
                                  HP <span className="la la-angle-right" />
                                </a>
                                <div className="category-menu-dropdown ct-menu-res-height-2">
                                  <div className="single-category-menu">
                                    <ul>
                                      <li>
                                        <a href="#">Standard Laptops</a>
                                      </li>
                                      <li>
                                        <a href="#">Work Laptops</a>
                                      </li>
                                      <li>
                                        <a href="#">Primium Laptops</a>
                                      </li>

                                      <li>
                                        <a href="#">2 in 1</a>
                                      </li>
                                      <li>
                                        <a href="#">Workstations</a>
                                      </li>
                                      <li>
                                        <a href="#">Omen</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className="cr-dropdown">
                                <a href="#" class="dropdown-item">
                                  Lenovo <span className="la la-angle-right" />
                                </a>
                                <div className="category-menu-dropdown ct-menu-res-height-2">
                                  <div className="single-category-menu">
                                    <ul>
                                      <li>
                                        <a href="#">Standard Laptops</a>
                                      </li>
                                      <li>
                                        <a href="#">Workstations</a>
                                      </li>
                                      <li>
                                        <a href="#">2 in 1</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className="cr-dropdown">
                                <a href="#" class="dropdown-item">
                                  MSI <span className="la la-angle-right" />
                                </a>
                                <div className="category-menu-dropdown ct-menu-res-height-2">
                                  <div className="single-category-menu">
                                    <ul>
                                      <li>
                                        <a href="#">Standard Laptops</a>
                                      </li>
                                      <li>
                                        <a href="#">Workstations</a>
                                      </li>
                                      <li>
                                        <a href="#">Gaming Laptops</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className="cr-dropdown">
                                <a href="#" class="dropdown-item">
                                  Razer <span className="la la-angle-right" />
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-md-8 d-flex justify-content-end">
                      <div className="main-menu menu-common-style menu-lh-5 menu-margin-4 menu-font-2 menu-font-2-white res-hm8-margin">
                        <nav>
                          <ul>
                            <li className="angle-shape">
                              {" "}
                              <Link href="/products">
                                <a>All Products</a>
                              </Link>
                            </li>
                            <li className="angle-shape">
                              <Link href="product/productCompare">
                                <a href="shop.html">Laptop Finder</a>
                              </Link>
                            </li>

                            <li className="angle-shape">
                              <Link href="/news/news">
                                <a className="menu-title" href="#">
                                  News
                                </a>
                              </Link>
                            </li>
                            <li className="angle-shape">
                              <Link href="products/reviews">
                                <a className="menu-title" href="#">
                                  Reviews
                                </a>
                              </Link>
                            </li>
                            <li className="angle-shape">
                              <Link href="product/benchmarks">
                                <a href="shop.html">Benchmarks </a>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-small-mobile">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="mobile-logo">
                      <a href="index.html">
                        <img
                          alt=""
                          src="../../static/assets/images/logo/logo-1.png"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="slider-area pt-20">
            <div className="container">
              <div className="slider-active-4 owl-carousel dot-style-2">
                <div
                  className={`slider-height-8 bg-img res-white-overly-xs ${Style.bgImage1}`}
                ></div>
              </div>
            </div>
          </div>

          <div className="product-area pb-40 pt-20">
            <div className="container">
              <div className="section-title-tab-wrap">
                <div className="row">
                  <div className="col-xl-4 col-lg-3 col-md-4 col-sm-4">
                    <div className="section-title-5">
                      <h2>Companies</h2>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-9 col-md-10 col-sm-10">
                    <div className="product-tab-list-4 nav">
                      <a className="active comp" href="#product-10">
                        <h5>Dell </h5>
                      </a>
                      <a
                        className="comp"
                        href="#product-11"
                        onClick={() => this.onClick("msi")}
                      >
                        <h5>MSI</h5>
                      </a>
                      <a
                        className="comp"
                        href="#product-12"
                        onClick={() => this.onClick("apple")}
                      >
                        <h5>Apple</h5>
                      </a>
                      <a
                        className="comp"
                        href="#product-13"
                        onClick={() => this.onClick("hp")}
                      >
                        <h5>HP </h5>
                      </a>
                      <a
                        className="comp"
                        href="#product-14"
                        onClick={() => this.onClick("razer")}
                      >
                        <h5>Razer</h5>
                      </a>
                      <a
                        className="comp"
                        href="#product-15"
                        onClick={() => this.onClick("lenovo")}
                      >
                        <h5>Lenovo</h5>
                      </a>
                      <a
                        className="comp"
                        href="#product-16"
                        onClick={() => this.onClick("acer")}
                      >
                        <h5>Acer</h5>
                      </a>
                      <a
                        className="comp"
                        href="#product-17"
                        onClick={() => this.onClick("gigabyte")}
                      >
                        <h5>GigaByte</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-content jump">
                <div id="product-10" className="tab-pane active">
                  <div className="row">{productData}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="brand-logo-area pb-70">
            <div className="container">
              <div className="brand-logo bg-gray-3">
                <div className="row brand-logo-active-2">
                  <div className="single-brand-logo col">
                    <a href="https://us-store.acer.com">
                      <img
                        className="logo-img"
                        src="../../static/images/acer_logo.png"
                        alt="Acer"
                      />
                    </a>
                  </div>

                  <div className="single-brand-logo col">
                    <a href="https://www.asus.com">
                      <img
                        className="logo-img"
                        src="../../static/images/Asus-Logo.png"
                        alt="Asus"
                      />
                    </a>
                  </div>
                  <div className="single-brand-logo col">
                    <a href="https://www.razer.com">
                      <img
                        className="logo-img"
                        src="../../static/images/razer_logo.png"
                        alt="Razer"
                      />
                    </a>
                  </div>

                  <div className="single-brand-logo col">
                    <a href="https://www.dell.com.pk">
                      <img
                        className="logo-img"
                        src="../../static/images/dell-logo.png"
                        alt="Dell"
                      />
                    </a>
                  </div>
                  <div className="single-brand-logo col">
                    <a href="https://www.gigabyte.com">
                      <img
                        className="logo-img"
                        src="../../static/images/gigabyte-logo.png"
                        alt="GigaByte"
                      />
                    </a>
                  </div>

                  <div className="single-brand-logo col">
                    <a href="https://www.lenovo.com/pk/en?Redirect=False">
                      <img
                        className="logo-img"
                        src="../../static/images/lenovo-logo.png"
                        alt="Lenovo"
                      />
                    </a>
                  </div>
                  <div className="single-brand-logo col">
                    <a href="https://www.apple.com">
                      <img
                        className="logo-img"
                        src="../../static/images/Apple_logo.png"
                        alt="Apple"
                      />
                    </a>
                  </div>
                  <div className="single-brand-logo col">
                    <a href="https://www.msi.com/index.php">
                      <img
                        className="logo-img"
                        src="../../static/images/msi_logo.png"
                        alt="MSI"
                      />
                    </a>
                  </div>
                  <div className="single-brand-logo col">
                    <a href="https://store.hp.com/us/en">
                      <img
                        className="logo-img col"
                        src="../../static/images/hp-logo.png"
                        alt="HP"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  products: state.products.products,
  pagination: state.products.pagination,
  searchedProducts: state.products.searchedProducts,
  loader: state.loader,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  logoutUser,
  getProduct,
  clearCurrentUser,
  getRelatedProduct,
  getProductByName
})(Home);
