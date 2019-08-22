import React, { Component } from "react";
import Layout from '../../layouts/basicLayout/layout';
import layout from "../../layouts/basicLayout/layout";

class ListItem extends Component {
  render() {
    return (
      <>
      <Layout>
        <div className="shop-area pt-90 pb-90">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-9">
                <div className="shop-topbar-wrapper">
                  <div className="shop-topbar-left">
                    <div className="view-mode nav">
                      <a className="active" href="#shop-1" data-toggle="tab">
                        <i className="la la-th" />
                      </a>
                      <a href="#shop-2" data-toggle="tab">
                        <i className="la la-list-ul" />
                      </a>
                    </div>
                    <p>Showing 1 - 20 of 30 results </p>
                  </div>
                  <div className="product-sorting-wrapper">
                    <div className="product-shorting shorting-style">
                      <label>View:</label>
                      <select>
                        <option value=""> 20</option>
                        <option value=""> 23</option>
                        <option value=""> 30</option>
                      </select>
                    </div>
                    <div className="product-show shorting-style">
                      <label>Sort by:</label>
                      <select>
                        <option value="">Default</option>
                        <option value=""> Name</option>
                        <option value=""> price</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="shop-bottom-area">
                  <div className="tab-content jump">
                    <div id="shop-1" className="tab-pane active">
                      <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                          <div className="product-wrap mb-35">
                            <div className="product-img mb-15">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="product"
                                />
                              </a>
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                              </div>
                            </div>
                            <div className="product-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="price-addtocart">
                                <div className="product-price">
                                  <span>$210.00</span>
                                </div>
                                <div className="product-addtocart">
                                  <a title="Add To Cart" href="#">
                                    + Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                          <div className="product-wrap mb-35">
                            <div className="product-img mb-15">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="product"
                                />
                              </a>
                              <span className="price-dec">-30%</span>
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                              </div>
                            </div>
                            <div className="product-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="price-addtocart">
                                <div className="product-price">
                                  <span>$250.00</span>
                                  <span className="old">$270.00</span>
                                </div>
                                <div className="product-addtocart">
                                  <a title="Add To Cart" href="#">
                                    + Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                          <div className="product-wrap mb-35">
                            <div className="product-img mb-15">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="product"
                                />
                              </a>
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                              </div>
                            </div>
                            <div className="product-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="price-addtocart">
                                <div className="product-price">
                                  <span>$200.00</span>
                                </div>
                                <div className="product-addtocart">
                                  <a title="Add To Cart" href="#">
                                    + Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                          <div className="product-wrap mb-35">
                            <div className="product-img mb-15">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="product"
                                />
                              </a>
                              <span className="price-dec font-dec">NEW</span>
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                              </div>
                            </div>
                            <div className="product-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="price-addtocart">
                                <div className="product-price">
                                  <span>$220.00</span>
                                </div>
                                <div className="product-addtocart">
                                  <a title="Add To Cart" href="#">
                                    + Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                          <div className="product-wrap mb-35">
                            <div className="product-img mb-15">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="product"
                                />
                              </a>
                              <span className="new-stock">
                                <span>
                                  Stock <br />
                                  Out
                                </span>
                              </span>
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                              </div>
                            </div>
                            <div className="product-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="price-addtocart">
                                <div className="product-price">
                                  <span>$250.00</span>
                                  <span className="old">$260.00</span>
                                </div>
                                <div className="product-addtocart">
                                  <a title="Add To Cart" href="#">
                                    + Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                          <div className="product-wrap mb-35">
                            <div className="product-img mb-15">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="product"
                                />
                              </a>
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                              </div>
                            </div>
                            <div className="product-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="price-addtocart">
                                <div className="product-price">
                                  <span>$260.00</span>
                                </div>
                                <div className="product-addtocart">
                                  <a title="Add To Cart" href="#">
                                    + Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                          <div className="product-wrap mb-35">
                            <div className="product-img mb-15">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="product"
                                />
                              </a>
                              <span className="price-dec font-dec">NEW</span>
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                              </div>
                            </div>
                            <div className="product-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="price-addtocart">
                                <div className="product-price">
                                  <span>$240.00</span>
                                  <span className="old">$290.00</span>
                                </div>
                                <div className="product-addtocart">
                                  <a title="Add To Cart" href="#">
                                    + Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                          <div className="product-wrap mb-35">
                            <div className="product-img mb-15">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="product"
                                />
                              </a>
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                              </div>
                            </div>
                            <div className="product-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="price-addtocart">
                                <div className="product-price">
                                  <span>$280.00</span>
                                </div>
                                <div className="product-addtocart">
                                  <a title="Add To Cart" href="#">
                                    + Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                          <div className="product-wrap mb-35">
                            <div className="product-img mb-15">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="product"
                                />
                              </a>
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                              </div>
                            </div>
                            <div className="product-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="price-addtocart">
                                <div className="product-price">
                                  <span>$210.00</span>
                                </div>
                                <div className="product-addtocart">
                                  <a title="Add To Cart" href="#">
                                    + Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                          <div className="product-wrap mb-35">
                            <div className="product-img mb-15">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="product"
                                />
                              </a>
                              <span className="price-dec">-30%</span>
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                              </div>
                            </div>
                            <div className="product-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="price-addtocart">
                                <div className="product-price">
                                  <span>$250.00</span>
                                  <span className="old">$270.00</span>
                                </div>
                                <div className="product-addtocart">
                                  <a title="Add To Cart" href="#">
                                    + Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                          <div className="product-wrap mb-35">
                            <div className="product-img mb-15">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="product"
                                />
                              </a>
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                              </div>
                            </div>
                            <div className="product-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="price-addtocart">
                                <div className="product-price">
                                  <span>$200.00</span>
                                </div>
                                <div className="product-addtocart">
                                  <a title="Add To Cart" href="#">
                                    + Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                          <div className="product-wrap mb-35">
                            <div className="product-img mb-15">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="product"
                                />
                              </a>
                              <span className="price-dec font-dec">NEW</span>
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                              </div>
                            </div>
                            <div className="product-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="price-addtocart">
                                <div className="product-price">
                                  <span>$220.00</span>
                                </div>
                                <div className="product-addtocart">
                                  <a title="Add To Cart" href="#">
                                    + Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                          <div className="product-wrap mb-35">
                            <div className="product-img mb-15">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="product"
                                />
                              </a>
                              <span className="new-stock">
                                <span>
                                  Stock <br />
                                  Out
                                </span>
                              </span>
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                              </div>
                            </div>
                            <div className="product-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="price-addtocart">
                                <div className="product-price">
                                  <span>$250.00</span>
                                  <span className="old">$260.00</span>
                                </div>
                                <div className="product-addtocart">
                                  <a title="Add To Cart" href="#">
                                    + Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                          <div className="product-wrap mb-35">
                            <div className="product-img mb-15">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="product"
                                />
                              </a>
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                              </div>
                            </div>
                            <div className="product-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="price-addtocart">
                                <div className="product-price">
                                  <span>$260.00</span>
                                </div>
                                <div className="product-addtocart">
                                  <a title="Add To Cart" href="#">
                                    + Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                          <div className="product-wrap mb-35">
                            <div className="product-img mb-15">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="product"
                                />
                              </a>
                              <span className="price-dec font-dec">NEW</span>
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                              </div>
                            </div>
                            <div className="product-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="price-addtocart">
                                <div className="product-price">
                                  <span>$240.00</span>
                                  <span className="old">$290.00</span>
                                </div>
                                <div className="product-addtocart">
                                  <a title="Add To Cart" href="#">
                                    + Add To Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="shop-2" className="tab-pane">
                      <div className="shop-list-wrap mb-30">
                        <div className="row">
                          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                            <div className="product-list-img">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="Product Style"
                                />
                              </a>
                              <div className="product-list-quickview">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-6">
                            <div className="shop-list-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="pro-list-price">
                                <span>$40.00</span>
                                <span className="old-price">$50.00</span>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipic
                                it, sed do eiusmod tempor labor incididunt ut et
                                dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi
                                ut aliquip.
                              </p>
                              <div className="product-list-action">
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                                <a title="Add To Cart" href="#">
                                  <i className="la la-shopping-cart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30">
                        <div className="row">
                          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                            <div className="product-list-img">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="Product Style"
                                />
                              </a>
                              <div className="product-list-quickview">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-6">
                            <div className="shop-list-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="pro-list-price">
                                <span>$50.00</span>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipic
                                it, sed do eiusmod tempor labor incididunt ut et
                                dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi
                                ut aliquip.
                              </p>
                              <div className="product-list-action">
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                                <a title="Add To Cart" href="#">
                                  <i className="la la-shopping-cart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30">
                        <div className="row">
                          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                            <div className="product-list-img">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="Product Style"
                                />
                              </a>
                              <div className="product-list-quickview">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-6">
                            <div className="shop-list-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="pro-list-price">
                                <span>$40.00</span>
                                <span className="old-price">$50.00</span>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipic
                                it, sed do eiusmod tempor labor incididunt ut et
                                dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi
                                ut aliquip.
                              </p>
                              <div className="product-list-action">
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                                <a title="Add To Cart" href="#">
                                  <i className="la la-shopping-cart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30">
                        <div className="row">
                          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                            <div className="product-list-img">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="Product Style"
                                />
                              </a>
                              <div className="product-list-quickview">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-6">
                            <div className="shop-list-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="pro-list-price">
                                <span>$90.00</span>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipic
                                it, sed do eiusmod tempor labor incididunt ut et
                                dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi
                                ut aliquip.
                              </p>
                              <div className="product-list-action">
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                                <a title="Add To Cart" href="#">
                                  <i className="la la-shopping-cart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30">
                        <div className="row">
                          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                            <div className="product-list-img">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="Product Style"
                                />
                              </a>
                              <div className="product-list-quickview">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-6">
                            <div className="shop-list-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="pro-list-price">
                                <span>$60.00</span>
                                <span className="old-price">$80.00</span>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipic
                                it, sed do eiusmod tempor labor incididunt ut et
                                dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi
                                ut aliquip.
                              </p>
                              <div className="product-list-action">
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                                <a title="Add To Cart" href="#">
                                  <i className="la la-shopping-cart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30">
                        <div className="row">
                          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                            <div className="product-list-img">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="Product Style"
                                />
                              </a>
                              <div className="product-list-quickview">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-6">
                            <div className="shop-list-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="pro-list-price">
                                <span>$70.00</span>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipic
                                it, sed do eiusmod tempor labor incididunt ut et
                                dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi
                                ut aliquip.
                              </p>
                              <div className="product-list-action">
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                                <a title="Add To Cart" href="#">
                                  <i className="la la-shopping-cart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list-wrap mb-30">
                        <div className="row">
                          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                            <div className="product-list-img">
                              <a href="product-details.html">
                                <img
                                  src="../static/images/1.jpg"
                                  alt="Product Style"
                                />
                              </a>
                              <div className="product-list-quickview">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className="la la-plus" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-6">
                            <div className="shop-list-content">
                              <span>Chair</span>
                              <h4>
                                <a href="product-details.html">
                                  Golden Easy Spot Chair.
                                </a>
                              </h4>
                              <div className="pro-list-price">
                                <span>$50.00</span>
                                <span className="old-price">$60.00</span>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipic
                                it, sed do eiusmod tempor labor incididunt ut et
                                dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi
                                ut aliquip.
                              </p>
                              <div className="product-list-action">
                                <a title="Wishlist" href="#">
                                  <i className="la la-heart-o" />
                                </a>
                                <a title="Compare" href="#">
                                  <i className="la la-retweet" />
                                </a>
                                <a title="Add To Cart" href="#">
                                  <i className="la la-shopping-cart" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pagination-style text-center">
                      <ul>
                        <li>
                          <a className="prev" href="#">
                            <i className="la la-angle-left" />
                          </a>
                        </li>
                        <li>
                          <a href="#">01</a>
                        </li>
                        <li>
                          <a href="#">02</a>
                        </li>
                        <li>
                          <a className="active" href="#">
                            03
                          </a>
                        </li>
                        <li>
                          <a href="#">04</a>
                        </li>
                        <li>
                          <a href="#">05</a>
                        </li>
                        <li>
                          <a href="#">06</a>
                        </li>
                        <li>
                          <a className="next" href="#">
                            <i className="la la-angle-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="sidebar-wrapper">
                  <div className="sidebar-widget">
                    <h4 className="sidebar-title">Search </h4>
                    <div className="sidebar-search mb-40 mt-20">
                      <form className="sidebar-search-form" action="#">
                        <input type="text" placeholder="Search here..." />
                        <button>
                          <i className="la la-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="sidebar-widget shop-sidebar-border pt-40">
                    <h4 className="sidebar-title">Shop By Categories</h4>
                    <div className="shop-catigory mt-20">
                      <ul id="faq">
                        <li>
                          {" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#shop-catigory-1"
                          >
                            Women Fashion <i className="la la-angle-down" />
                          </a>
                          <ul
                            id="shop-catigory-1"
                            className="panel-collapse collapse show"
                          >
                            <li>
                              <a href="#">Dress </a>
                            </li>
                            <li>
                              <a href="#">Shoes</a>
                            </li>
                            <li>
                              <a href="#">Sunglasses </a>
                            </li>
                            <li>
                              <a href="#">Sweater </a>
                            </li>
                            <li>
                              <a href="#">Handbag </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#shop-catigory-2"
                          >
                            Men Fashion <i className="la la-angle-down" />
                          </a>
                          <ul
                            id="shop-catigory-2"
                            className="panel-collapse collapse"
                          >
                            <li>
                              <a href="#">Shirt </a>
                            </li>
                            <li>
                              <a href="#">Shoes</a>
                            </li>
                            <li>
                              <a href="#">Sunglasses </a>
                            </li>
                            <li>
                              <a href="#">Sweater </a>
                            </li>
                            <li>
                              <a href="#">Jacket </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#shop-catigory-3"
                          >
                            Furniture <i className="la la-angle-down" />
                          </a>
                          <ul
                            id="shop-catigory-3"
                            className="panel-collapse collapse"
                          >
                            <li>
                              <a href="#"> Chair</a>
                            </li>
                            <li>
                              <a href="#">Lift Chair</a>
                            </li>
                            <li>
                              <a href="#">Bunk Bed</a>
                            </li>
                            <li>
                              <a href="#">Computer Desk</a>
                            </li>
                            <li>
                              <a href="#">Bookcase</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a href="#">Lamp</a>
                        </li>
                        <li>
                          {" "}
                          <a href="#">Electronics</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#">Accessories</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="shop-price-filter mt-35 shop-sidebar-border pt-40 sidebar-widget">
                    <h4 className="sidebar-title">Price Filter</h4>
                    <div className="price-filter mt-20">
                      <span>Range: $100.00 - 1.300.00 </span>
                      <div id="slider-range" />
                      <div className="price-slider-amount">
                        <div className="label-input">
                          <input
                            type="text"
                            id="amount"
                            name="price"
                            placeholder="Add Your Price"
                          />
                        </div>
                        <button type="button">Filter</button>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget shop-sidebar-border pt-40 mt-40">
                    <h4 className="sidebar-title">Refine By </h4>
                    <div className="sidebar-widget-list mt-20">
                      <ul>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" />{" "}
                            <a href="#">
                              On Sale <span>4</span>{" "}
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" value="" />{" "}
                            <a href="#">
                              New <span>5</span>
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" value="" />{" "}
                            <a href="#">
                              In Stock <span>6</span>{" "}
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sidebar-widget pt-40 mt-40 shop-sidebar-border">
                    <h4 className="sidebar-title">Colour </h4>
                    <div className="sidebar-widget-list mt-20">
                      <ul>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" value="" />{" "}
                            <a href="#">
                              Green <span>7</span>{" "}
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" value="" />{" "}
                            <a href="#">
                              Cream <span>8</span>{" "}
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" value="" />{" "}
                            <a href="#">
                              Blue <span>9</span>{" "}
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" value="" />{" "}
                            <a href="#">
                              Black <span>3</span>{" "}
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sidebar-widget pt-40 mt-40 shop-sidebar-border">
                    <h4 className="sidebar-title">Size </h4>
                    <div className="sidebar-widget-list mt-20">
                      <ul>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" value="" />{" "}
                            <a href="#">
                              XL <span>4</span>{" "}
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" value="" />{" "}
                            <a href="#">
                              L <span>5</span>{" "}
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" value="" />{" "}
                            <a href="#">
                              SM <span>6</span>{" "}
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" value="" />{" "}
                            <a href="#">
                              XXL <span>7</span>{" "}
                            </a>
                            <span className="checkmark" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sidebar-widget pt-40 mt-40 shop-sidebar-border">
                    <h4 className="sidebar-title">Popular Tags </h4>
                    <div className="sidebar-widget-tag mt-20">
                      <ul>
                        <li>
                          <a href="#">Clothing</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                        <li>
                          <a href="#">For Men</a>
                        </li>
                        <li>
                          <a href="#">Women</a>
                        </li>
                        <li>
                          <a href="#">Fashion</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">x</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-5 col-sm-12 col-xs-12">
                    <div className="tab-content quickview-big-img">
                      <div id="pro-1" className="tab-pane fade show active">
                        <img
                          src="assets/images/product/quickview-l1.jpg"
                          alt=""
                        />
                      </div>
                      <div id="pro-2" className="tab-pane fade">
                        <img
                          src="assets/images/product/quickview-l2.jpg"
                          alt=""
                        />
                      </div>
                      <div id="pro-3" className="tab-pane fade">
                        <img
                          src="assets/images/product/quickview-l3.jpg"
                          alt=""
                        />
                      </div>
                      <div id="pro-4" className="tab-pane fade">
                        <img
                          src="assets/images/product/quickview-l2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* <!-- Thumbnail Large Image End -->
                                    <!-- Thumbnail Image End --> */}
                    <div className="quickview-wrap mt-15">
                      <div
                        className="quickview-slide-active owl-carousel nav nav-style-2"
                        role="tablist"
                      >
                        <a className="active" data-toggle="tab" href="#pro-1">
                          <img
                            src="assets/images/product/quickview-s1.jpg"
                            alt=""
                          />
                        </a>
                        <a data-toggle="tab" href="#pro-2">
                          <img
                            src="assets/images/product/quickview-s2.jpg"
                            alt=""
                          />
                        </a>
                        <a data-toggle="tab" href="#pro-3">
                          <img
                            src="assets/images/product/quickview-s3.jpg"
                            alt=""
                          />
                        </a>
                        <a data-toggle="tab" href="#pro-4">
                          <img
                            src="assets/images/product/quickview-s4.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <div className="product-details-content quickview-content">
                      <span>Life Style</span>
                      <h2>LaaVista Depro, FX 829 v1</h2>
                      <div className="product-ratting-review">
                        <div className="product-ratting">
                          <i className="la la-star" />
                          <i className="la la-star" />
                          <i className="la la-star" />
                          <i className="la la-star" />
                          <i className="la la-star-half-o" />
                        </div>
                        <div className="product-review">
                          <span>40+ Reviews</span>
                        </div>
                      </div>
                      <div className="pro-details-color-wrap">
                        <span>Color:</span>
                        <div className="pro-details-color-content">
                          <ul>
                            <li className="green" />
                            <li className="yellow" />
                            <li className="red" />
                            <li className="blue" />
                          </ul>
                        </div>
                      </div>
                      <div className="pro-details-size">
                        <span>Size:</span>
                        <div className="pro-details-size-content">
                          <ul>
                            <li>
                              <a href="#">s</a>
                            </li>
                            <li>
                              <a href="#">m</a>
                            </li>
                            <li>
                              <a href="#">xl</a>
                            </li>
                            <li>
                              <a href="#">xxl</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="pro-details-price-wrap">
                        <div className="product-price">
                          <span>$210.00</span>
                          <span className="old">$230.00</span>
                        </div>
                        <div className="dec-rang">
                          <span>- 30%</span>
                        </div>
                      </div>
                      <div className="pro-details-quality">
                        <div className="cart-plus-minus">
                          <input
                            className="cart-plus-minus-box"
                            type="text"
                            name="qtybutton"
                            value="02"
                          />
                        </div>
                      </div>
                      <div className="pro-details-compare-wishlist">
                        <div className="pro-details-compare">
                          <a title="Add To Compare" href="#">
                            <i className="la la-retweet" /> Compare
                          </a>
                        </div>
                        <div className="pro-details-wishlist">
                          <a title="Add To Wishlist" href="#">
                            <i className="la la-heart-o" /> Add to wish list
                          </a>
                        </div>
                      </div>
                      <div className="pro-details-buy-now btn-hover btn-hover-radious">
                        <a href="#">Add To Cart</a>
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

export default ListItem;
