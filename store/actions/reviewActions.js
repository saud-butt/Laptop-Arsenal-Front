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
export const getAllReviews = (page = 1, limit = 12) => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .get(`/reviews?page=${page}&limit=${limit}`)
    .then(res => {
      const { docs, ...pagination } = res.data;
      dispatch({
        type: GET_ALL_REVIEWS,
        payload: docs,
        pagination: { ...pagination }
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
  dispatch(toggleLoader(true));
  axios
    .post("/reviews", reviewData)
    .then(res => {
      dispatch({
        type: CREATE_REVIEW,
        payload: res.data
      });
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      dispatch(toggleLoader(false));
    });
};

// Like a review
export const likeReview = id => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .post(`reviews/like/${id}`)
    .then(res => {
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      dispatch(toggleLoader(false));
    });
};

// Remove Like from a review
export const unlikeReview = id => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .post(`reviews/unlike/${id}`)
    .then(res => {
      dispatch(toggleLoader(false));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get review by product Id
export const getReview = id => dispatch => {
  console.log(`Product Id is ${id}`);
  dispatch(toggleLoader(true));
  axios
    .get(`/reviews/model/${id}`)
    .then(res => {
      dispatch({
        type: GET_REVIEW_BY_PRODUCTID,
        payload: res.data
      });
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: GET_REVIEW_BY_PRODUCTID,
        payload: null
      });
      dispatch(toggleLoader(false));
    });
};
