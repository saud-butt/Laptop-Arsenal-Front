import React from "react";

import Images from "./Images";

const Overview = ({ images, name, price, brand }) => {
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
                  <a title="Add To Wishlist" href="#">
                    <i className="la la-heart-o"></i> Add to wish list
                  </a>
                </div>
              </div>
              <div className="pro-details-buy-now btn-hover btn-hover-radious">
                <a href="#">Compare</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
