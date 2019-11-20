import axios from "axios";

import { toggleLoader } from "./loading";
import {
  GET_ALL_REVIEWS,
  CREATE_REVIEW,
  LIKE_REVIEW,
  UNLIKE_REVIEW,
  COMMENT_ON_REVIEW,
  UNCOMMENT_REVIEW,
  GET_REVIEW_BY_PRODUCTID,
  GET_REVIEW_BY_USERID,
  GET_ERRORS
} from "./types";

// Get all reviews
export const getAllReviews = () => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .get("reviews")
    .then(res => {
      dispatch({
        type: GET_ALL_REVIEWS,
        payload: res.data
      });
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: GET_ALL_REVIEWS,
        payload: []
      });
      dispatch(toggleLoader(false));
    });
};

// Create a review
export const createReview = reviewData => dispatch => {
  dispatch(clearErrors());
  axios
    .review("/api/reviews", reviewData)
    .then(res =>
      dispatch({
        type: CREATE_REVIEW,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
