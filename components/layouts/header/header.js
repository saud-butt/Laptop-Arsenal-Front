import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header class="header-area transparent-bar sticky-bar pt-10">
      <div class="main-header-wrap">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-xl-2 col-lg-3">
                      <div class="logo">
                          <a href="index.html"><img src="../../../static/assets/images/logo/logo-1.png" alt="logo"/></a>
                      </div>
                  </div>
                  <div class="col-xl-7 col-lg-6">
                      <div class="main-menu menu-common-style menu-lh-1 menu-margin-4 menu-font-3 ml-20 menu-others-page">
                          <nav>
                              <ul>
                                  <li class="angle-shape"><a href="index.html">Home</a>
                                      <ul class="submenu">
                                          <li><a href="index.html">Home version 1 </a></li>
                                          <li><a href="index-2.html">Home version 2 </a></li>
                                          <li><a href="index-3.html">Home version 3 </a></li>
                                          <li><a href="index-4.html">Home version 4 </a></li>
                                          <li><a href="index-5.html">Home version 5 </a></li>
                                          <li><a href="index-6.html">Home version 6 </a></li>
                                          <li><a href="index-7.html">Home version 7 </a></li>
                                          <li><a href="index-8.html">Home version 8 </a></li>
                                          <li><a href="index-9.html">Home version 9 </a></li>
                                          <li><a href="index-10.html">Home version 10 </a></li>
                                      </ul>
                                  </li>
                                  <li class="angle-shape"><a href="shop.html">Shop </a>
                                      <ul class="mega-menu">
                                          <li><a class="menu-title" href="#">Shop Layout</a>
                                              <ul>
                                                  <li><a href="shop.html">standard style</a></li>
                                                  <li><a href="shop-2.html">standard style 2</a></li>
                                                  <li><a href="shop-2-col.html">shop 2 column</a></li>
                                                  <li><a href="shop-no-sidebar.html">shop no sidebar</a></li>
                                                  <li><a href="shop-fullwide.html">shop fullwide</a></li>

                                              </ul>
                                          </li>
                                          <li><a class="menu-title" href="#">Shop Layout</a>
                                              <ul>
                                                  <li><a href="shop-fullwide-no-sidebar.html">fullwide no sidebar </a></li>
                                                  <li><a href="shop-list.html">list style</a></li>
                                                  <li><a href="shop-list-2col.html">list 2 column</a></li>
                                                  <li><a href="shop-list-no-sidebar.html">list no sidebar</a></li>
                                              </ul>
                                          </li>
                                          <li><a class="menu-title" href="#">Product Details</a>
                                              <ul>
                                                  <li><a href="product-details.html">standard style</a></li>
                                                  <li><a href="product-details-2.html">standard style 2</a></li>
                                                  <li><a href="product-details-tab1.html">tab style 1</a></li>
                                                  <li><a href="product-details-tab2.html">tab style 2</a></li>
                                                  <li><a href="product-details-tab3.html">tab style 3 </a></li>
                                              </ul>
                                          </li>
                                          <li><a class="menu-title" href="#">Product Details</a>
                                              <ul>
                                                  <li><a href="product-details-gallery.html">gallery style </a></li>
                                                  <li><a href="product-details-sticky.html">sticky style</a></li>
                                                  <li><a href="product-details-slider.html">slider style</a></li>
                                                  <li><a href="product-details-affiliate.html">Affiliate style</a></li>
                                              </ul>
                                          </li>
                                      </ul>
                                  </li>
                                  <li><a href="shop.html">Mens</a></li>
                                  <li class="angle-shape"><a href="#">Pages</a>
                                      <ul class="submenu">
                                          <li><a href="about-us.html">about us </a></li>
                                          <li><a href="cart.html">cart page </a></li>
                                          <li><a href="checkout.html">checkout </a></li>
                                          <li><a href="compare.html">compare </a></li>
                                          <li><a href="wishlist.html">wishlist </a></li>
                                          <li><a href="my-account.html">my account </a></li>
                                          <li><a href="contact.html">contact us </a></li>
                                          <li><a href="login-register.html">login/register </a></li>
                                      </ul>
                                  </li>
                                  <li class="angle-shape"><a href="blog.html">Blog</a>
                                      <ul class="submenu">
                                          <li><a href="blog.html">standard style </a></li>
                                          <li><a href="blog-2col.html">blog 2 column </a></li>
                                          <li><a href="blog-sidebar.html">blog sidebar </a></li>
                                          <li><a href="blog-details.html">blog details </a></li>
                                      </ul>
                                  </li>
                                  <li><a href="contact.html">Contact</a></li>
                              </ul>
                          </nav>
                      </div>
                  </div>
                  <div class="col-xl-3 col-lg-3">
                      <div class="header-right-wrap mt-10">
                          <div class="header-wishlist">
                              <a href="wishlist.html"><i class="la la-heart-o"></i></a>
                          </div>
                          <div class="header-login ml-40">
                              <a href="login-register.html"><i class="la la-user"></i></a>
                          </div>
                          <div class="cart-wrap common-style ml-35">
                              <button class="cart-active cart-3">
                                  <span class="mini-cart-price">$240</span>
                                  <i class="la la-shopping-cart"></i>
                              </button>
                              <div class="shopping-cart-content">
                                  <div class="shopping-cart-top">
                                      <h4>Your Cart</h4>
                                      <a class="cart-close" href="#"><i class="la la-close"></i></a>
                                  </div>
                                  <ul>
                                      <li class="single-shopping-cart">
                                          <div class="shopping-cart-img">
                                              <a href="#"><img alt="" src="../../../static/assets/images/cart/cart-1.jpg"/></a>
                                              <div class="item-close">
                                                  <a href="#"><i class="sli sli-close"></i></a>
                                              </div>
                                          </div>
                                          <div class="shopping-cart-title">
                                              <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                              <span>$99.00</span>
                                          </div>
                                          <div class="shopping-cart-delete">
                                              <a href="#"><i class="la la-trash"></i></a>
                                          </div>
                                      </li>
                                      <li class="single-shopping-cart">
                                          <div class="shopping-cart-img">
                                              <a href="#"><img alt="" src="../../../static/assets/images/cart/cart-2.jpg"/></a>
                                              <div class="item-close">
                                                  <a href="#"><i class="sli sli-close"></i></a>
                                              </div>
                                          </div>
                                          <div class="shopping-cart-title">
                                              <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                              <span>$99.00</span>
                                          </div>
                                          <div class="shopping-cart-delete">
                                              <a href="#"><i class="la la-trash"></i></a>
                                          </div>
                                      </li>
                                      <li class="single-shopping-cart">
                                          <div class="shopping-cart-img">
                                              <a href="#"><img alt="" src="../../../static/assets/images/cart/cart-3.jpg"/></a>
                                              <div class="item-close">
                                                  <a href="#"><i class="sli sli-close"></i></a>
                                              </div>
                                          </div>
                                          <div class="shopping-cart-title">
                                              <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                              <span>$99.00</span>
                                          </div>
                                          <div class="shopping-cart-delete">
                                              <a href="#"><i class="la la-trash"></i></a>
                                          </div>
                                      </li>
                                  </ul>
                                  <div class="shopping-cart-bottom">
                                      <div class="shopping-cart-total">
                                          <h4>Subtotal <span class="shop-total">$290.00</span></h4>
                                      </div>
                                      <div class="shopping-cart-btn btn-hover default-btn text-center">
                                          <a class="black-color" href="checkout.html">Continue to Chackout</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- main-search start --> */}
          <div class="main-search-active">
              <div class="sidebar-search-icon">
                  <button class="search-close"><span class="la la-close"></span></button>
              </div>
              <div class="sidebar-search-input">
                  <form>
                      <div class="form-search">
                          <input id="search" class="input-text" value="" placeholder="Search Now" type="search"/>
                          <button>
                              <i class="la la-search"></i>
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
      <div class="header-small-mobile">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-6">
                      <div class="mobile-logo">
                          <a href="index.html">
                              <img alt="" src="../../../static/assets/images/logo/logo-1.png"/>
                          </a>
                      </div>
                  </div>
                  <div class="col-6">
                      <div class="header-right-wrap">
                          <div class="cart-wrap common-style">
                              <button class="cart-active">
                                  <i class="la la-shopping-cart"></i>
                                  <span class="count-style">2 Items</span>
                              </button>
                              <div class="shopping-cart-content">
                                  <div class="shopping-cart-top">
                                      <h4>Your Cart</h4>
                                      <a class="cart-close" href="#"><i class="la la-close"></i></a>
                                  </div>
                                  <ul>
                                      <li class="single-shopping-cart">
                                          <div class="shopping-cart-img">
                                              <a href="#"><img alt="" src="../../../static/assets/images/cart/cart-1.jpg"/></a>
                                              <div class="item-close">
                                                  <a href="#"><i class="sli sli-close"></i></a>
                                              </div>
                                          </div>
                                          <div class="shopping-cart-title">
                                              <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                              <span>$99.00</span>
                                          </div>
                                          <div class="shopping-cart-delete">
                                              <a href="#"><i class="la la-trash"></i></a>
                                          </div>
                                      </li>
                                      <li class="single-shopping-cart">
                                          <div class="shopping-cart-img">
                                              <a href="#"><img alt="" src="../../../static/assets/images/cart/cart-2.jpg"/></a>
                                              <div class="item-close">
                                                  <a href="#"><i class="sli sli-close"></i></a>
                                              </div>
                                          </div>
                                          <div class="shopping-cart-title">
                                              <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                              <span>$99.00</span>
                                          </div>
                                          <div class="shopping-cart-delete">
                                              <a href="#"><i class="la la-trash"></i></a>
                                          </div>
                                      </li>
                                      <li class="single-shopping-cart">
                                          <div class="shopping-cart-img">
                                              <a href="#"><img alt="" src="../../../static/assets/images/cart/cart-3.jpg"/></a>
                                              <div class="item-close">
                                                  <a href="#"><i class="sli sli-close"></i></a>
                                              </div>
                                          </div>
                                          <div class="shopping-cart-title">
                                              <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                              <span>$99.00</span>
                                          </div>
                                          <div class="shopping-cart-delete">
                                              <a href="#"><i class="la la-trash"></i></a>
                                          </div>
                                      </li>
                                  </ul>
                                  <div class="shopping-cart-bottom">
                                      <div class="shopping-cart-total">
                                          <h4>Subtotal <span class="shop-total">$290.00</span></h4>
                                      </div>
                                      <div class="shopping-cart-btn btn-hover default-btn text-center">
                                          <a class="black-color" href="checkout.html">Continue to Chackout</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="mobile-off-canvas">
                              <a class="mobile-aside-button" href="#"><i class="la la-navicon la-2x"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </header>
    );
  }
}

export default Header;
