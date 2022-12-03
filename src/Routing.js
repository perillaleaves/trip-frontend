import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Sign from "./Component/Sign";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Account from "./Component/Account";
import Board from "./Component/Board";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      pageIndex: 0,
    };
  }
  const newState = { ...currentState };
  if (action.type === "SIGNUP") {
    newState.pageIndex = -1;
  }
  if (action.type === "SIGNIN") {
    newState.pageIndex = 0;
  }
  if (action.type === "FORGOTPW") {
    newState.pageIndex = +1;
  }
  return newState;
}
const store = createStore(reducer);
const Routing = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route exact path="/*" element={<App />} />
        <Route exact path="/sign" element={<Sign />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/board" element={<Board />} />
      </Routes>
    </Provider>
  );
};

export default Routing;
