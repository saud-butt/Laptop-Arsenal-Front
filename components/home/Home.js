import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";

import { getRelatedProduct } from "../../store/actions/productActions";
import ListCard from "../product/list/listCard";
import Style from "./Home.scss";
import Footer from "../layouts/footer/footer";

class Home extends Component {
  componentDidMount() {
    this.props.getRelatedProduct("dell");
  }
  onClick = brand => {
    this.props.getRelatedProduct(brand);
  };
  render() {
    const { products } = this.props;
    const productData = products.map((product, index) => (
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" key={index}>
        <ListCard
          brand={product.brand}
          name={product.name}
          href={`/products/show?id=${product._id}`}
          src={product.images[0]}
          alt={product.name}
          title="Add to Wishlist"
          price={product.price}
        />
      </div>
    ));
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
                          <Link href="/user/account">
                            <a title="My Account">My Account</a>
                          </Link>
                          <Link href="/user/wishlist">
                            <a title="Wishlist">Wishlist</a>
                          </Link>
                          <Link href="/auth/login">
                            <a title="Sign in">Sign in</a>
                          </Link>
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
                    <div className="col-xl-9 col-lg-8">
                      <div className="header-contact-search-wrap header-contact-search-mrg">
                        <div className="header-contact-2">
                          <div className="header-contact-2-icon">
                            <i className="la la-phone" />
                          </div>
                        </div>
                        <div className="search-style-4">
                          <form>
                            <div className="form-search-4">
                              <input
                                id="search"
                                className="input-text"
                                value=""
                                placeholder="Search Hear"
                                type="search"
                              />
                              <button>
                                <i className="la la-search" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-bottom sticky-bar bg-red">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <div className="category-menu-wrap">
                        <h3 className="showcat">
                          <a href="#">
                            <img
                              className="category-menu-non-stick"
                              src="../../static/assets/images/icon-img/category-menu.png"
                              alt="icon"
                            />
                            <img
                              className="category-menu-stick"
                              src="../../static/assets/images/icon-img/category-menu-stick.png"
                              alt="icon"
                            />
                            All Companies <i className="la la-angle-down" />
                          </a>
                        </h3>
                        <div className="category-menu hidecat">
                          <nav>
                            <ul>
                              <li className="cr-dropdown">
                                <a href="#">
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
                                <a href="#">
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
                                <a href="#">
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
                                <a href="#">
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
                                <a href="#">
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
                                <a href="#">
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
                                <a href="#">
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
                                <a href="#">
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
                                <a href="#">
                                  Razer <span className="la la-angle-right" />
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 d-flex justify-content-end">
                      <div className="main-menu menu-common-style menu-lh-5 menu-margin-4 menu-font-2 menu-font-2-white res-hm8-margin">
                        <nav>
                          <ul>
                            <li className="angle-shape">
                              {" "}
                              <Link href="/product/productCompare">
                                <a>Compare</a>
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
                              <Link href="product/reviews">
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
            <div className="bg-red pt-20 pb-20 ct-menu-small-device">
              <div className="container">
                <div className="category-menu-wrap">
                  <h3 className="showcat">
                    <a href="#">
                      <img
                        className="category-menu-non-stick"
                        src="../../static/assets/images/icon-img/category-menu.png"
                        alt="icon"
                      />
                      <img
                        className="category-menu-stick"
                        src="../../static/assets/images/icon-img/category-menu-stick.png"
                        alt="icon"
                      />
                      All Department <i className="la la-angle-down" />
                    </a>
                  </h3>
                  <div className="category-menu mobile-category-menu hidecat">
                    <nav>
                      <ul>
                        <li className="cr-dropdown">
                          <a href="#">
                            Computer <span className="la la-angle-down" />
                          </a>
                          <ul className="cr-menu-desktop-none">
                            <li className="cr-sub-dropdown sub-style">
                              <a href="#">
                                Laptop Accessories{" "}
                                <i className="la la-angle-down" />
                              </a>
                              <ul>
                                <li>
                                  <a href="shop.html">Laptop Keyboard</a>
                                </li>
                                <li>
                                  <a href="shop.html">Laptop Mouse</a>
                                </li>
                                <li>
                                  <a href="shop.html">Bluetooth Speaker</a>
                                </li>
                                <li>
                                  <a href="shop.html">LED Light</a>
                                </li>
                              </ul>
                            </li>
                            <li className="cr-sub-dropdown sub-style">
                              <a href="#">
                                Laptop Accessories{" "}
                                <i className="la la-angle-down" />
                              </a>
                              <ul>
                                <li>
                                  <a href="shop.html">Laptop Keyboard</a>
                                </li>
                                <li>
                                  <a href="shop.html">Laptop Mouse</a>
                                </li>
                                <li>
                                  <a href="shop.html">Bluetooth Speaker</a>
                                </li>
                                <li>
                                  <a href="shop.html">LED Light</a>
                                </li>
                              </ul>
                            </li>
                            <li className="cr-sub-dropdown sub-style">
                              <a href="#">
                                Laptop Accessories{" "}
                                <i className="la la-angle-down" />
                              </a>
                              <ul>
                                <li>
                                  <a href="shop.html">Laptop Keyboard</a>
                                </li>
                                <li>
                                  <a href="shop.html">Laptop Mouse</a>
                                </li>
                                <li>
                                  <a href="shop.html">Bluetooth Speaker</a>
                                </li>
                                <li>
                                  <a href="shop.html">LED Light</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="cr-dropdown">
                          <a href="#">
                            Accessories <span className="la la-angle-down" />
                          </a>
                          <ul className="cr-menu-desktop-none">
                            <li className="cr-sub-dropdown sub-style">
                              <a href="#">
                                Laptop Accessories{" "}
                                <i className="la la-angle-down" />
                              </a>
                              <ul>
                                <li>
                                  <a href="shop.html">Laptop Keyboard</a>
                                </li>
                                <li>
                                  <a href="shop.html">Laptop Mouse</a>
                                </li>
                                <li>
                                  <a href="shop.html">Bluetooth Speaker</a>
                                </li>
                                <li>
                                  <a href="shop.html">LED Light</a>
                                </li>
                              </ul>
                            </li>
                            <li className="cr-sub-dropdown sub-style">
                              <a href="#">
                                Laptop Accessories{" "}
                                <i className="la la-angle-down" />
                              </a>
                              <ul>
                                <li>
                                  <a href="shop.html">Laptop Keyboard</a>
                                </li>
                                <li>
                                  <a href="shop.html">Laptop Mouse</a>
                                </li>
                                <li>
                                  <a href="shop.html">Bluetooth Speaker</a>
                                </li>
                                <li>
                                  <a href="shop.html">LED Light</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="cr-dropdown">
                          <a href="#">
                            Computer Kit <span className="la la-angle-down" />
                          </a>
                          <ul className="cr-menu-desktop-none">
                            <li className="cr-sub-dropdown sub-style">
                              <a href="#">
                                Laptop Accessories{" "}
                                <i className="la la-angle-down" />
                              </a>
                              <ul>
                                <li>
                                  <a href="shop.html">Laptop Keyboard</a>
                                </li>
                                <li>
                                  <a href="shop.html">Laptop Mouse</a>
                                </li>
                                <li>
                                  <a href="shop.html">Bluetooth Speaker</a>
                                </li>
                                <li>
                                  <a href="shop.html">LED Light</a>
                                </li>
                              </ul>
                            </li>
                            <li className="cr-sub-dropdown sub-style">
                              <a href="#">
                                Laptop Accessories{" "}
                                <i className="la la-angle-down" />
                              </a>
                              <ul>
                                <li>
                                  <a href="shop.html">Laptop Keyboard</a>
                                </li>
                                <li>
                                  <a href="shop.html">Laptop Mouse</a>
                                </li>
                                <li>
                                  <a href="shop.html">Bluetooth Speaker</a>
                                </li>
                                <li>
                                  <a href="shop.html">LED Light</a>
                                </li>
                              </ul>
                            </li>
                            <li className="cr-sub-dropdown sub-style">
                              <a href="#">
                                Laptop Accessories{" "}
                                <i className="la la-angle-down" />
                              </a>
                              <ul>
                                <li>
                                  <a href="shop.html">Laptop Keyboard</a>
                                </li>
                                <li>
                                  <a href="shop.html">Laptop Mouse</a>
                                </li>
                                <li>
                                  <a href="shop.html">Bluetooth Speaker</a>
                                </li>
                                <li>
                                  <a href="shop.html">LED Light</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="cr-dropdown">
                          <a href="#">
                            Laptop <span className="la la-angle-down" />
                          </a>
                          <ul className="cr-menu-desktop-none">
                            <li className="cr-sub-dropdown sub-style">
                              <a href="#">
                                Laptop Accessories{" "}
                                <i className="la la-angle-down" />
                              </a>
                              <ul>
                                <li>
                                  <a href="shop.html">Laptop Keyboard</a>
                                </li>
                                <li>
                                  <a href="shop.html">Laptop Mouse</a>
                                </li>
                                <li>
                                  <a href="shop.html">Bluetooth Speaker</a>
                                </li>
                                <li>
                                  <a href="shop.html">LED Light</a>
                                </li>
                              </ul>
                            </li>
                            <li className="cr-sub-dropdown sub-style">
                              <a href="#">
                                Laptop Accessories{" "}
                                <i className="la la-angle-down" />
                              </a>
                              <ul>
                                <li>
                                  <a href="shop.html">Laptop Keyboard</a>
                                </li>
                                <li>
                                  <a href="shop.html">Laptop Mouse</a>
                                </li>
                                <li>
                                  <a href="shop.html">Bluetooth Speaker</a>
                                </li>
                                <li>
                                  <a href="shop.html">LED Light</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="cr-dropdown">
                          <a href="#">Laptop Accessories </a>
                        </li>
                        <li className="cr-dropdown">
                          <a href="#">Smartwatch</a>
                        </li>
                        <li className="cr-dropdown">
                          <a href="#">
                            Accessories <span className="la la-angle-down" />
                          </a>
                          <ul className="cr-menu-desktop-none">
                            <li className="cr-sub-dropdown sub-style">
                              <a href="#">
                                Laptop Accessories{" "}
                                <i className="la la-angle-down" />
                              </a>
                              <ul>
                                <li>
                                  <a href="shop.html">Laptop Keyboard</a>
                                </li>
                                <li>
                                  <a href="shop.html">Laptop Mouse</a>
                                </li>
                                <li>
                                  <a href="shop.html">Bluetooth Speaker</a>
                                </li>
                                <li>
                                  <a href="shop.html">LED Light</a>
                                </li>
                              </ul>
                            </li>
                            <li className="cr-sub-dropdown sub-style">
                              <a href="#">
                                Laptop Accessories{" "}
                                <i className="la la-angle-down" />
                              </a>
                              <ul>
                                <li>
                                  <a href="shop.html">Laptop Keyboard</a>
                                </li>
                                <li>
                                  <a href="shop.html">Laptop Mouse</a>
                                </li>
                                <li>
                                  <a href="shop.html">Bluetooth Speaker</a>
                                </li>
                                <li>
                                  <a href="shop.html">LED Light</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="cr-dropdown">
                          <a href="#">Cameras</a>
                        </li>
                        <li className="cr-dropdown">
                          <a href="#">
                            Mobile Phone <span className="la la-angle-down" />
                          </a>
                          <ul className="cr-menu-desktop-none">
                            <li className="cr-sub-dropdown sub-style">
                              <a href="#">
                                Laptop Accessories{" "}
                                <i className="la la-angle-down" />
                              </a>
                              <ul>
                                <li>
                                  <a href="shop.html">Laptop Keyboard</a>
                                </li>
                                <li>
                                  <a href="shop.html">Laptop Mouse</a>
                                </li>
                                <li>
                                  <a href="shop.html">Bluetooth Speaker</a>
                                </li>
                                <li>
                                  <a href="shop.html">LED Light</a>
                                </li>
                              </ul>
                            </li>
                            <li className="cr-sub-dropdown sub-style">
                              <a href="#">
                                Laptop Accessories{" "}
                                <i className="la la-angle-down" />
                              </a>
                              <ul>
                                <li>
                                  <a href="shop.html">Laptop Keyboard</a>
                                </li>
                                <li>
                                  <a href="shop.html">Laptop Mouse</a>
                                </li>
                                <li>
                                  <a href="shop.html">Bluetooth Speaker</a>
                                </li>
                                <li>
                                  <a href="shop.html">LED Light</a>
                                </li>
                              </ul>
                            </li>
                            <li className="cr-sub-dropdown sub-style">
                              <a href="#">
                                Laptop Accessories{" "}
                                <i className="la la-angle-down" />
                              </a>
                              <ul>
                                <li>
                                  <a href="shop.html">Laptop Keyboard</a>
                                </li>
                                <li>
                                  <a href="shop.html">Laptop Mouse</a>
                                </li>
                                <li>
                                  <a href="shop.html">Bluetooth Speaker</a>
                                </li>
                                <li>
                                  <a href="shop.html">LED Light</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="cr-dropdown">
                          <a href="#">Drone</a>
                        </li>
                        <li className="cr-dropdown">
                          <a href="#">Drone Cameras</a>
                        </li>
                        <li className="cr-dropdown">
                          <a href="#">Apple Products </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="mobile-off-canvas-active">
            <a className="mobile-aside-close">
              <i className="la la-close" />
            </a>
            <div className="header-mobile-aside-wrap">
              <div className="mobile-search">
                <form className="search-form" action="#">
                  <input type="text" placeholder="Search entire store…" />
                  <button className="button-search">
                    <i className="la la-search" />
                  </button>
                </form>
              </div>
              <div className="mobile-menu-wrap">
                {/* <!-- mobile menu start --> */}
                <div className="mobile-navigation">
                  {/* <!-- mobile menu navigation start --> */}
                  <nav>
                    <ul className="mobile-menu">
                      <li className="menu-item-has-children">
                        <a href="index.html">Home</a>
                        <ul className="dropdown">
                          <li>
                            <a href="index.html">Home version 1 </a>
                          </li>
                          <li>
                            <a href="index-2.html">Home version 2 </a>
                          </li>
                          <li>
                            <a href="index-3.html">Home version 3 </a>
                          </li>
                          <li>
                            <a href="index-4.html">Home version 4 </a>
                          </li>
                          <li>
                            <a href="index-5.html">Home version 5 </a>
                          </li>
                          <li>
                            <a href="index-6.html">Home version 6 </a>
                          </li>
                          <li>
                            <a href="index-7.html">Home version 7 </a>
                          </li>
                          <li>
                            <a href="index-8.html">Home version 8 </a>
                          </li>
                          <li>
                            <a href="index-9.html">Home version 9 </a>
                          </li>
                          <li>
                            <a href="index-10.html">Home version 10 </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children ">
                        <a href="#">shop</a>
                        <ul className="dropdown">
                          <li className="menu-item-has-children">
                            <a href="#">shop layout</a>
                            <ul className="dropdown">
                              <li>
                                <a href="shop.html">standard grid style</a>
                              </li>
                              <li>
                                <a href="shop-2.html">standard style 2</a>
                              </li>
                              <li>
                                <a href="shop-2-col.html">shop 2 column</a>
                              </li>
                              <li>
                                <a href="shop-no-sidebar.html">
                                  shop no sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwide.html">shop fullwide</a>
                              </li>
                              <li>
                                <a href="shop-fullwide-no-sidebar.html">
                                  fullwide no sidebar{" "}
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">shop list layout</a>
                            <ul className="dropdown">
                              <li>
                                <a href="shop-list.html">list style</a>
                              </li>
                              <li>
                                <a href="shop-list-2col.html">list 2 column</a>
                              </li>
                              <li>
                                <a href="shop-list-no-sidebar.html">
                                  list no sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">product details</a>
                            <ul className="dropdown">
                              <li>
                                <a href="product-details.html">
                                  standard style
                                </a>
                              </li>
                              <li>
                                <a href="product-details-2.html">
                                  standard style 2
                                </a>
                              </li>
                              <li>
                                <a href="product-details-tab1.html">
                                  tab style 1
                                </a>
                              </li>
                              <li>
                                <a href="product-details-tab2.html">
                                  tab style 2
                                </a>
                              </li>
                              <li>
                                <a href="product-details-tab3.html">
                                  tab style 3{" "}
                                </a>
                              </li>
                              <li>
                                <a href="product-details-gallery.html">
                                  gallery style{" "}
                                </a>
                              </li>
                              <li>
                                <a href="product-details-sticky.html">
                                  sticky style
                                </a>
                              </li>
                              <li>
                                <a href="product-details-slider.html">
                                  slider style
                                </a>
                              </li>
                              <li>
                                <a href="product-details-affiliate.html">
                                  Affiliate style
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="dropdown">
                          <li>
                            <a href="about-us.html">about us </a>
                          </li>
                          <li>
                            <a href="cart.html">cart page </a>
                          </li>
                          <li>
                            <a href="checkout.html">checkout </a>
                          </li>
                          <li>
                            <a href="compare.html">compare </a>
                          </li>
                          <li>
                            <a href="wishlist.html">wishlist </a>
                          </li>
                          <li>
                            <a href="my-account.html">my account </a>
                          </li>
                          <li>
                            <a href="contact.html">contact us </a>
                          </li>
                          <li>
                            <a href="login-register.html">login/register </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children ">
                        <a href="#">Blog</a>
                        <ul className="dropdown">
                          <li>
                            <a href="blog.html">standard style </a>
                          </li>
                          <li>
                            <a href="blog-2col.html">blog 2 column </a>
                          </li>
                          <li>
                            <a href="blog-sidebar.html">blog sidebar </a>
                          </li>
                          <li>
                            <a href="blog-details.html">blog details </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact us</a>
                      </li>
                    </ul>
                  </nav>
                  {/* <!-- mobile menu navigation end --> */}
                </div>
                {/* <!-- mobile menu end --> */}
              </div>
              <div className="mobile-curr-lang-wrap">
                <div className="single-mobile-curr-lang">
                  <a className="mobile-language-active" href="#">
                    Language <i className="la la-angle-down" />
                  </a>
                  <div className="lang-curr-dropdown lang-dropdown-active">
                    <ul>
                      <li>
                        <a href="#">English (US)</a>
                      </li>
                      <li>
                        <a href="#">English (UK)</a>
                      </li>
                      <li>
                        <a href="#">Spanish</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-mobile-curr-lang">
                  <a className="mobile-currency-active" href="#">
                    Currency <i className="la la-angle-down" />
                  </a>
                  <div className="lang-curr-dropdown curr-dropdown-active">
                    <ul>
                      <li>
                        <a href="#">USD</a>
                      </li>
                      <li>
                        <a href="#">EUR</a>
                      </li>
                      <li>
                        <a href="#">Real</a>
                      </li>
                      <li>
                        <a href="#">BDT</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-mobile-curr-lang">
                  <a className="mobile-account-active" href="#">
                    My Account <i className="la la-angle-down" />
                  </a>
                  <div className="lang-curr-dropdown account-dropdown-active">
                    <ul>
                      <li>
                        <a href="#">Login</a>
                      </li>
                      <li>
                        <a href="#">Creat Account</a>
                      </li>
                      <li>
                        <a href="#">My Account</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mobile-social-wrap">
                <a className="facebook" href="#">
                  <i className="ti-facebook" />
                </a>
                <a className="twitter" href="#">
                  <i className="ti-twitter-alt" />
                </a>
                <a className="pinterest" href="#">
                  <i className="ti-pinterest" />
                </a>
                <a className="instagram" href="#">
                  <i className="ti-instagram" />
                </a>
                <a className="google" href="#">
                  <i className="ti-google" />
                </a>
              </div>
            </div>
          </div>
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
                      <h2>All Product</h2>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-9 col-md-10 col-sm-10">
                    <div className="product-tab-list-4 nav">
                      <a href="#product-10">
                        <h5>Dell </h5>
                      </a>
                      <a
                        className="active"
                        href="#product-11"
                        onClick={() => this.onClick("msi")}
                      >
                        <h5>MSI</h5>
                      </a>
                      <a
                        href="#product-12"
                        onClick={() => this.onClick("apple")}
                      >
                        <h5>Apple</h5>
                      </a>
                      <a href="#product-13" onClick={() => this.onClick("hp")}>
                        <h5>HP </h5>
                      </a>
                      <a
                        href="#product-14"
                        onClick={() => this.onClick("razer")}
                      >
                        <h5>Razer</h5>
                      </a>
                      <a
                        href="#product-15"
                        onClick={() => this.onClick("lenovo")}
                      >
                        <h5>Lenovo</h5>
                      </a>
                      <a
                        href="#product-16"
                        onClick={() => this.onClick("acer")}
                      >
                        <h5>Acer</h5>
                      </a>
                      <a
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
              <div className="brand-logo-padding bg-gray-3">
                <div className="brand-logo-active-2 owl-carousel">
                  <div className="single-brand-logo">
                    <img
                      src="../../static/assets/images/brand-logo/brand-logo-5.png"
                      alt=""
                    />
                  </div>
                  <div className="single-brand-logo">
                    <img
                      src="../../static/assets/images/brand-logo/brand-logo-6.png"
                      alt=""
                    />
                  </div>
                  <div className="single-brand-logo">
                    <img
                      src="../../static/assets/images/brand-logo/brand-logo-7.png"
                      alt=""
                    />
                  </div>
                  <div className="single-brand-logo">
                    <img
                      src="../../static/assets/images/brand-logo/brand-logo-8.png"
                      alt=""
                    />
                  </div>
                  <div className="single-brand-logo">
                    <img
                      src="../../static/assets/images/brand-logo/brand-logo-9.png"
                      alt=""
                    />
                  </div>
                  <div className="single-brand-logo">
                    <img
                      src="../../static/assets/images/brand-logo/brand-logo-6.png"
                      alt=""
                    />
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
const mapStateToProps = state => ({
  products: state.products.products,
  pagination: state.products.pagination,
  loader: state.loader
});

export default connect(
  mapStateToProps,
  { getRelatedProduct }
)(Home);
