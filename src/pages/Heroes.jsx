import { useState } from "react";
import { Link } from "react-router-dom";

const heroes = [
  {
    id: "alucard",
    name: "Alucard",
    role: "Fighter",
    image: "https://via.placeholder.com/200",
  },
  {
    id: "miya",
    name: "Miya",
    role: "Marksman",
    image: "https://via.placeholder.com/200",
  },
  {
    id: "tigreal",
    name: "Tigreal",
    role: "Tank",
    image: "pictures/tigrel.jpg",
  },
];

function Heroes() {
  const [filter, setFilter] = useState("All");

  const filteredHeroes =
    filter === "All"
      ? heroes
      : heroes.filter((hero) => hero.role === filter);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ML Hero Finder</h1>

      <div style={styles.filterBox}>
        <label>Pilih Role: </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={styles.select}
        >
          <option value="All">All</option>
          <option value="Fighter">Fighter</option>
          <option value="Marksman">Marksman</option>
          <option value="Tank">Tank</option>
        </select>
      </div>

      <div style={styles.grid}>
        {filteredHeroes.map((hero) => (
          <div
            key={hero.id}
            style={styles.card}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <img src={hero.image} alt={hero.name} style={styles.image} />
            <h3>{hero.name}</h3>
            <p style={styles.role}>{hero.role}</p>

            <Link to={`/heroes/${hero.id}`} style={styles.button}>
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "30px" },
  title: { textAlign: "center", marginBottom: "20px" },

  filterBox: {
    textAlign: "center",
    marginBottom: "20px",
  },

  select: {
    marginLeft: "10px",
    padding: "5px",
    borderRadius: "5px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    transition: "0.3s",
  },

  image: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "10px",
  },

  role: { color: "#94a3b8" },

  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 12px",
    background: "#3b82f6",
    borderRadius: "6px",
    color: "white",
  },
};

export default Heroes;