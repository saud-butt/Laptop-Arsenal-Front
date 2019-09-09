import { TOGGLE_LOADER } from "../actions/types";

const initialState = {
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADER:
      return {
        ...state,
        loading: action.loading
      };
    default:
      return {
        ...state
      };
  }
};
