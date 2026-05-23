import { useParams, Link } from "react-router-dom";

const heroes = [
  {
    id: "alucard",
    name: "Alucard",
    role: "Fighter",
    desc: "Fighter sekaligus assassin yang terkenal dengan lifesteal tinggi dan kemampuan duel satu lawan satu. Posisi Alucard dalam pertarungan biasanya berada di frontline kedua atau masuk dari samping untuk mengincar hero core lawan. Ia kuat dalam mengejar musuh dan bertahan lewat serangan beruntun, terutama saat berhasil masuk ke tengah pertarungan dengan timing yang tepat.",
    image: "https://via.placeholder.com/200",
  },
  {
    id: "miya",
    name: "Miya",
    role: "Marksman",
    desc: "Seorang marksman dengan serangan jarak jauh yang mengandalkan attack speed tinggi dan damage bertubi-tubi. Dalam pertarungan, Miya biasanya berada di backline untuk menyerang lawan dari jarak aman sambil memberikan damage besar secara konsisten. Sangat efektif saat teamfight berlangsung lama, tetapi perlu perlindungan dari tank atau roamer karena pertahanannya lemah.",
    image: "miya.jpg",
  },
  {
    id: "tigreal",
    name: "Tigreal",
    role: "Tank",
    desc: "Tank dengan kemampuan crowd control kuat yang bertugas membuka war dan melindungi tim. Dalam pertarungan, Tigreal berada di frontline paling depan untuk menerima damage sekaligus mengacaukan formasi lawan menggunakan skill tarik dan stun area. Hero ini sangat penting untuk memulai teamfight dan menciptakan peluang bagi rekan satu tim menyerang dengan aman.",
    image: "pictures/tigrel.jpg",
  },
  {
    id: "ling",
    name: "Ling",
    role: "Jungler",
    desc: "Assassin lincah yang mengandalkan mobilitas tinggi dan serangan cepat untuk menghabisi lawan. Dalam pertarungan, Ling biasanya bergerak dari sisi belakang atau flank untuk menargetkan marksman dan mage musuh. Ia unggul dalam menculik hero tipis lalu keluar dari war dengan cepat menggunakan kemampuan melompat antar tembok.",
    image: "ling.jpg",
  },
  {
    id: "rafaela",
    name: "Rafaela",
    role: "Support",
    desc: "Support yang fokus membantu tim melalui heal, peningkatan movement speed, dan efek stun. Posisi Rafaela dalam pertarungan biasanya berada di mid-backline, dekat core atau tank agar bisa memberikan dukungan secara maksimal. Hero ini sangat berguna menjaga sustain tim dan membantu rotasi maupun pengejaran musuh.",
    image: "rafaela.jpg",
  },
  {
    id: "valir",
    name: "Valir",
    role: "Mage",
    desc: "Mage dengan serangan api yang memiliki damage area serta efek knockback dan slow yang mengganggu lawan. Dalam pertarungan, Valir berada di backline sambil menjaga jarak aman untuk memberikan poke damage dan menghalau musuh yang mencoba mendekat. Sangat efektif untuk zoning dan menghentikan hero lawan yang ingin masuk ke area teamfight.",
    image: "valir.jpg",
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