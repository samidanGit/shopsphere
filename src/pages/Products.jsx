import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return React.createElement("h3", { style: { textAlign: "center", padding: "3rem" } }, "Loading products...");
  }

  return React.createElement(
    "div",
    { style: { padding: "1rem" } },
    React.createElement("h2", { style: { marginBottom: "1rem" } }, "All Products"),
    React.createElement(
      "div",
      { className: "product-grid" },
      products.map((product) =>
        React.createElement(ProductCard, { key: product.id, product: product, addToCart: addToCart })
      )
    )
  );
}