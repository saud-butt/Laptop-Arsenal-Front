import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_RELATED_PRODUCT
} from "../actions/types";

const initialState = {
  products: [],
  pagination: {},
  product: {}
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
    default:
      return { ...state };
  }
}
