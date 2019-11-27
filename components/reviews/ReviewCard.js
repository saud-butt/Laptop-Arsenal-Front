import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { likeReview, unlikeReview } from "../../store/actions/reviewActions";

class ReviewCard extends Component {
  onLikeClick(id) {
    this.props.likeReview(id);
  }
  onUnLikeClick(id) {
    this.props.unlikeReview(id);
  }
  render() {
    const { model, cover, alt, text, author, likes, id } = this.props;
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
                <a onClick={this.onLikeClick.bind(this, id)}>
                  <FontAwesomeIcon icon="thumbs-up" /> {likes} Likes{" "}
                </a>{" "}
                <a onClick={this.onUnLikeClick.bind(this, id)}>
                  {" "}
                  <FontAwesomeIcon icon="thumbs-down" /> Unlike
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { likeReview, unlikeReview })(
  ReviewCard
);
