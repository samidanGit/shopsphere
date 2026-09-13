import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function Categories({ addToCart }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        if (data.length > 0) {
          setSelectedCategory(data[0]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;
    
    let isMounted = true;
    
    fetch("https://dummyjson.com/products/category/" + selectedCategory)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setProducts(data.products);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [selectedCategory]);

  const handleCategoryClick = (cat) => {
    setLoading(true);
    setSelectedCategory(cat);
  };

  return React.createElement(
    "div",
    { style: { padding: "1rem" } },
    React.createElement("h2", { style: { marginBottom: "1rem" } }, "Product Categories"),
    React.createElement(
      "div",
      { style: { display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "2rem" } },
      categories.slice(0, 10).map((cat) =>
        React.createElement(
          "button",
          {
            key: cat,
            onClick: () => handleCategoryClick(cat),
            style: {
              padding: "8px 16px",
              borderRadius: "20px",
              border: "1px solid #007bff",
              background: selectedCategory === cat ? "#007bff" : "#fff",
              color: selectedCategory === cat ? "#fff" : "#007bff",
              cursor: "pointer",
              textTransform: "capitalize"
            }
          },
          cat
        )
      )
    ),
    loading
      ? React.createElement("h3", { style: { textAlign: "center", padding: "2rem" } }, "Loading products...")
      : React.createElement(
          "div",
          { className: "product-grid" },
          products.map((product) =>
            React.createElement(ProductCard, { key: product.id, product: product, addToCart: addToCart })
          )
        )
  );
}
