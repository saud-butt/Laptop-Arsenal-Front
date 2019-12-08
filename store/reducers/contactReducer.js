import { CREATE_REQUEST } from "../actions/types";

const initialState = {
  request: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_REQUEST:
      return {
        ...state,
        request: [action.payload, ...state.request]
      };

    default:
      return { ...state };
  }
}
