function Contact() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Contact Me</h1>

        <p style={styles.desc}>
          Jika ingin bertanya atau memberikan feedback, silakan hubungi saya:
        </p>

        <div style={styles.infoBox}>
          <p>📧 Email: @email.com</p>
          <p>📷 Instagram: @username</p>
          <p>💻 GitHub: github.com/username</p>
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
    width: "400px",
    textAlign: "center",
    boxShadow: "0 6px 15px rgba(0,0,0,0.4)",
  },
  title: {
    marginBottom: "15px",
  },
  desc: {
    fontSize: "14px",
    marginBottom: "15px",
  },
  infoBox: {
    background: "#0f172a",
    padding: "15px",
    borderRadius: "8px",
  },
};

export default Contact;