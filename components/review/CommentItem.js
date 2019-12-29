import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { deleteComment } from "../../store/actions/reviewActions";

class CommentItem extends Component {
  onDeleteClick(reviewId, commentId) {
    this.props.deleteComment(reviewId, commentId);
  }

  render() {
    const { comment, reviewId, auth } = this.props;

    return (
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-5">
          <div className="dec-review-img-wrap ">
            <div className="dec-review-img">
              <img
                className="rounded-circle d-none d-md-block"
                src={comment.avatar}
                alt=""
              />
            </div>
            <br />
            <div className="dec-client-name">
              <h4 className="text-capitalize">By: {comment.name}</h4>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-8 col-md-7">
          <div className="dec-review-content">
            <p>{comment.text}</p>
            <div className="review-content-bottom">
              <div className="review-like ">
                {comment.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(
                      this,
                      reviewId,
                      comment._id
                    )}
                    type="button"
                    className="btn btn-danger mr-1 "
                  >
                    <FontAwesomeIcon icon="trash-alt" />
                  </button>
                ) : null}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  reviewId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
