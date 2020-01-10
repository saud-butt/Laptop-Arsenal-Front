import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

import ReviewCard from "./ReviewCard";
import Layout from "../layouts/basicLayout/layout";
import {
  getAllReviews,
  getReviewByName
} from "../../store/actions/reviewActions";
import Paginate from "../pagination/paginate";
import SelectListGroup from "../selectListGroup/selectListGroup";

class Reviews extends Component {
  componentDidMount() {
    this.props.getAllReviews();
    $(document).ready(function() {
      $("html, body").animate(
        {
          scrollTop: $("h1").offset().top
        },
        "slow"
      );
    });
  }

  onSearch = (e, name) => {
    e.preventDefault();
    this.props.getReviewByName(name);
  };
  onChange = name => {
    this.getReviewByName(name);
  };

  onClick = data => {
    this.props.getAllReviews(data.selected + 1);
  };
  onChange = e => {
    this.props.getAllReviews(e.selected, (e.limit = e.target.value));
  };

  render() {
    const { pagination, reviews } = this.props;
    const { totalPages, totalDocs, page, limit } = pagination;
    const start = limit * (page - 1) + 1;
    const end = limit * page;
    const reviewData = reviews.map((review, index) => (
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" key={index}>
        <ReviewCard
          author={review.author}
          alt={review.author}
          href={`/reviews/review?id=${review._id}`}
          model={review.name}
          likes={review.likes.length}
          cover={review.cover}
          id={review._id}
        />
      </div>
    ));
    const options = [
      { label: "12", value: "12" },
      { label: "24", value: "24" },
      { label: "36", value: "36" },
      { label: "48", value: "48" },
      { label: "60", value: "60" }
    ];
    return (
      <>
        <Layout>
          <div className="shop-area pt-90 pb-90">
            <h1 className="text-center">
              Reviews
              {/* <form class="form-inline float-right">
                <i class="fas fa-search" aria-hidden="true"></i>
                <input
                  class="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search here..."
                  name="name"
                  onChange={this.onSearch}
                />
                {/* <input
                  type="text"
                  placeholder="Search here..."
                  name="name"
                  value={name}
                  onChange={this.onChange}
                /> 
              </form> */}
            </h1>
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col">
                  <div className="shop-topbar-wrapper">
                    {" "}
                    <div className="shop-topbar-left">
                      <div className="view-mode nav">
                        <a className="active" href="#" data-toggle="tab">
                          <FontAwesomeIcon icon="th" />
                        </a>
                      </div>
                      <p>
                        Page: {page} Showing {start} - {end} of {totalDocs}{" "}
                        results
                      </p>
                    </div>
                    <div className="product-sorting-wrapper">
                      <div className="product-shorting shorting-style">
                        <label>View:</label>
                        <SelectListGroup
                          name="view"
                          value={limit}
                          onChange={this.onChange}
                          options={options}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="shop-bottom-area">
                    <div className="tab-content jump">
                      <div id="shop-1" className="tab-pane active">
                        <div className="row">{reviewData}</div>
                      </div>
                      <div className="pagination-style text-center">
                        <Paginate
                          onClick={this.onClick}
                          pageCount={totalPages}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}
const mapStateToProps = state => ({
  reviews: state.reviews.reviews,
  pagination: state.reviews.pagination
});
export default connect(mapStateToProps, {
  getAllReviews,
  getReviewByName
})(Reviews);
