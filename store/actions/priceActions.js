import axios from "axios";

import { toggleLoader } from "./loading";
import {
  GET_PROCESSOR_PRICE,
  GET_GRAPHIC_PRICE,
  GET_MEMORY_PRICE,
  GET_STORAGE_PRICE
} from "./types";

// Get processor price
export const getProcessorPrice = label => dispatch => {
  dispatch(toggleLoader(true));

  axios
    .get(
      `http://localhost:5000/api/prices/processors?label=${label}&itemKey=processors`
    )
    .then(res => {
      dispatch({
        type: GET_PROCESSOR_PRICE,
        payload: res.data.processor
      });
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: GET_PROCESSOR_PRICE,
        payload: []
      });
      dispatch(toggleLoader(false));
    });
};

// Get graphics price
export const getGraphicPrice = label => dispatch => {
  dispatch(toggleLoader(true));

  axios
    .get(
      `http://localhost:5000/api/prices/processors?label=${label}&itemKey=graphics`
    )
    .then(res => {
      dispatch({
        type: GET_GRAPHIC_PRICE,
        payload: res.data.processor
      });
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: GET_GRAPHIC_PRICE,
        payload: []
      });
      dispatch(toggleLoader(false));
    });
};

// Get memory price
export const getMemoryPrice = label => dispatch => {
  dispatch(toggleLoader(true));

  axios
    .get(
      `http://localhost:5000/api/prices/processors?label=${label}&itemKey=memory`
    )
    .then(res => {
      dispatch({
        type: GET_MEMORY_PRICE,
        payload: res.data.processor
      });
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: GET_MEMORY_PRICE,
        payload: []
      });
      dispatch(toggleLoader(false));
    });
};

// Get storage price
export const getStoragePrice = label => dispatch => {
  dispatch(toggleLoader(true));

  axios
    .get(
      `http://localhost:5000/api/prices/processors?label=${label}&itemKey=storage`
    )
    .then(res => {
      dispatch({
        type: GET_STORAGE_PRICE,
        payload: res.data.processor
      });
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: GET_STORAGE_PRICE,
        payload: []
      });
      dispatch(toggleLoader(false));
    });
};
