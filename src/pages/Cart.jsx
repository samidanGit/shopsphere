import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return React.createElement(
      "div",
      { style: { textAlign: "center", padding: "3rem" } },
      React.createElement("h2", null, "Your Cart is Empty"),
      React.createElement("p", { style: { margin: "1rem 0", color: "#666" } }, "Looks like you haven't added any products yet."),
      React.createElement(
        Link,
        { to: "/products", className: "btn-primary", style: { display: "inline-block", marginTop: "1rem" } },
        "Start Shopping"
      )
    );
  }

  return React.createElement(
    "div",
    { style: { maxWidth: "800px", margin: "2rem auto", padding: "0 1rem" } },
    React.createElement("h2", { style: { marginBottom: "1.5rem" } }, "Shopping Cart"),
    React.createElement(
      "div",
      { style: { display: "flex", flexDirection: "column", gap: "1rem" } },
      cartItems.map((item, index) =>
        React.createElement(
          "div",
          {
            key: index,
            style: { display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", padding: "1rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }
          },
          React.createElement("img", { src: item.thumbnail, alt: item.title, style: { width: "60px", height: "60px", objectFit: "cover", borderRadius: "6px" } }),
          React.createElement("div", { style: { flex: 1, marginLeft: "1rem" } },
            React.createElement("h4", { style: { margin: "0 0 5px 0" } }, item.title),
            React.createElement("p", { style: { color: "#28a745", fontWeight: "bold", margin: 0 } }, "$" + item.price)
          ),
          React.createElement(
            "button",
            {
              onClick: () => removeFromCart(item.id),
              style: { background: "#dc3545", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer" }
            },
            "Remove"
          )
        )
      )
    ),
    React.createElement(
      "div",
      { style: { marginTop: "2rem", padding: "1.5rem", background: "#fff", borderRadius: "8px", textAlign: "right", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" } },
      React.createElement("h3", null, "Total: $" + totalPrice.toFixed(2)),
      React.createElement(
        "button",
        {
          onClick: () => alert("Checkout system coming soon!"),
          className: "btn-primary",
          style: { marginTop: "1rem", padding: "10px 20px", fontSize: "1rem" }
        },
        "Proceed to Checkout"
      )
    )
  );
}