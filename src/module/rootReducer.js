import { combineReducers } from "redux";
import { signReducer, postReducer } from "./reducer";

const rootReducer = combineReducers({
  signReducer,
  postReducer,
});

export default rootReducer;
