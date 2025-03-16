import styles from "./styles.module.css";

export default function About() {
  return (
    <main className={styles.page}>
      <a href="/">
        About Us
      </a>

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