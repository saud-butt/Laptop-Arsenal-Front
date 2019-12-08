import axios from "axios";

import { toggleLoader } from "./loading";
import { CREATE_REQUEST } from "../actions/types";

// Create a request
export const createRequest = requestData => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .post("/contact", requestData)
    .then(res => {
      dispatch({
        type: CREATE_REQUEST,
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
