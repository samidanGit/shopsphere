import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  return React.createElement(
    "div",
    { style: { border: "1px solid #ddd", padding: "12px", borderRadius: "8px", display: "flex", flexDirection: "column", justifyContent: "space-between" } },
    React.createElement("img", {
      src: product.thumbnail,
      alt: product.title,
      style: { width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }
    }),
    React.createElement("h4", null, product.title),
    React.createElement("p", { style: { fontWeight: "bold" } }, "$" + product.price),
    React.createElement(
      "div",
      { style: { display: "flex", gap: "5px", marginTop: "10px" } },
      React.createElement(
        Link,
        {
          to: "/products/" + product.id,
          style: { background: "#333", color: "#fff", padding: "6px 12px", textDecoration: "none", borderRadius: "4px", textAlign: "center", flex: 1 }
        },
        "View"
      ),
      React.createElement(
        "button",
        {
          onClick: () => addToCart(product),
          style: { background: "#007bff", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer", flex: 1 }
        },
        "Add to Cart"
      )
    )
  );
}
