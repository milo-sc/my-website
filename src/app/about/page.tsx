import styles from "./styles.module.css";

export default function About() {
  return (
    <main className={styles.page}>
      <h1>About Us</h1>
      <p>
        Learn more about our company and mission.
      </p>
      
      {/* Example Navigation Link */}
      <a href="/">
        ← Back to Home
      </a>
    </main>
  );
}