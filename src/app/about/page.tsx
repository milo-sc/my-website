import styles from "./styles.module.css";

import Header from "@/components/header/Header";

export default function About() {
  return (
    <div>
      <Header />
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
    </div>
  );
}