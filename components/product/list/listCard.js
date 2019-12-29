import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { addToWishlist } from "../../../store/actions/userActions";

class ListCard extends Component {
  onClick = id => {
    this.props.addToWishlist(id);
  };
  render() {
    const { brand, name, href, src, alt, title, price, id } = this.props;
    const { isAuthenticated } = this.props.auth;
    let heart = null;

    if (isAuthenticated) {
      heart = (
        <a title="Wishlist" onClick={() => this.onClick(id)}>
          <FontAwesomeIcon icon={["far", "heart"]} />
        </a>
      );
    }
    return (
      <div className="product-wrap mb-35">
        <div className="product-img mb-15">
          <a href={href}>
            <img src={src} alt={alt} />
          </a>
          <div className="product-action">
            <a title="Modify" href={`/products/modify?id=${id}`}>
              <FontAwesomeIcon icon="screwdriver" />
            </a>
            {heart}
            <a title="Compare" href={`/products/compare?id=${id}`}>
              <FontAwesomeIcon icon="dice-d20" />
            </a>
          </div>
        </div>
        <div className="product-content">
          <span>{brand}</span>
          <h4>
            <a href={href}>{name}</a>
          </h4>
          <div className="price-addtocart">
            <div className="product-price">
              <span>{price}</span>
            </div>
            <div className="product-addtocart">
              <a href={href}>{title}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListCard.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  info: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  texthover: PropTypes.string,
  id: PropTypes.string
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addToWishlist })(ListCard);
