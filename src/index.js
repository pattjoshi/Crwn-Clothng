import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// it is a glibal stae of data
// with this i have access to redux in my application
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/Store";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

// BrowserRouter is used for doing client side routing with URL segments

// 	Routing is a process in which a user is directed to different pages based on their action or request.

// The switch component looks through all of its child routes and it displays the first one whose path matches the current URL.
