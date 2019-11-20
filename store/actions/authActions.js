import axios from "axios";
import jwt_decode from "jwt-decode";
import Router from "next/router";
import setAuthToken from "../../utils/setAuthToken";

import { toggleLoader } from "./loading";
import { GET_ERRORS, SET_CURRENT_USER, PERSIST_USER } from "./types";

// Register User
export const registerUser = userData => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .post("http://localhost:5000/api/users/register", userData)
    .then(res => Router.push("/auth/login"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      dispatch(toggleLoader(false));
    });
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .post("http://localhost:5000/api/users/login", userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
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

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const persistLogin = () => {
  // Check for token
  if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    return decoded;
  }
};
