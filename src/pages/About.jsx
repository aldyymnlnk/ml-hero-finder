function About() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>About ML Hero Finder</h1>

        <p style={styles.desc}>
          ML Hero Finder adalah aplikasi berbasis React yang membantu pemain
          Mobile Legends dalam menemukan hero berdasarkan role yang diinginkan.
        </p>

        <p style={styles.desc}>
          Aplikasi ini dibuat sebagai tugas Frontend Development dengan
          implementasi React Router dan State Management.
        </p>

        <div style={styles.tagBox}>
          <span style={styles.tag}>React</span>
          <span style={styles.tag}>React Router</span>
          <span style={styles.tag}>State Management</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "40px",
  },
  card: {
    background: "#1e293b",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "500px",
    textAlign: "center",
    boxShadow: "0 6px 15px rgba(0,0,0,0.4)",
  },
  title: {
    marginBottom: "15px",
  },
  desc: {
    fontSize: "14px",
    marginBottom: "10px",
  },
  tagBox: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  tag: {
    background: "#3b82f6",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "12px",
  },
};

export default About;