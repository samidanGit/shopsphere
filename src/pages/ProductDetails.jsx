import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetails({ addToCart }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading) {
    return React.createElement("h3", { style: { textAlign: "center", padding: "3rem" } }, "Loading details...");
  }

  if (!product) {
    return React.createElement("h3", { style: { textAlign: "center", padding: "3rem" } }, "Product not found!");
  }

  return React.createElement(
    "div",
    { style: { maxWidth: "1000px", margin: "2rem auto", padding: "0 1rem" } },
    React.createElement(
      Link,
      { to: "/products", style: { display: "inline-block", marginBottom: "1.5rem", color: "#007bff", textDecoration: "none", fontWeight: "600" } },
      "Back to Products"
    ),
    React.createElement(
      "div",
      { style: { display: "flex", gap: "2.5rem", background: "#fff", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", alignItems: "center" } },
      React.createElement(
        "div",
        { style: { flex: 1, textAlign: "center" } },
        React.createElement("img", { src: product.thumbnail, alt: product.title, style: { maxWidth: "100%", maxHeight: "350px", objectFit: "contain", borderRadius: "8px" } })
      ),
      React.createElement(
        "div",
        { style: { flex: 1 } },
        React.createElement("h2", { style: { fontSize: "1.8rem", marginBottom: "1rem", color: "#222" } }, product.title),
        React.createElement("p", { style: { color: "#666", lineHeight: "1.6", marginBottom: "1.5rem" } }, product.description),
        React.createElement(
          "div",
          { style: { marginBottom: "1rem" } },
          React.createElement("span", { style: { fontSize: "1.6rem", fontWeight: "bold", color: "#28a745" } }, "$" + product.price),
          React.createElement("span", { style: { marginLeft: "1rem", background: "#e9ecef", padding: "4px 10px", borderRadius: "20px", fontSize: "0.85rem", color: "#495057", textTransform: "capitalize" } }, "Category: " + product.category)
        ),
        React.createElement(
          "button",
          { onClick: () => addToCart(product), style: { background: "#28a745", color: "#fff", border: "none", padding: "12px 24px", fontSize: "1rem", borderRadius: "6px", cursor: "pointer", fontWeight: "600", marginTop: "1rem", width: "100%" } },
          "Add to Cart"
        )
      )
    )
  );
}
