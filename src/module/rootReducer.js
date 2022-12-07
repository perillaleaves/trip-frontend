import { combineReducers } from "redux";
import { signReducer, postReducer } from "./reducer";

const rootReducer = combineReducers({
  postReducer,
  signReducer,
});

export default rootReducer;
