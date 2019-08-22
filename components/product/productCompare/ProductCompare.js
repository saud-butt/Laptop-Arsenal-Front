import React, { Component } from "react";
import Layout from "../../layouts/basicLayout/layout";

class Compare extends Component {
  render() {
    return (
      <>
        <Layout>
          <div className="compare-page-wrapper pt-90 pb-90">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* <!-- Compare Page Content Start --> */}
                  <div className="compare-page-content-wrap">
                    <div className="compare-table table-responsive">
                      <table className="table table-bordered mb-0">
                        <tbody>
                          <tr>
                            <td className="first-column">Product</td>
                            <td className="product-image-title">
                              <a href="single-product.html" className="image">
                                <img
                                  className="img-fluid"
                                  src="../../../static/assets/images/product/pro-hm1-1.jpg"
                                  alt="Compare Product"
                                />
                              </a>
                              <a href="#" className="category">
                                Table
                              </a>
                              <a
                                href="single-product-sale.html"
                                className="title"
                              >
                                Demo Product Name
                              </a>
                            </td>
                            <td className="product-image-title">
                              <a href="single-product.html" className="image">
                                <img
                                  className="img-fluid"
                                  src="../../../static/assets/images/product/pro-hm1-2.jpg"
                                  alt="Compare Product"
                                />
                              </a>
                              <a href="#" className="category">
                                Table{" "}
                              </a>
                              <a
                                href="single-product-group.html"
                                className="title"
                              >
                                Demo Product Name
                              </a>
                            </td>
                            <td className="product-image-title">
                              <a href="single-product.html" className="image">
                                <img
                                  className="img-fluid"
                                  src="../../../static/assets/images/product/pro-hm1-3.jpg"
                                  alt="Compare Product"
                                />
                              </a>
                              <a href="#" className="category">
                                Table
                              </a>
                              <a href="single-product.html" className="title">
                                Demo Product Name
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">Description</td>
                            <td className="pro-desc">
                              <p>
                                Samsome Note Book Pro 5 is an the best Laptop on
                                this budgeted. You can satisfied after usign
                                this laptop.{" "}
                              </p>
                            </td>
                            <td className="pro-desc">
                              <p>
                                Samsome Note Book Pro 5 is an the best Laptop on
                                this budgeted. You can satisfied after usign
                                this laptop.{" "}
                              </p>
                            </td>
                            <td className="pro-desc">
                              <p>
                                Samsome Note Book Pro 5 is an the best Laptop on
                                this budgeted. You can satisfied after usign
                                this laptop.{" "}
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">Price</td>
                            <td className="pro-price">$295</td>
                            <td className="pro-price">$275</td>
                            <td className="pro-price">$395</td>
                          </tr>
                          <tr>
                            <td className="first-column">Color</td>
                            <td className="pro-color">Black</td>
                            <td className="pro-color">Red</td>
                            <td className="pro-color">Blue</td>
                          </tr>
                          <tr>
                            <td className="first-column">Stock</td>
                            <td className="pro-stock">In Stock</td>
                            <td className="pro-stock">Stock Out</td>
                            <td className="pro-stock">In Stock</td>
                          </tr>
                          <tr>
                            <td className="first-column">Add to cart</td>
                            <td>
                              <a href="cart.html" className="check-btn">
                                Add to Cart
                              </a>
                            </td>
                            <td>
                              <a
                                href="cart.html"
                                className="check-btn disabled"
                              >
                                Add to Cart
                              </a>
                            </td>
                            <td>
                              <a href="cart.html" className="check-btn">
                                Add to Cart
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">Rating</td>
                            <td className="pro-ratting">
                              <i className="la la-star" />
                              <i className="la la-star" />
                              <i className="la la-star" />
                              <i className="la la-star" />
                              <i className="la la-star" />
                            </td>
                            <td className="pro-ratting">
                              <i className="la la-star" />
                              <i className="la la-star" />
                              <i className="la la-star" />
                              <i className="la la-star" />
                              <i className="la la-star" />
                            </td>
                            <td className="pro-ratting">
                              <i className="la la-star" />
                              <i className="la la-star" />
                              <i className="la la-star" />
                              <i className="la la-star" />
                              <i className="la la-star" />
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">Remove</td>
                            <td className="pro-remove">
                              <button>
                                <i className="la la-trash" />
                              </button>
                            </td>
                            <td className="pro-remove">
                              <button>
                                <i className="la la-trash" />
                              </button>
                            </td>
                            <td className="pro-remove">
                              <button>
                                <i className="la la-trash" />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* <!-- Compare Page Content End --> */}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}
export default Compare;
