import axios from "axios";

import { toggleLoader } from "./loading";
import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_RELATED_PRODUCT,
  GET_PRODUCT_BY_NAME,
  COMPARE_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_BRAND
} from "./types";

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

// Get a single product by id
export const getProduct = (id, compare = false, key = null) => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .get(`http://localhost:5000/api/products/${id}`)
    .then(res => {
      if (compare) {
        dispatch({
          type: COMPARE_PRODUCTS,
          payload: res.data,
          key: key
        });
      } else {
        dispatch({
          type: GET_PRODUCT,
          payload: res.data
        });
      }
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
export const getRelatedProduct = (brand, page = 1, limit = 8) => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .get(
      `http://localhost:5000/api/products/brand/${brand}?page=${page}&limit=${limit}`
    )
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

// Get products by brand
export const getProductsByBrand = (brand, page = 1, limit = 12) => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .get(
      `http://localhost:5000/api/products/brand/${brand}?page=${page}&limit=${limit}`
    )
    .then(res => {
      const { docs, ...pagination } = res.data.products;
      dispatch({
        type: GET_PRODUCTS_BY_BRAND,
        payload: docs,
        pagination: { ...pagination }
      });
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: GET_PRODUCTS_BY_BRAND,
        payload: []
      });
      dispatch(toggleLoader(false));
    });
};

// Get products by category
export const getProductsByCategory = (
  category,
  page = 1,
  limit = 12
) => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .get(
      `http://localhost:5000/api/products/category/${category}?page=${page}&limit=${limit}`
    )
    .then(res => {
      const { docs, ...pagination } = res.data.products;
      dispatch({
        type: GET_PRODUCTS_BY_CATEGORY,
        payload: docs,
        pagination: { ...pagination }
      });
      dispatch(toggleLoader(false));
    })
    .catch(err => {
      dispatch({
        type: GET_PRODUCTS_BY_CATEGORY,
        payload: []
      });
      dispatch(toggleLoader(false));
    });
};

// Get product by name
export const getProductByName = name => dispatch => {
  axios
    .get(`http://localhost:5000/api/products/name/${name}`)
    .then(res => {
      dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: res.data.map(product => {
          return {
            label: product.name,
            value: product._id
          };
        })
      });
    })
    .catch(err => {
      dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: []
      });
    });
};

export const filterProducts = filters => dispatch => {
  dispatch(toggleLoader(true));
  axios
    .get(
      `http://localhost:5000/api/products/filters/apply?filters=${JSON.stringify(
        filters
      )}`
    )
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
