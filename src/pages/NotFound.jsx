import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404</h1>
      <p>Halaman tidak ditemukan</p>

      <Link to="/" style={{ color: "#3b82f6" }}>
        Kembali ke Home
      </Link>
    </div>
  );
}

export default NotFound;