import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Sign from "./Component/Sign";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Account from "./Component/Account";
import PostEditor from "./Component/PostEditor";
import PostList from "./Component/PostList";
import { signReducer, postReducer } from "./module/reducer";

const store = createStore(signReducer);
const Routing = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route exact path="/*" element={<App />} />
        <Route exact path="/sign" element={<Sign />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/posteditor" element={<PostEditor />} />
        <Route exact path="/postlist" element={<PostList />} />
      </Routes>
    </Provider>
  );
};

export default Routing;
