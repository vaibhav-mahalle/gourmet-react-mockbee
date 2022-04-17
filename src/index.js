import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";
import { WishProvider } from "./context/WishContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WishProvider>
        <CartProvider> 
          <FilterProvider>
            <App />
          </FilterProvider>
        </CartProvider>
      </WishProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
