import {
  GET_PROCESSOR_PRICE,
  GET_GRAPHIC_PRICE,
  GET_MEMORY_PRICE,
  GET_STORAGE_PRICE
} from "../actions/types";

const initialState = {
  processor: {},
  graphic: {},
  memory: {},
  storage: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROCESSOR_PRICE:
      return {
        ...state,
        processor: action.payload
      };
    case GET_GRAPHIC_PRICE:
      return {
        ...state,
        graphic: action.payload
      };
    case GET_MEMORY_PRICE:
      return {
        ...state,
        memory: action.payload
      };
    case GET_STORAGE_PRICE:
      return {
        ...state,
        storage: action.payload
      };
    default:
      return { ...state };
  }
}
