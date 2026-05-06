import { useParams, Link } from "react-router-dom";

const heroes = [
  {
    id: "alucard",
    name: "Alucard",
    role: "Fighter",
    desc: "Alucard adalah hero fighter dengan lifesteal tinggi.",
    image: "https://via.placeholder.com/200",
  },
  {
    id: "miya",
    name: "Miya",
    role: "Marksman",
    desc: "Miya adalah marksman dengan attack speed tinggi.",
    image: "https://via.placeholder.com/200",
  },
  {
    id: "tigreal",
    name: "Tigreal",
    role: "Tank",
    desc: "Tigreal adalah tank dengan crowd control kuat.",
    image: "pictures/tigrel.jpg",
  },
];

function HeroDetail() {
  const { id } = useParams();
  const hero = heroes.find((h) => h.id === id);

  if (!hero) return <h1>Hero tidak ditemukan</h1>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={hero.image} alt={hero.name} style={styles.image} />
        <h1>{hero.name}</h1>
        <p style={styles.role}>Role: {hero.role}</p>
        <p style={styles.desc}>{hero.desc}</p>

        <Link to="/" style={styles.button}>
          ← Kembali
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  card: {
    background: "#1e293b",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 6px 15px rgba(0,0,0,0.4)",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  role: {
    color: "#94a3b8",
    marginBottom: "15px",
  },
  desc: {
    fontSize: "14px",
    marginBottom: "20px",
  },
  button: {
    display: "inline-block",
    padding: "10px 15px",
    background: "#3b82f6",
    borderRadius: "6px",
    color: "white",
  },
};

export default HeroDetail;