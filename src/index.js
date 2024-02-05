import React from "react";
import DateCount from "./DateCount";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <DateCount />
  </React.StrictMode>
);
