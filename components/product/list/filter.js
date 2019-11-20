import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider, { Range } from "rc-slider";
import { connect } from "react-redux";

import { filterProducts } from "../../../store/actions/productActions";

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
            <h4 className="sidebar-title">Search By Categories</h4>
            <div className="shop-catigory mt-20">
              <ul id="faq">
                <li>
                  {" "}
                  <a
                    data-toggle="collapse"
                    data-parent="#faq"
                    href="#shop-catigory-1"
                  >
                    Acer
                    <i className="la la-angle-down" />
                  </a>
                  <ul
                    id="shop-catigory-1"
                    className="panel-collapse collapse show"
                  >
                    <li>
                      <a href="#">Standard Laptops </a>
                    </li>
                    <li>
                      <a href="#">Gaming Laptops</a>
                    </li>
                    <li>
                      <a href="#">2 in 1 </a>
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
                    Asus <i className="la la-angle-down" />
                  </a>
                  <ul id="shop-catigory-2" className="panel-collapse collapse">
                    <li>
                      <a href="#">Standard Laptops </a>
                    </li>
                    <li>
                      <a href="#">2 in 1</a>
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
                    Apple <i className="la la-angle-down" />
                  </a>
                  <ul id="shop-catigory-2" className="panel-collapse collapse">
                    <li>
                      <a href="#">MacBook Air </a>
                    </li>
                    <li>
                      <a href="#">MacBook Pro</a>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#." onClick={e => this.onBrandClick(e, "dell")}>
                    Dell <i className="la la-angle-down" />
                  </a>
                  <ul id="shop-catigory-3" className="panel-collapse collapse">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Work</a>
                    </li>
                    <li>
                      <a href="#">2 in 1</a>
                    </li>
                    <li>
                      <a href="#">Alienware</a>
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
                    GigaByte <i className="la la-angle-down" />
                  </a>
                  <ul id="shop-catigory-3" className="panel-collapse collapse">
                    <li>
                      <a href="#">Standard Laptops</a>
                    </li>
                    <li>
                      <a href="#">Gaming Laptops</a>
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
                    HP <i className="la la-angle-down" />
                  </a>
                  <ul id="shop-catigory-3" className="panel-collapse collapse">
                    <li>
                      <a href="#">Standard Laptops</a>
                    </li>
                    <li>
                      <a href="#">Work Laptops</a>
                    </li>
                    <li>
                      <a href="#">Primium Laptops</a>
                    </li>
                    <li>
                      <a href="#">2 in 1</a>
                    </li>
                    <li>
                      <a href="#">Workstations</a>
                    </li>
                    <li>
                      <a href="#">Omen</a>
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
                    Lenovo <i className="la la-angle-down" />
                  </a>
                  <ul id="shop-catigory-3" className="panel-collapse collapse">
                    <li>
                      <a href="#">Standard Laptops</a>
                    </li>
                    <li>
                      <a href="#">Workstations</a>
                    </li>
                    <li>
                      <a href="#">2 in 1</a>
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
                    MSI <i className="la la-angle-down" />
                  </a>
                  <ul id="shop-catigory-3" className="panel-collapse collapse">
                    <li>
                      <a href="#">Standard Laptops</a>
                    </li>
                    <li>
                      <a href="#">Workstations</a>
                    </li>
                    <li>
                      <a href="#">Gaming Laptops</a>
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
                    Razer <i className="la la-angle-down" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="shop-price-filter mt-35 shop-sidebar-border pt-40 sidebar-widget">
            <h4 className="sidebar-title">Price Filter</h4>
            <div className="price-filter mt-20">
              <span>Range: Rs.100.00 - 1.300.00 </span>
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
                      New <span>4</span>{" "}
                    </a>
                    <span className="checkmark" />
                  </div>
                </li>
                <li>
                  <div className="sidebar-widget-list-left">
                    <input type="checkbox" value="" />{" "}
                    <a href="#">
                      Top Rated <span>5</span>
                    </a>
                    <span className="checkmark" />
                  </div>
                </li>
                <li>
                  <div className="sidebar-widget-list-left">
                    <input type="checkbox" value="" />{" "}
                    <a href="#">
                      Featured <span>6</span>{" "}
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
                  <a href="#">Gaming</a>
                </li>
                <li>
                  <a href="#">Workstations</a>
                </li>
                <li>
                  <a href="#">Hp</a>
                </li>
                <li>
                  <a href="#">2 in 1</a>
                </li>
                <li>
                  <a href="#">Dell</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { filterProducts }
)(Filter);
