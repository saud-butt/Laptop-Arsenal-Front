import { combineReducers } from "redux";

import authReducer from "./authReducer";
import loaderReducer from "./loaderReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorRdeucer";
import reviewReducer from "./reviewReducer";
import priceReducer from "./priceReducer";

export default combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  products: productReducer,
  user: userReducer,
  reviews: reviewReducer,
  errors: errorReducer,
  price: priceReducer
});
