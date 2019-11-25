import React, { Component } from "react";
import { connect } from "react-redux";
import { createReview } from "../../store/actions/reviewActions";

class Review extends Component {
  render() {
    return (
      <>
        <div className="col-lg-3 col-md-6 col-sm-6 grid-item">
          <div className="blog-wrap mb-45">
            <div className="blog-img mb-25">
              <a href="blog-details.html">
                <img src="assets/images/blog/blog-5.jpg" alt="blog" />
              </a>
            </div>
            <div className="blog-content-2">
              <h3>
                <a href="#">Best wooden angle, with soft cotton seat.</a>
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <div className="blog-meta">
                <div className="blog-author">
                  <a href="#">By: Jone Livers</a>
                </div>
                <div className="blog-like">
                  <a href="#">
                    <i className="la la-thumbs-up"></i> 23+
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div id="des-details3" className="tab-pane">
        <div className="dec-review-wrap mb-50">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5">
              <div className="dec-review-img-wrap">
                <div className="dec-review-img">
                  <img
                    src="../../../static/assets/images/product-details/review-1.png"
                    alt="review"
                  />
                </div>
                <div className="dec-client-name">
                  <h4>Jonathon Doe</h4>
                  <div className="dec-client-rating">
                    <i className="la la-star"></i>
                    <i className="la la-star"></i>
                    <i className="la la-star"></i>
                    <i className="la la-star"></i>
                    <i className="la la-star-half-o"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7">
              <div className="dec-review-content">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
                <div className="review-content-bottom">
                  <div className="review-like">
                    <span>
                      <i className="la la-heart-o"></i> 24 Likes
                    </span>
                  </div>
                  <div className="review-date">
                    <span>25 Jun 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dec-review-wrap mb-50">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5">
              <div className="dec-review-img-wrap">
                <div className="dec-review-img">
                  <img
                    src="../../../static/assets/images/product-details/review-2.png"
                    alt="review"
                  />
                </div>
                <div className="dec-client-name">
                  <h4>Jonathon Doe</h4>
                  <div className="dec-client-rating">
                    <i className="la la-star"></i>
                    <i className="la la-star"></i>
                    <i className="la la-star"></i>
                    <i className="la la-star"></i>
                    <i className="la la-star-half-o"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7">
              <div className="dec-review-content">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
                <div className="review-content-bottom">
                  <div className="review-like">
                    <span>
                      <i className="la la-heart-o"></i> 24 Likes
                    </span>
                  </div>
                  <div className="review-date">
                    <span>25 Jun 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dec-review-wrap">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5">
              <div className="dec-review-img-wrap">
                <div className="dec-review-img">
                  <img
                    src="../../../static/assets/images/product-details/review-3.png"
                    alt="review"
                  />
                </div>
                <div className="dec-client-name">
                  <h4>Jonathon Doe</h4>
                  <div className="dec-client-rating">
                    <i className="la la-star"></i>
                    <i className="la la-star"></i>
                    <i className="la la-star"></i>
                    <i className="la la-star"></i>
                    <i className="la la-star-half-o"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7">
              <div className="dec-review-content">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
                <div className="review-content-bottom">
                  <div className="review-like">
                    <span>
                      <i className="la la-heart-o"></i> 24 Likes
                    </span>
                  </div>
                  <div className="review-date">
                    <span>25 Jun 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  review: state.reviews.review,
  product: state.products.product
});

export default connect(mapStateToProps, { createReview })(Review);
