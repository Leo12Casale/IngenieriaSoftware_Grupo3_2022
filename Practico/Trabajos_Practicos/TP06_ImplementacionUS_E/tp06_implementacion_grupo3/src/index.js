import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Order from "./routes/order";
import Direction from "./routes/direction";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <h1>Delivereat!</h1>
            </Layout>
          }
        />
        <Route path="/order" element={<Order />} />
        <Route path="/deliver-direction" element={<Direction />} />
        <Route path="/resume" element={<Order />} />
        <Route path="/payment" element={<Order />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
