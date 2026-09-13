import { NavLink } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", background: "#1a1a1a", color: "#fff" }}>
      <h2>ShopSphere</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <NavLink to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</NavLink>
        <NavLink to="/products" style={{ color: "#fff", textDecoration: "none" }}>Products</NavLink>
        <NavLink to="/categories" style={{ color: "#fff", textDecoration: "none" }}>Categories</NavLink>
        <NavLink to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</NavLink>
        <NavLink to="/cart" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>Cart ({cartCount})</NavLink>
      </div>
    </nav>
  );
}


