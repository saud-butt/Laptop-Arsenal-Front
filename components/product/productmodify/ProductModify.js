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
  constructor(props) {
    super(props);
    this.state = {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.router.query.id) {
      const id = this.props.router.query.id;
      if (id) {
        this.props.getProduct(id);
      }
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }

  // onSubmit(e) {
  //   e.preventDefault();

  //   const productData = {
  //     processor: this.state.processor,
  //      graphics: this.state.graphics,
  //      memory: this.state.memory,
  //     storage: this.state.storage,
  //   };

  //   this.props.createProfile(productData, this.props.history);
  // }

  onSelect(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChange = (selectedProduct, key) => {
    this.props.getProduct(selectedProduct.value, true, key);
  };

  render() {
    const { product } = this.props;

    const processorOptions = [
      { label: "Select a new processor", value: 0 },
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
    const graphicsOptions = [
      { label: "Select a new graphics adapter", value: 0 },
      {
        label: "AMD Radeon 530 (2GB GDDR5)",
        value: "AMD Radeon 530 (2GB GDDR5)"
      },
      { label: "AMD Radeon RX Vega 3", value: "AMD Radeon RX Vega 3" },
      {
        label: "AMD Radeon 530 (2GB DDR3)",
        value: "AMD Radeon 530 (2GB DDR3)"
      },
      {
        label: "AMD Radeon 520 (2GB GDDR5)",
        value: "AMD Radeon 520 (2GB GDDR5)"
      },
      {
        label: "NVIDIA GeForce MX110 (2GB GDDR5)",
        value: "NVIDIA GeForce MX110 (2GB GDDR5)"
      },
      { label: "AMD Radeon 530 (4GB GDDR5)", value: "Core i3 9th Gen" },
      {
        label: "NVIDIA Quadro M520 (2GB GDDR5)",
        value: "NVIDIA Quadro M520 (2GB GDDR5)"
      },
      {
        label: "NVIDIA GeForce MX130 (2GB GDDR5)",
        value: "NVIDIA GeForce MX130 (2GB GDDR5)"
      },
      {
        label: "NVIDIA GeForce MX230 (2GB GDDR5)",
        value: "NVIDIA GeForce MX230 (2GB GDDR5)"
      },
      {
        label: "AMD Radeon RX 550 (64-bit, 2GB GDDR5)",
        value: "AMD Radeon RX 550 (64-bit, 2GB GDDR5)"
      },
      {
        label: "NVIDIA Quadro P2000 (Laptop, 4GB GDDR5)",
        value: "NVIDIA Quadro P2000 (Laptop, 4GB GDDR5)"
      },
      {
        label: "AMD Radeon RX Vega M GL (Vega 870, 4GB HBM2)",
        value: "AMD Radeon RX Vega M GL (Vega 870, 4GB HBM2)"
      },
      {
        label: "NVIDIA GeForce GTX 1050 Ti (4GB GDDR5)",
        value: "NVIDIA GeForce GTX 1050 Ti (4GB GDDR5)"
      },
      { label: "NVIDIA GeForce GTX 1650", value: "NVIDIA GeForce GTX 1650" },
      {
        label: "AMD Radeon RX 580 (4GB GDDR5)",
        value: "AMD Radeon RX 580 (4GB GDDR5)"
      },
      {
        label: "NVIDIA Quadro P4000 (8GB GDDR5)",
        value: "NVIDIA Quadro P4000 (8GB GDDR5)"
      },
      {
        label: "NVIDIA GeForce GTX 1070 Max-Q (8GB GDDR5)",
        value: "NVIDIA GeForce GTX 1070 Max-Q (8GB GDDR5)"
      },
      {
        label: "NVIDIA GeForce GTX 1660 Ti",
        value: "NVIDIA GeForce GTX 1660 Ti"
      },
      { label: "NVIDIA GeForce RTX 2060", value: "NVIDIA GeForce RTX 2060" },
      { label: "NVIDIA GeForce RTX 2070", value: "NVIDIA GeForce RTX 2070" },
      { label: "NVIDIA GeForce RTX 2080", value: "NVIDIA GeForce RTX 2080" }
    ];
    const memoryOptions = [
      { label: "Select a new RAM", value: 0 },
      { label: "4 GB", value: "4 GB" },
      { label: "8 GB", value: "8 GB" },
      { label: "16 GB", value: "16 GB" }
    ];
    const storageOptions = [
      { label: "Select a new HDD or SSD", value: 0 },
      { label: "128 GB SSD", value: "128 GB SSD" },
      { label: "256 GB SSD", value: "256 GB SSD" },
      { label: "500 GB SSD", value: "500 GB SSD" },
      { label: "1 TB SSD", value: "1 TB SSD" },
      { label: "128 GB HDD", value: "128 GB HDD" },
      { label: "256 GB HDD", value: "256 GB HDD" },
      { label: "500 GB HDD", value: "500 GB HDD" },
      { label: "1 TB HDD", value: "1 TB HDD" },
      { label: "2 TB HDD", value: "2 TB HDD" }
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
                          <label>Model </label>
                          <ReactSelect
                            className="input-text"
                            onChange={this.onChange}
                            liberateOptions={this.props.getProductByName}
                            placeholder={product.name}
                            searchedOptions={this.props.searchedProducts}
                            storeKey="product"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-select mb-20">
                          <label>Processor</label>
                          {ProductHelper.getSpecs(product.processor)}

                          <SelectListGroup
                            name="processor"
                            value={this.state.processor}
                            onChange={this.onSelect}
                            options={processorOptions}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-select mb-20">
                          <label>Graphics </label>
                          {ProductHelper.getSpecs(product.graphics)}

                          <SelectListGroup
                            name="graphics"
                            value={this.state.graphics}
                            onChange={this.onSelect}
                            options={graphicsOptions}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-select mb-20">
                          <label>RAM </label>
                          {ProductHelper.getSpecs(product.memory)}

                          <SelectListGroup
                            name="memory"
                            value={this.state.memory}
                            onChange={this.onSelect}
                            options={memoryOptions}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-select mb-20">
                          <label>Hard disk </label>
                          {ProductHelper.getSpecs(product.storage)}

                          <SelectListGroup
                            name="storage"
                            value={this.state.storage}
                            onChange={this.onSelect}
                            options={storageOptions}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>Your Updated Product</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-info-wrap">
                        <div className="your-order-info">
                          <ul>
                            <li>
                              Items <span>Price</span>
                            </li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            <li>
                              Core i7 6th gen <span>Rs.16000 </span>
                            </li>
                          </ul>
                        </div>
                        <div class="your-order-info order-subtotal">
                          <ul>
                            <li>
                              Items Total <span>Rs.16000 </span>
                            </li>
                          </ul>
                        </div>

                        <div className="your-order-info order-total">
                          <ul>
                            <li>
                              Total Price <span>Rs.152220 </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Place-order mt-40">
                      <a href="#">Finish</a>
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
