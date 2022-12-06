import { combineReducers } from "redux";
import postReducer from "./reducer";

const rootReducer = combineReducers({
  postReducer,
});

export default rootReducer;
