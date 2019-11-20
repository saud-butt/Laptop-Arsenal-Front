import {
  // GET_USER,
  CLEAR_CURRENT_USER,
  ADD_TO_WISHLIST,
  GET_WISHLIST,
  REMOVE_FROM_WISHLIST
} from "../actions/types";

const initialState = {
  wishlist: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    // case GET_USER:
    //   return {
    //     ...state,
    //     user: action.payload
    //   };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: action.payload
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: action.payload
      };
    case CLEAR_CURRENT_USER:
      return {
        ...state,
        user: null
      };
    case GET_WISHLIST:
      return {
        ...state,
        wishlist: action.payload.wishlist
      };
    default:
      return state;
  }
}
