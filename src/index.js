import React from "react";
import ReactDOM from "react-dom";
import App from "./15-cocktails/App";
import "./15-cocktails/index.css";
import { AppProvider } from "./15-cocktails/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
