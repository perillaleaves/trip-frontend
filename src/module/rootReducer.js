import { combineReducers } from "redux";
import { signReducer, userReducer } from "./reducer";

const rootReducer = combineReducers({
  signReducer,
  userReducer,
});

export default rootReducer;
