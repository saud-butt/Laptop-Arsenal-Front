import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_RELATED_PRODUCT,
  GET_PRODUCT_BY_NAME,
  COMPARE_PRODUCTS,
  GET_PRODUCTS_BY_BRAND
} from "../actions/types";

const initialState = {
  products: [],
  pagination: {},
  product: {},
  searchedProducts: [],
  compare1: {},
  compare2: {},
  compare3: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        pagination: action.pagination
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    case GET_RELATED_PRODUCT:
      return {
        ...state,
        products: action.payload
      };
    case GET_PRODUCTS_BY_BRAND:
      return {
        ...state,
        products: action.payload
      };
    case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        searchedProducts: action.payload
      };
    case COMPARE_PRODUCTS:
      return {
        ...state,
        [action.key]: action.payload
      };
    default:
      return { ...state };
  }
}
