import React, { Component } from 'react';
import Layout from '../layouts/basicLayout/layout';

export default class Home extends Component {
  render() {
    return (
        <Layout>
      <div className={`main-wrapper `}>
        <header className="header-area header-padding-4">
            <div className="main-header-wrap">
                <div className="header-top pt-15 pb-15 bg-black-3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="welcome">
                                    <p>Welcome to our shop</p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="setting-wrap-2">
                                    <div className="setting-content2-left">
                                        <a className="currency-dropdown-active" href="#">USD <i className="la la-angle-down"></i></a>
                                        <div className="currency-dropdown">
                                            <ul>
                                                <li><a href="#">USD</a></li>
                                                <li><a href="#">Euro</a></li>
                                                <li><a href="#">Real</a></li>
                                                <li><a href="#">BDT</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="setting-content2-right">
                                        <a href="my-account.html">My Account</a>
                                        <a href="wishlist.html">Wishlist</a>
                                        <a href="login-register.html">Sign in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle border-top-2 pt-30 pb-30 bg-black-3">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="logo">
                                    <a href="index.html"><img src="../static/assets/images/logo/logo-2.png" alt="logo" /></a>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="header-contact-search-wrap">
                                    <div className="header-contact">
                                        <ul>
                                            <li><i className="la la-phone"></i> +00 112 336 555</li>
                                            <li><i className="la la-comments-o"></i> <a href="#">demo@mail.com</a></li>
                                        </ul>
                                    </div>
                                    <div className="search-style-3">
                                        <form>
                                            <div className="form-search-3">
                                                <input id="search" className="input-text" value="" placeholder="Search Hear" type="search"/>
                                                <button>
                                                    <i className="la la-search"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1">
                                <div className="cart-wrap cart-wrap-3">
                                    
                                    <button className="cart-active">
                                        <i className="la la-shopping-cart"></i> <br/>
                                        <span className="mini-cart-price-3">$400.00</span>
                                        <span className="count-style-3">01</span>
                                    </button>
                                    <div className="shopping-cart-content">
                                        <div className="shopping-cart-top">
                                            <h4>Your Cart</h4>
                                            <a className="cart-close" href="#"><i className="la la-close"></i></a>
                                        </div>
                                        <ul>
                                            <li className="single-shopping-cart">
                                                <div className="shopping-cart-img">
                                                    <a href="#"><img alt="" src="../static/assets/images/cart/cart-1.jpg" /></a>
                                                    <div className="item-close">
                                                        <a href="#"><i className="sli sli-close"></i></a>
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                                    <span>$99.00</span>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="la la-trash"></i></a>
                                                </div>
                                            </li>
                                            <li className="single-shopping-cart">
                                                <div className="shopping-cart-img">
                                                    <a href="#"><img alt="" src="../static/assets/images/cart/cart-2.jpg"/></a>
                                                    <div className="item-close">
                                                        <a href="#"><i className="sli sli-close"></i></a>
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                                    <span>$99.00</span>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="la la-trash"></i></a>
                                                </div>
                                            </li>
                                            <li className="single-shopping-cart">
                                                <div className="shopping-cart-img">
                                                    <a href="#"><img alt="" src="../static/assets/images/cart/cart-3.jpg"/></a>
                                                    <div className="item-close">
                                                        <a href="#"><i className="sli sli-close"></i></a>
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                                    <span>$99.00</span>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="la la-trash"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                  
                                    </div>
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
                                    <img alt="" src="../static/assets/images/logo/logo-1.png"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="header-right-wrap">
                                <div className="cart-wrap common-style">
                                    <button className="cart-active">
                                        <i className="la la-shopping-cart"></i>
                                        <span className="count-style">2 Items</span>
                                    </button>
                                    <div className="shopping-cart-content">
                                        <div className="shopping-cart-top">
                                            <h4>Your Cart</h4>
                                            <a className="cart-close" href="#"><i className="la la-close"></i></a>
                                        </div>
                                        <ul>
                                            <li className="single-shopping-cart">
                                                <div className="shopping-cart-img">
                                                    <a href="#"><img alt="" src="../static/assets/images/cart/cart-1.jpg"/></a>
                                                    <div className="item-close">
                                                        <a href="#"><i className="sli sli-close"></i></a>
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                                    <span>$99.00</span>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="la la-trash"></i></a>
                                                </div>
                                            </li>
                                            <li className="single-shopping-cart">
                                                <div className="shopping-cart-img">
                                                    <a href="#"><img alt="" src="../static/assets/images/cart/cart-2.jpg"/></a>
                                                    <div className="item-close">
                                                        <a href="#"><i className="sli sli-close"></i></a>
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                                    <span>$99.00</span>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="la la-trash"></i></a>
                                                </div>
                                            </li>
                                            <li className="single-shopping-cart">
                                                <div className="shopping-cart-img">
                                                    <a href="#"><img alt="" src="../static/assets/images/cart/cart-3.jpg"/></a>
                                                    <div className="item-close">
                                                        <a href="#"><i className="sli sli-close"></i></a>
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                                    <span>$99.00</span>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="la la-trash"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="shopping-cart-bottom">
                                            <div className="shopping-cart-total">
                                                <h4>Subtotal <span className="shop-total">$290.00</span></h4>
                                            </div>
                                            <div className="shopping-cart-btn btn-hover default-btn text-center">
                                                <a className="black-color" href="checkout.html">Continue to Chackout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-off-canvas">
                                    <a className="mobile-aside-button" href="#"><i className="la la-navicon la-2x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="mobile-off-canvas-active">
            <a className="mobile-aside-close"><i className="la la-close"></i></a>
            <div className="header-mobile-aside-wrap">
                <div className="mobile-search">
                    <form className="search-form" action="#">
                        <input type="text" placeholder="Search entire store…"/>
                        <button className="button-search"><i className="la la-search"></i></button>
                    </form>
                </div>
                <div className="mobile-menu-wrap">
                    {/* <!-- mobile menu start --> */}
                    <div className="mobile-navigation">
                        {/* <!-- mobile menu navigation start --> */}
                        <nav>
                            <ul className="mobile-menu">
                                <li className="menu-item-has-children"><a href="index.html">Home</a>
                                    <ul className="dropdown">
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
                                <li className="menu-item-has-children "><a href="#">shop</a>
                                    <ul className="dropdown">
                                        <li className="menu-item-has-children"><a href="#">shop layout</a>
                                            <ul className="dropdown">
                                                <li><a href="shop.html">standard grid style</a></li>
                                                <li><a href="shop-2.html">standard style 2</a></li>
                                                <li><a href="shop-2-col.html">shop 2 column</a></li>
                                                <li><a href="shop-no-sidebar.html">shop no sidebar</a></li>
                                                <li><a href="shop-fullwide.html">shop fullwide</a></li>
                                                <li><a href="shop-fullwide-no-sidebar.html">fullwide no sidebar </a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="#">shop list layout</a>
                                            <ul className="dropdown">
                                                <li><a href="shop-list.html">list style</a></li>
                                                <li><a href="shop-list-2col.html">list 2 column</a></li>
                                                <li><a href="shop-list-no-sidebar.html">list no sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="#">product details</a>
                                            <ul className="dropdown">
                                                <li><a href="product-details.html">standard style</a></li>
                                                <li><a href="product-details-2.html">standard style 2</a></li>
                                                <li><a href="product-details-tab1.html">tab style 1</a></li>
                                                <li><a href="product-details-tab2.html">tab style 2</a></li>
                                                <li><a href="product-details-tab3.html">tab style 3 </a></li>
                                                <li><a href="product-details-gallery.html">gallery style </a></li>
                                                <li><a href="product-details-sticky.html">sticky style</a></li>
                                                <li><a href="product-details-slider.html">slider style</a></li>
                                                <li><a href="product-details-affiliate.html">Affiliate style</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="#">Pages</a>
                                    <ul className="dropdown">
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
                                <li className="menu-item-has-children "><a href="#">Blog</a>
                                    <ul className="dropdown">
                                        <li><a href="blog.html">standard style </a></li>
                                        <li><a href="blog-2col.html">blog 2 column </a></li>
                                        <li><a href="blog-sidebar.html">blog sidebar </a></li>
                                        <li><a href="blog-details.html">blog details </a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact us</a></li>
                            </ul>
                        </nav>
                        {/* <!-- mobile menu navigation end --> */}
                    </div>
                    {/* <!-- mobile menu end --> */}
                </div>
                <div className="mobile-curr-lang-wrap">
                    <div className="single-mobile-curr-lang">
                        <a className="mobile-language-active" href="#">Language <i className="la la-angle-down"></i></a>
                        <div className="lang-curr-dropdown lang-dropdown-active">
                            <ul>
                                <li><a href="#">English (US)</a></li>
                                <li><a href="#">English (UK)</a></li>
                                <li><a href="#">Spanish</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="single-mobile-curr-lang">
                        <a className="mobile-currency-active" href="#">Currency <i className="la la-angle-down"></i></a>
                        <div className="lang-curr-dropdown curr-dropdown-active">
                            <ul>
                                <li><a href="#">USD</a></li>
                                <li><a href="#">EUR</a></li>
                                <li><a href="#">Real</a></li>
                                <li><a href="#">BDT</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="single-mobile-curr-lang">
                        <a className="mobile-account-active" href="#">My Account <i className="la la-angle-down"></i></a>
                        <div className="lang-curr-dropdown account-dropdown-active">
                            <ul>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Creat Account</a></li>
                                <li><a href="#">My Account</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mobile-social-wrap">
                    <a className="facebook" href="#"><i className="ti-facebook"></i></a>
                    <a className="twitter" href="#"><i className="ti-twitter-alt"></i></a>
                    <a className="pinterest" href="#"><i className="ti-pinterest"></i></a>
                    <a className="instagram" href="#"><i className="ti-instagram"></i></a>
                    <a className="google" href="#"><i className="ti-google"></i></a>
                </div>
            </div>
        </div>
        <div className="slider-area slider-height-6 bg-img" >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="slider-content-6">
                            <h1 className="wow fadeInUp">DyBO Phone</h1>
                            <p className="wow fadeInUp">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                            <div className="slider-btn-6 default-btn btn-hover">
                                <a className="wow fadeInUp white-color" href="product-details.html">BUY NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="slider-sin-img-hm6">
                            <img className="tilter" src="../static/assets/images/slider/hm5-single-1.png" alt=""/>
                            <div className="slider-price">
                                <h4>$1999</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="banner-area pt-50 pb-70">
            
            
        </div>
        <div className="product-area pb-70">
            <div className="container">
                <div className="product-tab-list-3 nav">
                    <a className="active" href="#product-5" data-toggle="tab">
                        <h5>Featured </h5>
                    </a>
                    <a href="#product-6" data-toggle="tab">
                        <h5>On Sale</h5>
                    </a>
                    <a href="#product-7" data-toggle="tab">
                        <h5>Top Rated</h5>
                    </a>
                </div>
                <div className="tab-content jump">
                    <div id="product-5" className="tab-pane active">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-1.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$210.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-2.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$220.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-3.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$210.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-4.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$230.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-5.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$240.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-6.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$250.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-7.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$260.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-8.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$270.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="product-6" className="tab-pane">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-8.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$280.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-7.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$290.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-6.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$215.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-5.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$225.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-4.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$235.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-3.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$245.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-2.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$255.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-1.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$267.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="product-7" className="tab-pane">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-5.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$210.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-4.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$234.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-2.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$243.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-1.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$267.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-3.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$270.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-7.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$230.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-8.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$290.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="product-wrap product-border-3 product-img-zoom mb-30">
                                    <div className="product-img">
                                        <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-6.jpg" alt="product"/></a>
                                        <div className="product-action-4">
                                            <div className="product-action-4-style">
                                                <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                                <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                                <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content product-content-padding">
                                        <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                        <div className="price-addtocart">
                                            <div className="product-price">
                                                <span>$240.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="deal-area pb-90 pt-50 bg-img section-margin-2 res-white-overly-xs deal-hm6" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="deal-content-2">
                            <h2>Guten Sunrise cs4</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                            <div className="timer timer-style-3">
                                <div data-countdown="2019/08/01"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="product-wrap product-border-3 product-img-zoom mb-30">
                            <div className="product-img">
                                <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-1.jpg" alt="product"/></a>
                                <div className="product-action-4">
                                    <div className="product-action-4-style">
                                        <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                        <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                        <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-content product-content-padding">
                                <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                        <span>$210.00</span>
                                        <span className="old2">$230.00</span>
                                    </div>
                                </div>
                                <div className="timer timer-style-2">
                                    <div data-countdown="2020/01/01"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="product-wrap product-border-3 product-img-zoom mb-30">
                            <div className="product-img">
                                <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-9.jpg" alt="product"/></a>
                                <div className="product-action-4">
                                    <div className="product-action-4-style">
                                        <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                        <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                        <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-content product-content-padding">
                                <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                        <span>$210.00</span>
                                        <span className="old2">$290.00</span>
                                    </div>
                                </div>
                                <div className="timer timer-style-2">
                                    <div data-countdown="2020/01/01"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="product-wrap product-border-3 product-img-zoom mb-30">
                            <div className="product-img">
                                <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-10.jpg" alt="product"/></a>
                                <div className="product-action-4">
                                    <div className="product-action-4-style">
                                        <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                        <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                        <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-content product-content-padding">
                                <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                        <span>$210.00</span>
                                        <span className="old2">$280.00</span>
                                    </div>
                                </div>
                                <div className="timer timer-style-2">
                                    <div data-countdown="2020/01/01"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="product-wrap product-border-3 product-img-zoom mb-30">
                            <div className="product-img">
                                <a href="product-details.html"><img src="../static/assets/images/product/pro-hm5-11.jpg" alt="product"/></a>
                                <div className="product-action-4">
                                    <div className="product-action-4-style">
                                        <a data-tooltip="Add To Cart" href="#"><i className="la la-cart-plus"></i></a>
                                        <a data-tooltip="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                        <a data-tooltip="Compare" href="#"><i className="la la-random"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-content product-content-padding">
                                <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                        <span>$210.00</span>
                                        <span className="old2">$250.00</span>
                                    </div>
                                </div>
                                <div className="timer timer-style-2">
                                    <div data-countdown="2020/01/01"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="brand-logo-area pb-100">
            <div className="container">
                <div className="brand-logo-active-2 owl-carousel">
                    <div className="single-brand-logo">
                        <img src="../static/assets/images/brand-logo/brand-logo-5.png" alt=""/>
                    </div>
                    <div className="single-brand-logo">
                        <img src="../static/assets/images/brand-logo/brand-logo-6.png" alt=""/>
                    </div>
                    <div className="single-brand-logo">
                        <img src="../static/assets/images/brand-logo/brand-logo-7.png" alt=""/>
                    </div>
                    <div className="single-brand-logo">
                        <img src="../static/assets/images/brand-logo/brand-logo-8.png" alt=""/>
                    </div>
                    <div className="single-brand-logo">
                        <img src="../static/assets/images/brand-logo/brand-logo-9.png" alt=""/>
                    </div>
                    <div className="single-brand-logo">
                        <img src="../static/assets/images/brand-logo/brand-logo-6.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className="subscribe-area pb-100">
            <div className="container">
                <div className="subscribe-bg bg-img pt-45 pb-50 pl-20 pr-20" >
                    <div className="row">
                        <div className="col-lg-6 ml-auto mr-auto">
                            <div className="subscribe-content-3 text-center">
                                <h2>Sign up & Get all updates.</h2>
                                <div id="mc_embed_signup" className="subscribe-form-3 mt-20">
                                    <form id="mc-embedded-subscribe-form" className="validate subscribe-form-style" noValidate="" target="_blank" name="mc-embedded-subscribe-form" method="post" action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef">
                                        <div id="mc_embed_signup_scroll" className="mc-form">
                                            <input className="email" type="email" required="" placeholder="Enter Your E-mail" name="EMAIL" value=""/>
                                            <div className="mc-news" aria-hidden="true">
                                                <input type="text" value="" tabIndex="-1" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"/>
                                            </div>
                                            <div className="clear">
                                                <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe" value=""/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <footer className="footer-area bg-black-3 pt-100 section-padding-4">
            <div className="container-fluid">
                <div className="footer-top pb-60">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 col-sm-6">
                            <div className="footer-widget footer-contact-wrap-2 mb-40">
                                <a href="#"><img src="../static/assets/images/logo/logo-2.png" alt="logo"/></a>
                                <div className="footer-contact-content-2">
                                    <h5>Contact Information:</h5>
                                    <div className="footer-info-hm5">
                                        <span>Phone</span>
                                        <p>+880-123 445 555</p>
                                    </div>
                                    <div className="footer-info-hm5">
                                        <span>Mail</span>
                                        <p><a href="#">domain@mail.com</a></p>
                                    </div>
                                    <div className="footer-social-hm5">
                                        <span>Follow US</span>
                                        <ul>
                                            <li><a href="#">Facebok</a></li>
                                            <li><a href="#">Twitter</a></li>
                                            <li><a href="#">Linkedin</a></li>
                                            <li><a href="#">Instagram</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12 col-sm-6">
                            <div className="footer-widget mb-40 ml-55 mrg-md-footer">
                                <div className="footer-title-4">
                                    <h3>Shop Info</h3>
                                </div>
                                <div className="footer-list-4">
                                    <ul>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Shopping Detail</a></li>
                                        <li><a href="#">Pricing</a></li>
                                        <li><a href="#">EMI</a></li>
                                        <li><a href="#">Home Delevary</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                            <div className="footer-widget mb-40 ml-200">
                                <div className="footer-title-4">
                                    <h3>Support</h3>
                                </div>
                                <div className="footer-list-4">
                                    <ul>
                                        <li><a href="#">Customer Suport</a></li>
                                        <li><a href="#">Shipping Policy</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Order Status</a></li>
                                        <li><a href="contact.html">Contact info</a></li>
                                        <li><a href="#">Product Support</a></li>
                                        <li><a href="#">Vendor Support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                            <div className="footer-widget mb-40 f-right">
                                <div className="footer-title-4">
                                    <h3>About</h3>
                                </div>
                                <div className="footer-list-4">
                                    <ul>
                                        <li><a href="#">Daxone Corporation</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Provacy Policy</a></li>
                                        <li><a href="#">Term of use</a></li>
                                        <li><a href="#">Why choose us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom pt-20 pb-20 border-top-3">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="copyright-5">
                                <p>Copyright © <a href="#">Daxone</a>. All Right Reserved</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="footer-payment footer-payment2">
                                <a href="#"><img src="../static/assets/images/icon-img/payment-method.png" alt="logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    </Layout>
    )
  }
}
