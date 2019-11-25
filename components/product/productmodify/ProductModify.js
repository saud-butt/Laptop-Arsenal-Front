import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";

import {
  getProduct,
  getProductByName
} from "../../../store/actions/productActions";
import Layout from "../../layouts/basicLayout/layout";
import SelectListGroup from "../../selectListGroup/selectListGroup";
import ReactSelect from "../../reactSelect/ReactSelect";
import { ProductHelper } from "../../../helpers";

class ProductModify extends Component {
  componentDidMount() {
    if (this.props.router.query.id) {
      const id = this.props.router.query.id;
      if (id) {
        this.props.getProduct(id);
      }
    }
  }
  onChange = (selectedProduct, key) => {
    this.props.getProduct(selectedProduct.value, true, key);
  };

  render() {
    const { product } = this.props;

    const processors = [
      { label: "Core i3 4th Gen", value: "Core i3 4th Gen" },
      { label: "Core i3 5th Gen", value: "Core i3 5th Gen" },
      { label: "Core i3 6th Gen", value: "Core i3 6th Gen" },
      { label: "Core i3 7th Gen", value: "Core i3 7th Gen" },
      { label: "Core i3 8th Gen", value: "Core i3 8th Gen" },
      { label: "Core i3 9th Gen", value: "Core i3 9th Gen" },
      { label: "Core i5 4th Gen", value: "Core i5 4th Gen" },
      { label: "Core i5 5th Gen", value: "Core i5 5th Gen" },
      { label: "Core i5 6th Gen", value: "Core i5 6th Gen" },
      { label: "Core i5 7th Gen", value: "Core i5 7th Gen" },
      { label: "Core i5 8th Gen", value: "Core i5 8th Gen" },
      { label: "Core i5 9th Gen", value: "Core i5 9th Gen" },
      { label: "Core i7 4th Gen", value: "Core i7 4th Gen" },
      { label: "Core i7 5th Gen", value: "Core i7 5th Gen" },
      { label: "Core i7 6th Gen", value: "Core i7 6th Gen" },
      { label: "Core i7 7th Gen", value: "Core i7 7th Gen" },
      { label: "Core i7 8th Gen", value: "Core i7 8th Gen" },
      { label: "Core i7 9th Gen", value: "Core i7 9th Gen" }
    ];

    return (
      <Layout>
        <div className="checkout-main-area pt-90 pb-90">
          <div className="container">
            <div className="checkout-wrap pt-30">
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap mr-50">
                    <h3>Customize and make your own laptop</h3>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="billing-info mb-20 ">
                          <label>
                            Model{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <ReactSelect
                            className="input-text"
                            onChange={this.onChange}
                            liberateOptions={this.props.getProductByName}
                            placeholder={product.name}
                            searchedOptions={this.props.searchedProducts}
                          ></ReactSelect>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>
                            Processor
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <SelectListGroup
                            name="view"
                            value={"core i3 7th Gen"}
                            onChange={this.onSelect}
                            options={processors}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>
                            Company Name{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-select mb-20">
                          <label>
                            Country{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <select>
                            <option>Select a country</option>
                            <option>Azerbaijan</option>
                            <option>Bahamas</option>
                            <option>Bahrain</option>
                            <option>Bangladesh</option>
                            <option>Barbados</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>
                            Street Address{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input
                            className="billing-address"
                            placeholder="House number and street name"
                            type="text"
                          />
                          <input
                            placeholder="Apartment, suite, unit etc."
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>
                            Town / City{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="billing-info mb-20">
                          <label>
                            State / County{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="billing-info mb-20">
                          <label>
                            Postcode / ZIP{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="billing-info mb-20">
                          <label>
                            Phone{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="billing-info mb-20">
                          <label>
                            Email Address{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="checkout-account mb-25">
                      <input className="checkout-toggle2" type="checkbox" />
                      <span>Create an account?</span>
                    </div>
                    <div className="checkout-account-toggle open-toggle2 mb-30">
                      <label>Email Address</label>
                      <input placeholder="Password" type="password" />
                    </div>
                    <div className="checkout-account mt-25">
                      <input className="checkout-toggle" type="checkbox" />
                      <span>Ship to a different address?</span>
                    </div>
                    <div className="different-address open-toggle mt-30">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>First Name</label>
                            <input type="text" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>Last Name</label>
                            <input type="text" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="billing-info mb-20">
                            <label>Company Name</label>
                            <input type="text" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="billing-select mb-20">
                            <label>Country</label>
                            <select>
                              <option>Select a country</option>
                              <option>Azerbaijan</option>
                              <option>Bahamas</option>
                              <option>Bahrain</option>
                              <option>Bangladesh</option>
                              <option>Barbados</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="billing-info mb-20">
                            <label>Street Address</label>
                            <input
                              className="billing-address"
                              placeholder="House number and street name"
                              type="text"
                            />
                            <input
                              placeholder="Apartment, suite, unit etc."
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="billing-info mb-20">
                            <label>Town / City</label>
                            <input type="text" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>State / County</label>
                            <input type="text" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>Postcode / ZIP</label>
                            <input type="text" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>Phone</label>
                            <input type="text" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>Email Address</label>
                            <input type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="additional-info-wrap">
                      <label>Order notes</label>
                      <textarea
                        placeholder="Notes about your order, e.g. special notes for delivery. "
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>Your order</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-info-wrap">
                        <div className="your-order-info">
                          <ul>
                            <li>
                              Product <span>Total</span>
                            </li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            <li>
                              Product Name X 1 <span>$329 </span>
                            </li>
                            <li>
                              Product Name X 1 <span>$329 </span>
                            </li>
                          </ul>
                        </div>
                        <div className="your-order-info order-subtotal">
                          <ul>
                            <li>
                              Subtotal <span>$329 </span>
                            </li>
                          </ul>
                        </div>
                        <div className="your-order-info order-shipping">
                          <ul>
                            <li>
                              Shipping <p>Enter your full address </p>
                            </li>
                          </ul>
                        </div>
                        <div className="your-order-info order-total">
                          <ul>
                            <li>
                              Total <span>$273.00 </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="payment-method">
                        <div className="pay-top sin-payment">
                          <input
                            id="payment_method_1"
                            className="input-radio"
                            type="radio"
                            value="cheque"
                            checked="checked"
                            name="payment_method"
                          />
                          <label for="payment_method_1">
                            {" "}
                            Direct Bank Transfer{" "}
                          </label>
                          <div className="payment-box payment_method_bacs">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                            </p>
                          </div>
                        </div>
                        <div className="pay-top sin-payment">
                          <input
                            id="payment-method-2"
                            className="input-radio"
                            type="radio"
                            value="cheque"
                            name="payment_method"
                          />
                          <label for="payment-method-2">Check payments</label>
                          <div className="payment-box payment_method_bacs">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                            </p>
                          </div>
                        </div>
                        <div className="pay-top sin-payment">
                          <input
                            id="payment-method-3"
                            className="input-radio"
                            type="radio"
                            value="cheque"
                            name="payment_method"
                          />
                          <label for="payment-method-3">
                            Cash on delivery{" "}
                          </label>
                          <div className="payment-box payment_method_bacs">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                            </p>
                          </div>
                        </div>
                        <div className="pay-top sin-payment sin-payment-3">
                          <input
                            id="payment-method-4"
                            className="input-radio"
                            type="radio"
                            value="cheque"
                            name="payment_method"
                          />
                          <label for="payment-method-4">
                            PayPal{" "}
                            <img
                              alt=""
                              src="assets/images/icon-img/payment.png"
                            />
                            <a href="#">What is PayPal?</a>
                          </label>
                          <div className="payment-box payment_method_bacs">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Place-order mt-40">
                      <a href="#">Place Order</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loader.loading,
  product: state.products.product,
  searchedProducts: state.products.searchedProducts
});

export default connect(mapStateToProps, { getProduct, getProductByName })(
  withRouter(ProductModify)
);
