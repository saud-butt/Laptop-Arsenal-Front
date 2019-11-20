import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../../layouts/basicLayout/layout";
import { getAllProducts } from "../../../store/actions/productActions";
import ListCard from "../list/listCard";
import Paginate from "../../pagination/paginate";
import SelectListGroup from "../../selectListGroup/selectListGroup";
import Filter from "../list/filter";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onClick = data => {
    this.props.getAllProducts(data.selected + 1);
  };

  onChange(e) {
    this.props.getAllProducts(e.selected, (e.limit = e.target.value));
  }

  render() {
    const { pagination, products } = this.props;
    const { totalPages, totalDocs, page, limit } = pagination;
    const start = limit * (page - 1) + 1;
    const end = limit * page;
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

    const options = [
      { label: "12", value: "12" },
      { label: "24", value: "24" },
      { label: "36", value: "36" },
      { label: "48", value: "48" },
      { label: "60", value: "60" }
    ];
    const options1 = [
      { label: "Latest", value: "Latest" },
      { label: "Price", value: "Price" }
    ];

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
                          <FontAwesomeIcon icon="th" />
                        </a>
                        <a href="#shop-2" data-toggle="tab">
                          <FontAwesomeIcon icon="list" />
                        </a>
                      </div>
                      <p>
                        Page: {page} Showing {start} - {end} of {totalDocs}{" "}
                        results
                      </p>
                    </div>
                    <div className="product-sorting-wrapper">
                      <div className="product-shorting shorting-style">
                        <label>View:</label>
                        <SelectListGroup
                          name="view"
                          value={limit}
                          onChange={this.onChange}
                          options={options}
                        />
                      </div>
                      <div className="product-shorting shorting-style">
                        <label> Sort by:</label>
                        <SelectListGroup
                          name="sort by"
                          value={limit}
                          onChange={this.onChange}
                          options={options1}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="shop-bottom-area">
                    <div className="tab-content jump">
                      <div id="shop-1" className="tab-pane active">
                        <div className="row">{productData}</div>
                      </div>
                      <div className="pagination-style text-center">
                        <Paginate
                          onClick={this.onClick}
                          pageCount={totalPages}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Filter />
              </div>
            </div>
          </div>

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
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
const mapStateToProps = state => ({
  products: state.products.products,
  pagination: state.products.pagination,
  loader: state.loader
});

export default connect(
  mapStateToProps,
  { getAllProducts }
)(ListItem);
