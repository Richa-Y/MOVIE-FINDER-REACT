import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./App";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "super" }],
// });
// console.log(" after state", store.getState());
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      console.log("action.type = ", action.type);
    }
    next(action);
  };
// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

console.log("store", store);
console.log("state", store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
