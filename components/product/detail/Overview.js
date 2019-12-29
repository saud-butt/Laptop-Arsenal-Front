import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";

import { addToWishlist } from "../../../store/actions/userActions";
import Images from "./Images";

class Overview extends Component {
  onClick = id => {
    if (this.props.isAuthenticated) {
      this.props.addToWishlist(id);
    } else {
      Router.push("/auth/login");
    }
  };
  render() {
    const { images, name, link, id, price, brand } = this.props;

    return (
      <div className="product-details-area pt-90 pb-90">
        <div className="container">
          <div className="row">
            {images && <Images images={images} name={name} />}

            <div className="col-lg-6 col-md-6">
              <div className="product-details-content pro-details-content-modify">
                <span>{brand}</span>
                <h2>{name}</h2>

                <div className="pro-details-price-wrap">
                  <div className="product-price">
                    <span>{price}</span>
                  </div>
                </div>

                <div className="pro-details-compare-wishlist">
                  <div className="pro-details-buy-now btn-hover btn-hover-radious">
                    <a title="Add To Wishlist" onClick={() => this.onClick(id)}>
                      <i className="la la-heart-o"></i> Add to wish list
                    </a>
                  </div>
                </div>
                <div className="pro-details-buy-now btn-hover btn-hover-radious">
                  <a href={`/products/compare?id=${id}`}>Compare</a>
                </div>
                <br />
                <div className="pro-details-buy-now btn-hover btn-hover-radious">
                  <a href={link}>Visit on official website</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addToWishlist })(Overview);
