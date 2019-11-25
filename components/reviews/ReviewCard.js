import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

class ReviewCard extends Component {
  render() {
    const { avatar, model, cover, src, alt, text, author, likes } = this.props;
    return (
      <div className="col grid-item">
        <div className="blog-wrap mb-45">
          <div className="blog-img mb-25">
            <a href="blog-details.html">
              <img src={cover} alt={alt} />
            </a>
          </div>
          <div className="blog-content-2">
            <h3>
              <a href="#">{model}</a>
            </h3>
            <p>{text}</p>
            <div className="blog-meta">
              <div className="blog-author">
                <a href="#">By: {author}</a>
              </div>
              <div className="blog-like">
                <a href="#">
                  <FontAwesomeIcon icon="thumbs-up" /> {likes}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null)(ReviewCard);
