import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ padding: "3rem", textAlign: "center" }}>
      <h2>Oops! 404 Page Not Found</h2>
      <p style={{ margin: "1rem 0" }}>The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: "#007bff" }}>Go Home</Link>
    </div>
  );
}
