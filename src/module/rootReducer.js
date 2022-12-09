import { combineReducers } from "redux";
import { signReducer, postReducer, userReducer } from "./reducer";

const rootReducer = combineReducers({
  signReducer,
  postReducer,
  userReducer,
});

export default rootReducer;
