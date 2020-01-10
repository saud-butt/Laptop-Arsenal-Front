import axios from "axios";

import { toggleLoader } from "./loading";
import {
  GET_ALL_REVIEWS,
  GET_REVIEW,
  CREATE_REVIEW,
  LIKE_REVIEW,
  UNLIKE_REVIEW,
  GET_REVIEW_BY_PRODUCTID,
  GET_REVIEW_BY_NAME,
  GET_ERRORS,
  CLEAR_ERRORS,
  DELETE_REVIEW
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

// Get Review by Id
export const getReview = id => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .get(`/reviews/${id}`)
    .then(res => {
      dispatch({
        type: GET_REVIEW,
        payload: res.data
      });
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: GET_REVIEW,
        payload: null
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
      dispatch({
        type: LIKE_REVIEW,
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

// Remove Like from a review
export const unlikeReview = id => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .post(`reviews/unlike/${id}`)
    .then(res => {
      dispatch({
        type: UNLIKE_REVIEW,
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

// Get review by product Id
export const getProductReview = id => dispatch => {
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

// Get product by name
export const getReviewByName = name => dispatch => {
  axios
    .get(`http://localhost:5000/api/reviews/name/${name}`)
    .then(res => {
      dispatch({
        type: GET_REVIEW_BY_NAME,
        payload: res.data.map(review => {
          return {
            label: review.name,
            value: review._id
          };
        })
      });
    })
    .catch(err => {
      dispatch({
        type: GET_REVIEW_BY_NAME,
        payload: []
      });
    });
};

// Delete Review
export const deleteReview = id => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .delete(`/reviews/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_REVIEW,
        payload: id
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

// Add Comment
export const addComment = (reviewId, commentData) => dispatch => {
  dispatch(toggleLoader(true));
  dispatch(clearErrors());
  axios
    .post(`/reviews/comment/${reviewId}`, commentData)
    .then(res => {
      dispatch({
        type: GET_REVIEW,
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

// Delete Comment
export const deleteComment = (reviewId, commentId) => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .delete(`/reviews/comment/${reviewId}/${commentId}`)
    .then(res => {
      dispatch({
        type: GET_REVIEW,
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

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
