import React, { Component } from 'react'
import Layout from "../../layouts/basicLayout/layout";


class ProductDetail extends Component {
    render() {
        return (
            <>
            <Layout>
            <div className="product-details-area pt-90 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="product-details-img">
                            <div className="zoompro-border zoompro-span">
                                <img className="zoompro" src="../../../static/assets/images/product-details/product-detalis-l1.jpg" data-zoom-image="../../../static/assets/images/product-details/product-detalis-bl1.jpg" alt="" /> <span>-29%</span>
                            </div>
                            <div id="gallery" className="mt-20 product-dec-slider">
                                <a data-image="../../../static/assets/images/product-details/product-detalis-l1.jpg" data-zoom-image="../../../static/assets/images/product-details/product-detalis-bl1.jpg">
                                    <img src="../../../static/assets/images/product-details/product-detalis-s1.jpg" alt=""/>
                                </a>
                                <a data-image="../../../static/assets/images/product-details/product-detalis-l2.jpg" data-zoom-image="../../../static/assets/images/product-details/product-detalis-bl2.jpg">
                                    <img src="../../../static/assets/images/product-details/product-detalis-s2.jpg" alt=""/>
                                </a>
                                <a data-image="../../../static/assets/images/product-details/product-detalis-l3.jpg" data-zoom-image="../../../static/assets/images/product-details/product-detalis-bl3.jpg">
                                    <img src="../../../static/assets/images/product-details/product-detalis-s3.jpg" alt=""/>
                                </a>
                                <a data-image="../../../static/assets/images/product-details/product-detalis-l4.jpg" data-zoom-image="../../../static/assets/images/product-details/product-detalis-bl4.jpg">
                                    <img src="../../../static/assets/images/product-details/product-detalis-s4.jpg" alt=""/>
                                </a>
                                <a data-image="../../../static/assets/images/product-details/product-detalis-l5.jpg" data-zoom-image="../../../static/assets/images/product-details/product-detalis-bl5.jpg">
                                    <img src="../../../static/assets/images/product-details/product-detalis-s5.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="product-details-content pro-details-content-modify">
                            <span>Life Style</span>
                            <h2>LaaVista Depro, FX 829 v1</h2>
                            <div className="product-ratting-review">
                                <div className="product-ratting">
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star-half-o"></i>
                                </div>
                                <div className="product-review">
                                    <span>40+ Reviews</span>
                                </div>
                            </div>
                            <div className="pro-details-color-wrap">
                                <span>Color:</span>
                                <div className="pro-details-color-content">
                                    <ul>
                                        <li className="green"></li>
                                        <li className="yellow"></li>
                                        <li className="red"></li>
                                        <li className="blue"></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pro-details-size">
                                <span>Size:</span>
                                <div className="pro-details-size-content">
                                    <ul>
                                        <li><a href="#">s</a></li>
                                        <li><a href="#">m</a></li>
                                        <li><a href="#">xl</a></li>
                                        <li><a href="#">xxl</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pro-details-price-wrap">
                                <div className="product-price">
                                    <span>$210.00</span>
                                    <span className="old">$230.00</span>
                                </div>
                                <div className="dec-rang"><span>- 30%</span></div>
                            </div>
                            <div className="pro-details-quality">
                                <div className="cart-plus-minus">
                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" value="02"/>
                                </div>
                            </div>
                            <div className="pro-details-compare-wishlist">
                                <div className="pro-details-compare">
                                    <a title="Add To Compare" href="#"><i className="la la-retweet"></i> Compare</a>
                                </div>
                                <div className="pro-details-wishlist">
                                    <a title="Add To Wishlist" href="#"><i className="la la-heart-o"></i> Add to wish list</a>
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
        <div className="description-review-wrapper pb-90">
            <div className="container">
                <div className="row">
                    <div className="ml-auto mr-auto col-lg-10">
                        <div className="dec-review-topbar nav mb-40">
                            <a data-toggle="tab" href="#des-details1">Description</a>
                            <a className="active" data-toggle="tab" href="#des-details2">Specification</a>
                            <a data-toggle="tab" href="#des-details3">Reviews</a>
                        </div>
                        <div className="tab-content dec-review-bottom">
                            <div id="des-details1" className="tab-pane">
                                <div className="description-wrap">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                </div>
                            </div>
                            <div id="des-details2" className="tab-pane active">
                                <div className="specification-wrap table-responsive">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="width1">Name / Model</td>
                                                <td>LaaVista Depro, FX 829 v1</td>
                                            </tr>
                                            <tr>
                                                <td>Type</td>
                                                <td>Categories</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Models</td>
                                                <td>FX 829 v1</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Categories</td>
                                                <td>Product Type</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Size</td>
                                                <td>60’’ x 40’’</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Display Port</td>
                                                <td>Multi</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Media</td>
                                                <td>Brightside</td>
                                            </tr>
                                            <tr>
                                                <td className="width1">Color</td>
                                                <td>Black, White</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="des-details3" className="tab-pane">
                                <div className="dec-review-wrap mb-50">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-5">
                                            <div className="dec-review-img-wrap">
                                                <div className="dec-review-img">
                                                    <img src="../../../static/assets/images/product-details/review-1.png" alt="review"/>
                                                </div>
                                                <div className="dec-client-name">
                                                    <h4>Jonathon Doe</h4>
                                                    <div className="dec-client-rating">
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star-half-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-8 col-md-7">
                                            <div className="dec-review-content">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                                <div className="review-content-bottom">
                                                    <div className="review-like">
                                                        <span><i className="la la-heart-o"></i> 24 Likes</span>
                                                    </div>
                                                    <div className="review-date">
                                                        <span>25 Jun 2019</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dec-review-wrap mb-50">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-5">
                                            <div className="dec-review-img-wrap">
                                                <div className="dec-review-img">
                                                    <img src="../../../static/assets/images/product-details/review-2.png" alt="review"/>
                                                </div>
                                                <div className="dec-client-name">
                                                    <h4>Jonathon Doe</h4>
                                                    <div className="dec-client-rating">
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star-half-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-8 col-md-7">
                                            <div className="dec-review-content">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                                <div className="review-content-bottom">
                                                    <div className="review-like">
                                                        <span><i className="la la-heart-o"></i> 24 Likes</span>
                                                    </div>
                                                    <div className="review-date">
                                                        <span>25 Jun 2019</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dec-review-wrap">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-5">
                                            <div className="dec-review-img-wrap">
                                                <div className="dec-review-img">
                                                    <img src="../../../static/assets/images/product-details/review-3.png" alt="review"/>
                                                </div>
                                                <div className="dec-client-name">
                                                    <h4>Jonathon Doe</h4>
                                                    <div className="dec-client-rating">
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star"></i>
                                                        <i className="la la-star-half-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-8 col-md-7">
                                            <div className="dec-review-content">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                                <div className="review-content-bottom">
                                                    <div className="review-like">
                                                        <span><i className="la la-heart-o"></i> 24 Likes</span>
                                                    </div>
                                                    <div className="review-date">
                                                        <span>25 Jun 2019</span>
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
            </div>
        </div>
        <div className="product-area pb-85">
            <div className="container">
                <div className="section-title-6 mb-50 text-center">
                    <h2>Related Product</h2>
                </div>
                <div className="product-slider-active owl-carousel">
                    <div className="product-wrap">
                        <div className="product-img mb-15">
                            <a href="product-details.html"><img src="../../../static/assets/images/product/pro-hm1-5.jpg" alt="product"/></a>
                            <div className="product-action">
                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className="la la-plus"></i></a>
                                <a title="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                <a title="Compare" href="#"><i className="la la-retweet"></i></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <span>Chair</span>
                            <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                            <div className="price-addtocart">
                                <div className="product-price">
                                    <span>$210.00</span>
                                </div>
                                <div className="product-addtocart">
                                    <a title="Add To Cart" href="#">+ Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-wrap">
                        <div className="product-img mb-15">
                            <a href="product-details.html"><img src="../../../static/assets/images/product/pro-hm1-6.jpg" alt="product"/></a>
                            <div className="product-action">
                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className="la la-plus"></i></a>
                                <a title="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                <a title="Compare" href="#"><i className="la la-retweet"></i></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <span>Chair</span>
                            <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                            <div className="price-addtocart">
                                <div className="product-price">
                                    <span>$210.00</span>
                                    <span className="old">$230.00</span>
                                </div>
                                <div className="product-addtocart">
                                    <a title="Add To Cart" href="#">+ Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-wrap">
                        <div className="product-img mb-15">
                            <a href="product-details.html"><img src="../../../static/assets/images/product/pro-hm1-7.jpg" alt="product"/></a>
                            <div className="product-action">
                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className="la la-plus"></i></a>
                                <a title="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                <a title="Compare" href="#"><i className="la la-retweet"></i></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <span>Chair</span>
                            <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                            <div className="price-addtocart">
                                <div className="product-price">
                                    <span>$250.00</span>
                                </div>
                                <div className="product-addtocart">
                                    <a title="Add To Cart" href="#">+ Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-wrap">
                        <div className="product-img mb-15">
                            <a href="product-details.html"><img src="../../../static/assets/images/product/pro-hm1-8.jpg" alt="product"/></a>
                            <div className="product-action">
                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className="la la-plus"></i></a>
                                <a title="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                <a title="Compare" href="#"><i className="la la-retweet"></i></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <span>Chair</span>
                            <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                            <div className="price-addtocart">
                                <div className="product-price">
                                    <span>$320.00</span>
                                    <span className="old">$120.00</span>
                                </div>
                                <div className="product-addtocart">
                                    <a title="Add To Cart" href="#">+ Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-wrap">
                        <div className="product-img mb-15">
                            <a href="product-details.html"><img src="../../../static/assets/images/product/pro-hm1-6.jpg" alt="product"/></a>
                            <span className="price-dec">-30%</span>
                            <div className="product-action">
                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className="la la-plus"></i></a>
                                <a title="Wishlist" href="#"><i className="la la-heart-o"></i></a>
                                <a title="Compare" href="#"><i className="la la-retweet"></i></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <span>Chair</span>
                            <h4><a href="product-details.html">Golden Easy Spot Chair.</a></h4>
                            <div className="price-addtocart">
                                <div className="product-price">
                                    <span>$210.00</span>
                                    <span className="old">$230.00</span>
                                </div>
                                <div className="product-addtocart">
                                    <a title="Add To Cart" href="#">+ Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
        </>
        )
    }
}

export default ProductDetail;