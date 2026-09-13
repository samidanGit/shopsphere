import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import "./index.css";
import "./app.css";



export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return React.createElement(
    "div",
    { className: "app-container", style: { display: "flex", flexDirection: "column", minHeight: "100vh" } },
    React.createElement(
      "nav",
      { className: "navbar" },
      React.createElement("h2", null, "ShopSphere"),
      React.createElement(
        "div",
        { className: "nav-links" },
        React.createElement(Link, { to: "/" }, "Home"),
        React.createElement(Link, { to: "/products" }, "Products"),
        React.createElement(Link, { to: "/categories" }, "Categories"),
        React.createElement(Link, { to: "/cart" }, "Cart (" + cart.length + ")")
      )
    ),
    React.createElement(
      "main",
      { className: "main-content", style: { flex: 1 } },
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
        React.createElement(Route, { path: "/products", element: React.createElement(Products, { addToCart: addToCart }) }),
        React.createElement(Route, { path: "/products/:id", element: React.createElement(ProductDetails, { addToCart: addToCart }) }),
        React.createElement(Route, { path: "/categories", element: React.createElement(Categories, { addToCart: addToCart }) }),
        React.createElement(Route, { path: "/cart", element: React.createElement(Cart, { cartItems: cart, removeFromCart: removeFromCart }) })
      )
    ),
    React.createElement(
      "footer",
      { style: { background: "#1a1a1a", color: "#fff", textAlign: "center", padding: "1rem", marginTop: "auto" } },
      React.createElement("p", { style: { margin: 0, fontSize: "0.9rem" } }, "© 2026 ShopSphere. All rights reserved.")
    )
  );
}

