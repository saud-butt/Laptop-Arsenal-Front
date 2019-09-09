import { combineReducers } from "redux";

import authReducer from "./authReducer";
import loaderReducer from "./loaderReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  products: productReducer
});
