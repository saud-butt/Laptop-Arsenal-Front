import { TOGGLE_LOADER } from "./types";

export const toggleLoader = isLoading => dispatch =>
  dispatch({
    type: TOGGLE_LOADER,
    loading: isLoading
  });
