import {
  GET_ALL_REVIEWS,
  CREATE_REVIEW,
  LIKE_REVIEW,
  UNLIKE_REVIEW,
  COMMENT_ON_REVIEW,
  UNCOMMENT_REVIEW,
  GET_REVIEW_BY_PRODUCTID,
  GET_REVIEW_BY_USERID
} from "../actions/types";

const initialState = {
  reviews: [],
  review: {},
  pagination: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        pagination: action.pagination
      };
    case CREATE_REVIEW:
      return {
        ...state,
        reviews: [action.payload, ...state.reviews]
      };
    case GET_REVIEW_BY_PRODUCTID:
      return {
        ...state,
        review: action.payload
      };
    default:
      return { ...state };
  }
}
