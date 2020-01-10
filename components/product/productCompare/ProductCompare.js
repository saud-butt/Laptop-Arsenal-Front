import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import $ from "jquery";

import ReactSelect from "../../reactSelect/ReactSelect";
import {
  getProduct,
  getProductByName
} from "../../../store/actions/productActions";
import Layout from "../../layouts/basicLayout/layout";
import { ProductHelper } from "../../../helpers";
import { toggleLoader } from "../../../store/actions/loading";

class Compare extends Component {
  componentDidMount() {
    const key = "compare1";
    const id = this.props.router.query.id;
    if (id) {
      this.props.getProduct(id, true, key);
    } else {
      this.props.toggleLoader(false);
    }
    $(document).ready(function() {
      $("html, body").animate(
        {
          scrollTop: $(".table").offset().top
        },
        "slow"
      );
    });
  }
  onChange = (selectedProduct, key) => {
    this.props.getProduct(selectedProduct.value, true, key);
  };
  render() {
    const { compare1, compare2, compare3 } = this.props;
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
                            <td className="first-column">Search</td>
                            <td>
                              <ReactSelect
                                onChange={this.onChange}
                                liberateOptions={this.props.getProductByName}
                                placeholder={"Search"}
                                searchedOptions={this.props.searchedProducts}
                                storeKey="compare1"
                              />
                            </td>
                            <td>
                              <ReactSelect
                                onChange={this.onChange}
                                liberateOptions={this.props.getProductByName}
                                placeholder={"Search"}
                                searchedOptions={this.props.searchedProducts}
                                storeKey="compare2"
                              />
                            </td>
                            <td>
                              <ReactSelect
                                onChange={this.onChange}
                                liberateOptions={this.props.getProductByName}
                                placeholder={"Search"}
                                searchedOptions={this.props.searchedProducts}
                                storeKey="compare3"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">Product</td>
                            <td className="product-image-title">
                              <a
                                href={`/products/show?id=${compare1._id}`}
                                className="image"
                              >
                                <img
                                  className="img-fluid"
                                  src={compare1.cover}
                                  alt={compare1.name}
                                />
                              </a>
                              <a href="#" className="category">
                                {compare1.brand}
                              </a>
                              <a
                                href={`/products/show?id=${compare1._id}`}
                                className="title"
                              >
                                {compare1.name}
                              </a>
                            </td>
                            <td className="product-image-title">
                              <a
                                href={`/products/show?id=${compare2._id}`}
                                className="image"
                              >
                                <img
                                  className="img-fluid"
                                  src={compare2.cover}
                                  alt={compare2.name}
                                />
                              </a>
                              <a href="#" className="category">
                                {compare2.brand}{" "}
                              </a>
                              <a
                                href={`/products/show?id=${compare2._id}`}
                                className="title"
                              >
                                {compare2.name}
                              </a>
                            </td>
                            <td className="product-image-title">
                              <a
                                href={`/products/show?id=${compare3._id}`}
                                className="image"
                              >
                                <img
                                  className="img-fluid"
                                  src={compare3.cover}
                                  alt={compare3.name}
                                />
                              </a>
                              <a href="#" className="category">
                                {compare3.brand}
                              </a>
                              <a
                                href={`/products/show?id=${compare3._id}`}
                                className="title"
                              >
                                {compare3.name}
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="first-column">Display</td>
                            <td className="pro-price">
                              {ProductHelper.getSpecs(compare1.display)}
                            </td>
                            <td className="pro-price">
                              {ProductHelper.getSpecs(compare2.display)}
                            </td>
                            <td className="pro-price">
                              {ProductHelper.getSpecs(compare3.display)}
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">OS</td>
                            <td className="pro-color">
                              {ProductHelper.getSpecs(compare1.os)}
                            </td>
                            <td className="pro-color">
                              {ProductHelper.getSpecs(compare2.os)}
                            </td>
                            <td className="pro-color">
                              {ProductHelper.getSpecs(compare3.os)}
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">Processor</td>
                            <td className="pro-color">
                              {ProductHelper.getSpecs(compare1.processor)}
                            </td>
                            <td className="pro-color">
                              {ProductHelper.getSpecs(compare2.processor)}
                            </td>
                            <td className="pro-color">
                              {ProductHelper.getSpecs(compare3.processor)}
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">Chipset</td>
                            <td className="pro-stock">{compare1.chipset}</td>
                            <td className="pro-stock">{compare2.chipset}</td>
                            <td className="pro-stock">{compare3.chipset}</td>
                          </tr>
                          <tr>
                            <td className="first-column">Memory</td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare1.memory)}
                            </td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare2.memory)}
                            </td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare3.memory)}
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">Storage</td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare1.storage)}
                            </td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare2.storage)}
                            </td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare3.storage)}
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">Graphics</td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare1.graphics)}
                            </td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare2.graphics)}
                            </td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare3.graphics)}
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">Webcam</td>
                            <td className="pro-stock">{compare1.camera}</td>
                            <td className="pro-stock">{compare2.camera}</td>
                            <td className="pro-stock">{compare3.camera}</td>
                          </tr>
                          <tr>
                            <td className="first-column">Keyboard</td>
                            <td className="pro-stock">{compare1.keyboard}</td>
                            <td className="pro-stock">{compare2.keyboard}</td>
                            <td className="pro-stock">{compare3.keyboard}</td>
                          </tr>
                          <tr>
                            <td className="first-column">Ports</td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare1.ports)}
                            </td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare2.ports)}
                            </td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare3.ports)}
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">Wireless</td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare1.wireless)}
                            </td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare2.wireless)}
                            </td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare3.wireless)}
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">Speakers</td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare1.speakers)}
                            </td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare2.speakers)}
                            </td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare3.speakers)}
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">Optical Drive</td>
                            <td className="pro-stock">
                              {compare1.opticaldrive}
                            </td>
                            <td className="pro-stock">
                              {compare2.opticaldrive}
                            </td>
                            <td className="pro-stock">
                              {compare3.opticaldrive}
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">Battery</td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare1.battery)}
                            </td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare2.battery)}
                            </td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare3.battery)}
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">Ac Power</td>
                            <td className="pro-stock">{compare1.ac_power}</td>
                            <td className="pro-stock">{compare2.ac_power}</td>
                            <td className="pro-stock">{compare3.ac_power}</td>
                          </tr>
                          <tr>
                            <td className="first-column">Security</td>
                            <td className="pro-stock">{compare1.security}</td>
                            <td className="pro-stock">{compare2.security}</td>
                            <td className="pro-stock">{compare3.security}</td>
                          </tr>
                          <tr>
                            <td className="first-column">Weight</td>
                            <td className="pro-stock">{compare1.weight}</td>
                            <td className="pro-stock">{compare2.weight}</td>
                            <td className="pro-stock">{compare3.weight}</td>
                          </tr>
                          <tr>
                            <td className="first-column">Dimensions</td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare1.dimensions)}
                            </td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare2.dimensions)}
                            </td>
                            <td className="pro-stock">
                              {ProductHelper.getSpecs(compare3.dimensions)}
                            </td>
                          </tr>
                          <tr>
                            <td className="first-column">Color</td>
                            <td className="pro-stock">{compare1.color}</td>
                            <td className="pro-stock">{compare2.color}</td>
                            <td className="pro-stock">{compare3.color}</td>
                          </tr>
                          <tr>
                            <td className="first-column">Price</td>
                            <td className="pro-stock">Rs.{compare1.price}</td>
                            <td className="pro-stock">Rs.{compare2.price}</td>
                            <td className="pro-stock">Rs.{compare3.price}</td>
                          </tr>
                          {/* <tr>
                            <td className="first-column">Remove</td>
                            <td className="pro-remove">
                              <button>
                                <FontAwesomeIcon icon="trash-alt" />
                              </button>
                            </td>
                            <td className="pro-remove">
                              <button>
                                <FontAwesomeIcon icon="trash-alt" />
                              </button>
                            </td>
                            <td className="pro-remove">
                              <button>
                                <FontAwesomeIcon icon="trash-alt" />
                              </button>
                            </td>
                          </tr> */}
                        </tbody>
                      </table>
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
  loading: state.loader.loading,
  product: state.products.product,
  searchedProducts: state.products.searchedProducts,
  compare1: state.products.compare1,
  compare3: state.products.compare3,
  compare2: state.products.compare2
});

export default connect(mapStateToProps, {
  getProduct,
  getProductByName,
  toggleLoader
})(withRouter(Compare));
