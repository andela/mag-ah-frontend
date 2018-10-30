import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import App from "./views/App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
