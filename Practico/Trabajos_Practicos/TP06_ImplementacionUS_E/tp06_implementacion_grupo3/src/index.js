import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Order from "./routes/Order";
import Address from "./routes/Address";
import PayMethod from "./routes/Payment";
import Resume from "./routes/Resume";
import NotFound from "./routes/NotFound";
import { Provider } from "react-redux";
import store from "./app/Store";
import Home from "./routes/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/order" element={<Order />} />
        <Route path="/delivery-address" element={<Address />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/payment" element={<PayMethod />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
