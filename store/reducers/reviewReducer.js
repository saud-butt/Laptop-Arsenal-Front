import {
  GET_ALL_REVIEWS,
  CREATE_REVIEW,
  LIKE_REVIEW,
  UNLIKE_REVIEW,
  DELETE_REVIEW,
  GET_REVIEW_BY_PRODUCTID,
  GET_REVIEW_BY_USERID,
  GET_REVIEW
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
    case GET_REVIEW:
      return {
        ...state,
        review: action.payload
      };
    case CREATE_REVIEW:
      return {
        ...state,
        reviews: [action.payload, ...state.reviews]
      };
    case GET_REVIEW_BY_PRODUCTID:
      return {
        ...state,
        reviews: action.payload
      };
    case LIKE_REVIEW:
      return {
        ...state,
        reviews: action.payload
      };
    case UNLIKE_REVIEW:
      return {
        ...state,
        reviews: action.payload
      };
    case DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter(review => review._id !== action.payload)
      };
    default:
      return { ...state };
  }
}
