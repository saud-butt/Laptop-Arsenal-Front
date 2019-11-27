import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  createReview,
  likeReview,
  unlikeReview
} from "../../store/actions/reviewActions";

class Review extends Component {
  onLikeClick(id) {
    this.props.likeReview(id);
  }
  onUnLikeClick(id) {
    this.props.unlikeReview(id);
  }
  render() {
    const { reviews } = this.props;
    const reviewData = reviews.map((review, index) => (
      <>
        <div className="row" key={index}>
          <div className="col-xl-3 col-lg-4 col-md-5">
            <div className="dec-review-img-wrap">
              <div className="dec-review-img">
                <img
                  className="rounded"
                  src={review.avatar}
                  alt={review.model}
                />
              </div>
              <div className="dec-client-name">
                <h4 className="text-capitalize">{review.author}</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-7">
            <div className="dec-review-content">
              <p>{review.text}</p>
              <div className="review-content-bottom">
                <div className="review-like">
                  <span>
                    <a onClick={this.onLikeClick.bind(this, review._id)}>
                      <FontAwesomeIcon icon="thumbs-up" /> {review.likes.length}{" "}
                      Likes
                    </a>{" "}
                    <a onClick={this.onUnLikeClick.bind(this, review._id)}>
                      {" "}
                      <FontAwesomeIcon icon="thumbs-down" /> Unlike
                    </a>
                  </span>
                </div>
                <div className="review-date">
                  <span> {review.date.substring(0, 10)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </>
    ));

    return (
      <div id="des-details3" className="tab-pane">
        <div className="dec-review-wrap mb-50">{reviewData}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews.reviews
});

export default connect(mapStateToProps, {
  createReview,
  likeReview,
  unlikeReview
})(Review);
