import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import $ from "jquery";

import Layout from "../../layouts/basicLayout/layout";
import {
  getProduct,
  getRelatedProduct
} from "../../../store/actions/productActions";
import { getProductReview } from "../../../store/actions/reviewActions";
import Related from "../detail/Related";
import Description from "../detail/Description";
import Overview from "../detail/Overview";
import { toggleLoader } from "../../../store/actions/loading";

class ProductDetail extends Component {
  state = {
    loadRelatedProducts: true
  };
  componentDidMount() {
    const id = this.props.router.query.id;
    if (id) {
      this.props.getProduct(id);
      this.props.getProductReview(id);
    } else {
      this.props.toggleLoader(false);
    }

    $(document).ready(function() {
      $("html, body").animate(
        {
          scrollTop: $(".scroll").offset().top
        },
        "slow"
      );
    });
  }
  componentDidUpdate() {
    const { loadRelatedProducts } = this.state;
    const { product } = this.props;
    const { brand } = product;
    if (brand && loadRelatedProducts) {
      this.props.getRelatedProduct(brand);
      this.setState({ loadRelatedProducts: false });
    }
  }

  render() {
    const { product, loading } = this.props;
    const { brand, name, images, price, link, _id } = product;
    const over =
      loading && product ? (
        " LOADING "
      ) : (
        <>
          <Overview
            brand={brand}
            name={name}
            price={price}
            images={images}
            link={link}
            id={_id}
          />
          <Description product={product} />
          <Related brand={brand} />
        </>
      );
    return (
      <Layout>
        <div className="scroll">{over}</div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  pagination: state.products.pagination,
  loading: state.loader.loading,
  product: state.products.product
});

export default connect(mapStateToProps, {
  getProduct,
  getRelatedProduct,
  getProductReview,
  toggleLoader
})(withRouter(ProductDetail));
