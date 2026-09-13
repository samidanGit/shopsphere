import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "hero-section" },
      React.createElement("h1", { className: "hero-title" }, "Welcome to ShopSphere"),
      React.createElement("p", { className: "hero-subtitle" }, "Discover amazing products at the best prices!"),
      React.createElement(
        Link,
        { to: "/products", className: "hero-btn" },
        "Shop Now"
      )
    ),
    React.createElement(
      "div",
      { className: "features-section" },
      React.createElement(
        "div",
        { className: "feature-card" },
        React.createElement("h3", { className: "feature-title" }, "Fast Shipping"),
        React.createElement("p", { className: "feature-desc" }, "Get your products delivered quickly and safely.")
      ),
      React.createElement(
        "div",
        { className: "feature-card" },
        React.createElement("h3", { className: "feature-title" }, "Best Quality"),
        React.createElement("p", { className: "feature-desc" }, "Top notch materials from verified sellers.")
      ),
      React.createElement(
        "div",
        { className: "feature-card" },
        React.createElement("h3", { className: "feature-title" }, "24/7 Support"),
        React.createElement("p", { className: "feature-desc" }, "We are here to help you anytime you need.")
      )
    )
  );
}