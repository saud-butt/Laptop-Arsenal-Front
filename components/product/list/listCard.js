import React from "react";
import PropTypes from "prop-types";

const ListCard = ({ brand, name, href, src, alt, title, price }) => {
  return (
    <div className="product-wrap mb-35">
      <div className="product-img mb-15">
        <a href={href}>
          <img src={src} alt={alt} />
        </a>
        <div className="product-action">
          <a
            data-toggle="modal"
            data-target="#exampleModal"
            title="Quick View"
            href="#"
          >
            <i className="la la-plus" />
          </a>
          <a title="Wishlist" href="#">
            <i className="la la-heart-o" />
          </a>
          <a title="Compare" href="#">
            <i className="la la-retweet" />
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
};

ListCard.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  info: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  texthover: PropTypes.string
};

export default ListCard;
