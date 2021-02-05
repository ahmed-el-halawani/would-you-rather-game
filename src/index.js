import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/tobBar.css";
import "./styles/leaderboard.css";
import "./styles/dashboard.css";
import App from "./component/app";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combineReducers from "./reducers/index";
import applyMiddleware from "./middlewares/index";

const store = createStore(combineReducers, applyMiddleware);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
