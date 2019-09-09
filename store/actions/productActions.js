import axios from "axios";

import { toggleLoader } from "./loading";
import { GET_PRODUCTS, GET_PRODUCT, GET_RELATED_PRODUCT } from "./types";

// Get all products
export const getAllProducts = (page = 1, limit = 12) => dispatch => {
  dispatch(toggleLoader(true));

  axios
    .get(`http://localhost:5000/api/products?page=${page}&limit=${limit}`)
    .then(res => {
      const { docs, ...pagination } = res.data.products;
      dispatch({
        type: GET_PRODUCTS,
        payload: docs,
        pagination: { ...pagination }
      });
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: GET_PRODUCTS,
        payload: []
      });
      dispatch(toggleLoader(false));
    });
};

// Get a single product
export const getProduct = id => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .get(`http://localhost:5000/api/products/${id}`)
    .then(res => {
      dispatch({
        type: GET_PRODUCT,
        payload: res.data
      });
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: GET_PRODUCT,
        payload: []
      });
      dispatch(toggleLoader(false));
    });
};

// Get related products
export const getRelatedProduct = brand => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .get(`http://localhost:5000/api/products/brand/${brand}`)
    .then(res => {
      dispatch({
        type: GET_RELATED_PRODUCT,
        payload: res.data.products.docs
      });
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: GET_RELATED_PRODUCT,
        payload: []
      });
      dispatch(toggleLoader(false));
    });
};
