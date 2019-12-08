import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../layouts/basicLayout/layout";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";
import ReviewCard from "../reviews/ReviewCard";
import { getReview } from "../../store/actions/reviewActions";

class Review extends Component {
  componentDidMount() {
    const id = this.props.router.query.id;
    this.props.getReview(id);
  }
  onLikeClick(id) {
    this.props.likeReview(id);
  }
  onUnLikeClick(id) {
    this.props.unlikeReview(id);
  }

  render() {
    const { review } = this.props;
    let reviewContent = null;

    if (review) {
      reviewContent = (
        <>
          <h3>Review:</h3>
          <div className=" row">
            <div className="col-xl-3 col-lg-4 col-md-5">
              <div className="dec-review-img-wrap">
                <div className="dec-review-img">
                  <img
                    className="rounded-circle"
                    src={review.avatar}
                    alt={review.model}
                  />
                </div>
                <div className="dec-client-name">
                  <h4 className="text-capitalize">By: {review.author}</h4>
                </div>
              </div>
            </div>
          </div>

          <ReviewCard
            text={review.text}
            author={review.author}
            alt={review.author}
            model={review.model}
            //likes={review.likes.length}
            cover={review.cover}
            id={review._id}
          />
          <br />
          <h3> Comments:</h3>
          <CommentFeed reviewId={review._id} comments={review.comments} />
          <br />
          <CommentForm reviewId={review._id} />
        </>
      );
    }

    return (
      <Layout>
        <div className="description-review-wrapper pb-90">
          <div className="container">
            <div className="row">
              <div className="ml-auto mr-auto col-lg-10">
                <div className="tab-content dec-review-bottom">
                  <div id="des-details2" className="tab-pane in active">
                    <br />{" "}
                    <div className="dec-review-wrap mb-50">{reviewContent}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Review.propTypes = {
  getReview: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  review: state.reviews.review
});

export default connect(mapStateToProps, { getReview })(withRouter(Review));
