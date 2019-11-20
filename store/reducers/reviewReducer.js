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
  reviews: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    case CREATE_REVIEW:
      return {
        ...state,
        reviews: [action.payload, ...state.reviews]
      };
    default:
      return state;
  }
}
