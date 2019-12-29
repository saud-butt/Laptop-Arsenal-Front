import React, { Component } from "react";
import Nouislider from "react-nouislider";

import { connect } from "react-redux";

import {
  filterProducts,
  getProductsByBrand,
  getProductsByCategory
} from "../../../store/actions/productActions";

class Filter extends Component {
  state = {
    filters: {
      name: "",
      category: "",
      brand: "",
      price: { gte: 200, lte: 10000, apply: false }
    }
  };

  onChange = e => {
    const { target } = e;
    const filters = {
      ...this.state.filters,
      [target.name]: target.value
    };
    this.setState({ filters });
  };

  onClick = (e, brand) => {
    e.preventDefault();
    this.props.getProductsByBrand(brand);
  };

  onCategoryClick = (e, category) => {
    e.preventDefault();
    this.props.getProductsByCategory(category);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.filterProducts({ ...this.state.filters });
  };

  onBrandClick = (e, value) => {
    e.preventDefault();
    const filters = {
      ...this.state.filters,
      brand: value
    };
    this.props.filterProducts({ ...filters });
    this.setState({ filters });
  };
  render() {
    const { name, category, brand, price } = this.state.filters;

    return (
      <div className="col-lg-3">
        <div className="sidebar-wrapper">
          <div className="sidebar-widget">
            <h4 className="sidebar-title">Search </h4>
            <div className="sidebar-search mb-40 mt-20">
              <form className="sidebar-search-form" onSubmit={this.onSubmit}>
                <input
                  type="text"
                  placeholder="Search here..."
                  name="name"
                  value={name}
                  onChange={this.onChange}
                />
                <button>
                  <i className="la la-search" />
                </button>
              </form>
            </div>
          </div>
          <div className="sidebar-widget shop-sidebar-border pt-40">
            <h4 className="sidebar-title">Search By Companies</h4>
            <div className="shop-catigory mt-20">
              <ul id="faq">
                <li>
                  {" "}
                  <a
                    data-toggle="collapse"
                    data-parent="#faq"
                    href="/products?brand=acer"
                    onClick={e => this.onClick(e, "acer")}
                  >
                    Acer
                    <i className="la la-angle-down" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    data-toggle="collapse"
                    data-parent="#faq"
                    href="#"
                    onClick={e => this.onClick(e, "asus")}
                  >
                    Asus <i className="la la-angle-down" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    data-toggle="collapse"
                    data-parent="#faq"
                    href="#"
                    onClick={e => this.onClick(e, "apple")}
                  >
                    Apple <i className="la la-angle-down" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#." onClick={e => this.onClick(e, "dell")}>
                    Dell <i className="la la-angle-down" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    data-toggle="collapse"
                    data-parent="#faq"
                    href="#"
                    onClick={e => this.onClick(e, "gigabyte")}
                  >
                    GigaByte <i className="la la-angle-down" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    data-toggle="collapse"
                    data-parent="#faq"
                    href="#"
                    onClick={e => this.onClick(e, "hp")}
                  >
                    HP <i className="la la-angle-down" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    data-toggle="collapse"
                    data-parent="#faq"
                    href="#"
                    onClick={e => this.onClick(e, "lenovo")}
                  >
                    Lenovo <i className="la la-angle-down" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    data-toggle="collapse"
                    data-parent="#faq"
                    href="#"
                    onClick={e => this.onClick(e, "msi")}
                  >
                    MSI <i className="la la-angle-down" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    data-toggle="collapse"
                    data-parent="#faq"
                    href="#"
                    onClick={e => this.onClick(e, "razer")}
                  >
                    Razer <i className="la la-angle-down" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-widget pt-40 mt-40 shop-sidebar-border">
            <h4 className="sidebar-title">Search By Categories</h4>
            <div className="sidebar-widget-tag mt-20">
              <ul>
                <li>
                  <a
                    href="/products?category=gaming"
                    onClick={e => this.onCategoryClick(e, "gaming")}
                  >
                    Gaming
                  </a>
                </li>
                <li>
                  <a
                    href="/products?category=standard"
                    onClick={e => this.onCategoryClick(e, "standard")}
                  >
                    Standard
                  </a>
                </li>
                <li>
                  <a
                    href="/products?category=tablet"
                    onClick={e => this.onCategoryClick(e, "tablet")}
                  >
                    2 in 1
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="sidebar-widget pt-40 mt-40 shop-sidebar-border">
            <h4 className="sidebar-title">Search By RAM </h4>
            <div className="sidebar-widget-tag mt-20">
              <ul>
                <li>
                  <a href="#">4 GB</a>
                </li>
                <li>
                  <a href="#">8 GB</a>
                </li>
                <li>
                  <a href="#">16 GB ></a>
                </li>
              </ul>
            </div>
          </div> */}
          {/* <div className="shop-price-filter mt-35 shop-sidebar-border pt-40 sidebar-widget">
            <h4 className="sidebar-title">Price Filter</h4>
            <div className="price-filter mt-20">
              <div id="slider-range" />
              <div className="price-slider-amount">
                <div className="label-input">
                  <Nouislider
                    range={{ min: 10000, max: 300000 }}
                    start={[10000, 300000]}
                    step={1}
                    tooltips={true}
                    // connect={"lower"}
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default connect(null, {
  filterProducts,
  getProductsByBrand,
  getProductsByCategory
})(Filter);
