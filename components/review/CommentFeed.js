import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CommentItem from "./CommentItem";

class CommentFeed extends Component {
  render() {
    const { comments, reviewId } = this.props;

    let comment = null;
    if (comments) {
      comment = comments.map(comment => (
        <CommentItem key={comment._id} comment={comment} reviewId={reviewId} />
      ));
    }

    return <>{comment}</>;
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  reviewId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  review: state.reviews.review
});

export default connect(mapStateToProps, null)(CommentFeed);
