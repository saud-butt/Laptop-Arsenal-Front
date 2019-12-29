import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import $ from "jquery";

import Layout from "../layouts/basicLayout/layout";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";
import ReviewCard from "../reviews/ReviewCard";
import { getReview } from "../../store/actions/reviewActions";

class Review extends Component {
  componentDidMount() {
    const id = this.props.router.query.id;
    this.props.getReview(id);
    $(document).ready(function() {
      $("html, body").animate(
        {
          scrollTop: $("#des-details2").offset().top
        },
        "slow"
      );
    });
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
          <h3>Reviews:</h3>
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
          <div className="container text-justify">
            <p>{review.text1}</p>
            <p>{review.text2}</p>
          </div>
          <div className="container text-justify">
            <p>{review.text3}</p>
            <p>{review.text4}</p>
          </div>
          <div className="container">
            <img src={review.pic1} />
          </div>
          <div className="container text-justify">
            <p>{review.text5}</p>
            <p>{review.text6}</p>
            <p>{review.text7}</p>
          </div>
          <img src={review.pic2} />
          <div className="container text-justify">
            <p>{review.text8}</p>
            <p>{review.text9}</p>
            <p>{review.text10}</p>
          </div>
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
