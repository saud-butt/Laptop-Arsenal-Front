import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";

import Layout from "../layouts/basicLayout/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  getWishlist,
  removeFromWishlist
} from "../../store/actions/userActions";

class wishlist extends Component {
  componentDidMount() {
    // if (this.props.auth.isAuthenticated == true) {
    //   this.props.getWishlist();
    // } else {
    //   Router.push("/auth/login");
    // }
    this.props.getWishlist();
  }
  onClick = id => {
    this.props.removeFromWishlist(id);
  };
  render() {
    const { wishlist, loading } = this.props;
    let items;
    if (wishlist) {
      items = loading
        ? "Loading"
        : wishlist.map((item, index) => (
            <tr>
              <td className="product-thumbnail">
                <a href={`/products/show?id=${item._id}`}>
                  <img
                    src={item.cover}
                    alt={item.name}
                    style={{ height: "70px", width: "90px" }}
                  />
                </a>
              </td>
              <td className="product-name">
                <a href={`/products/show?id=${item._id}`}>{item.name}</a>
              </td>
              <td className="product-price-cart">
                <span className="amount">RS.{item.price}</span>
              </td>
              <td className="product-wishlist-cart">
                <a href={`/products/compare?id=${item._id}`}>Add to compare</a>
              </td>
              <td className=" pro-remove">
                <button onClick={() => this.onClick(item._id)}>
                  <FontAwesomeIcon icon="trash-alt" />
                </button>
              </td>
            </tr>
          ));
    }

    return (
      <>
        <Layout>
          <div className="cart-main-area pt-85 pb-90">
            <div className="container">
              <h3 className="cart-page-title">Your Most Wanted Laptops</h3>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <form action="#">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Add To Compare</th>
                            <th>Remove From Wishlist</th>
                          </tr>
                        </thead>
                        <tbody>{items}</tbody>
                      </table>
                    </div>
                  </form>
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
  auth: state.auth,
  wishlist: state.user.wishlist,
  loading: state.loader.loading
});

export default connect(mapStateToProps, { getWishlist, removeFromWishlist })(
  wishlist
);
