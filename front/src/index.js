import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layout from "./components/Layout/Layout";
//Routes
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Layout>
    <App />
  </Layout>
);

reportWebVitals();
