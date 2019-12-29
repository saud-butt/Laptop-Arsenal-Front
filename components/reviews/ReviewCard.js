import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Router from "next/router";

import { likeReview, unlikeReview } from "../../store/actions/reviewActions";

class ReviewCard extends Component {
  onLikeClick(id) {
    if (this.props.auth.isAuthenticated) {
      this.props.likeReview(id);
    } else {
      Router.push("/auth/login");
    }
  }
  onUnLikeClick(id) {
    this.props.unlikeReview(id);
  }
  render() {
    const { model, cover, alt, author, likes, id, href } = this.props;
    return (
      <div className="col grid-item">
        <div className="blog-wrap mb-45">
          <div className="blog-img mb-25">
            <a href={href}>
              <img src={cover} alt={alt} />
            </a>
          </div>
          <div className="blog-content-2">
            <h3>
              <a href={href}>{model}</a>
            </h3>
            <div className="blog-meta">
              <div className="blog-author">
                <a href={href}>By: {author}</a>
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

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { likeReview, unlikeReview })(
  ReviewCard
);
