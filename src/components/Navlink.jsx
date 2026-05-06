import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>ML Hero Finder</h2>

      <div style={styles.menu}>
        <NavLink to="/" style={styles.link}>
          Home
        </NavLink>
        <NavLink to="/about" style={styles.link}>
          About
        </NavLink>
        <NavLink to="/contact" style={styles.link}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#1e293b",
  },
  menu: {
    display: "flex",
    gap: "20px",
  },
  link: ({ isActive }) => ({
    color: isActive ? "#3b82f6" : "white",
    fontWeight: isActive ? "bold" : "normal",
  }),
};

export default Navbar;