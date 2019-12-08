import axios from "axios";

import { toggleLoader } from "./loading";
import {
  CLEAR_CURRENT_USER,
  GET_USER,
  ADD_TO_WISHLIST,
  GET_WISHLIST,
  REMOVE_FROM_WISHLIST
} from "./types";

// POST Add item to wishlist
export const addToWishlist = id => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .post(`users/wishlist/${id}`)
    .then(res => {
      dispatch({
        type: ADD_TO_WISHLIST,
        payload: res.data
      });
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: ADD_TO_WISHLIST,
        payload: []
      });
      dispatch(toggleLoader(false));
    });
};

// Get Wishlist
export const getWishlist = () => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .get("users/wishlist")
    .then(res => {
      dispatch({
        type: GET_WISHLIST,
        payload: res.data
      });
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: GET_WISHLIST,
        payload: []
      });
      dispatch(toggleLoader(false));
    });
};

// Remove From Wishlist
export const removeFromWishlist = id => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .delete(`users/wishlist/${id}`)
    .then(res => {
      dispatch({
        type: REMOVE_FROM_WISHLIST,
        payload: res.data
      });
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: REMOVE_FROM_WISHLIST,
        payload: []
      });
      dispatch(toggleLoader(false));
    });
};

// Get current profile
// export const getCurrentUser = () => dispatch => {
//   dispatch(toggleLoader(true));
//   axios
//     .get("/api/profile")
//     .then(res => {
//       dispatch({
//         type: GET_USER,
//         payload: res.data
//       });
//       dispatch(toggleLoader(false));
//     })
//     .catch(err => {
//       dispatch({
//         type: GET_USER,
//         payload: {}
//       });
//       dispatch(toggleLoader(false));
//     });
// };

// // Delete account & profile
// export const deleteAccount = () => dispatch => {
//   if (window.confirm("Are you sure? This can NOT be undone!")) {
//     axios
//       .delete("/api/profile")
//       .then(res =>
//         dispatch({
//           type: SET_CURRENT_USER,
//           payload: {}
//         })
//       )
//       .catch(err =>
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       );
//   }
// };

// Clear profile
export const clearCurrentUser = () => {
  return {
    type: CLEAR_CURRENT_USER
  };
};
