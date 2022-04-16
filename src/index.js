import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
