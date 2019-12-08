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

export default connect(mapStateToProps, { getAllProducts })(ListItem);
