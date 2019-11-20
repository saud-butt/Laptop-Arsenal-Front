import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Related extends Component {
  render() {
    const { products, loading } = this.props;

    const related = loading
      ? "Loading"
      : products.map((product, index) => (
          <div className="col-sm-3">
            <div className="product-wrap" key={index}>
              <div className="product-img mb-15">
                <a href={`/products/show?id=${product._id}`}>
                  <img
                    className="img-responsive"
                    src={product.images[0]}
                    alt={product.name}
                  />
                </a>
                <div className="product-action">
                  <a
                    data-toggle="modal"
                    data-target="#exampleModal"
                    title="Quick View"
                    href={`/products/show?id=${product._id}`}
                  >
                    <i className="la la-plus"></i>
                  </a>
                  <a title="Wishlist" href={`/products/show?id=${product._id}`}>
                    <FontAwesomeIcon icon={["far", "heart"]} />
                  </a>
                  <a title="Compare" href={`/products/show?id=${product._id}`}>
                    <FontAwesomeIcon icon="dice-d20" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <span>{product.brand}</span>
                <h4>
                  <a href={`/products/show?id=${product._id}`}>
                    {product.name}
                  </a>
                </h4>
                <div className="price-addtocart">
                  <div className="product-price">
                    <span>{product.price}</span>
                  </div>
                  <div className="product-addtocart">
                    <a
                      title="Add To Wishlist"
                      href={`/products/show?id=${product._id}`}
                    >
                      + Add To Wishlist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ));
    return (
      <div className="product-area pb-85">
        <div className="container">
          <div className="section-title-6 mb-50 text-center">
            <h2>Related Product</h2>
          </div>
          <div className="row">{related}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.loader.loading
});

export default connect(mapStateToProps)(Related);
