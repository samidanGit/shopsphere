 # ShopSphere - E-Commerce React Application

ShopSphere is a full-featured dynamic e-commerce application built with **React**, **React Router**, and the **DummyJSON API**. It includes seamless product browsing, category filtering, detailed product views, page routing (including About and 404 Not Found pages), and a fully functional shopping cart system.

To ensure max cross-device compatibility and fix mobile rendering issues, the app is constructed using `React.createElement` syntax.

---

## 🚀 Key Features

* **Home Page**: Interactive hero banner and feature navigation.
* **Product Catalog**: Dynamic product listing fetched from DummyJSON API.
* **Product Details**: Individual product pages featuring full specs, pricing, and image previews.
* **Categories**: Live category filtering for targeted shopping.
* **Shopping Cart**: Real-time cart management with dynamic price total updates and item removal.
* **About Page**: Overview of the platform, mission, and technology stack.
* **Not Found (404)**: Custom fallback page for non-existent routes.
* **Modular UI Components**: Standalone Navbar, Footer, and ProductCard components.
* **Responsive Layout**: Designed for seamless performance across mobile, tablet, and desktop devices.

---

## 🛠️ Tech Stack

* **Frontend Framework**: React.js
* **Routing**: React Router (`react-router-dom`)
* **Data Source**: [DummyJSON API](https://dummyjson.com/)
* **Styling**: Standard CSS
* **Build Tool**: Vite

---

## 📁 Project Structure

```text
shopsphere/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Categories.jsx
│   │   ├── Cart.jsx
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
