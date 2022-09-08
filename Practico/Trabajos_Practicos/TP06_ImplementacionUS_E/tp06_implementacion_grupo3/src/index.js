import React from "react";
import ReactDOM from "react-dom/client";
import { Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Order from "./routes/order";
import Address from "./routes/address";
import PayMethod from "./routes/payment";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
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
        <Route path="/delivery-address" element={<Address />} />
        <Route path="/resume" element={<Order />} />
        <Route path="/payment" element={<PayMethod />} />
      </Routes>
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
