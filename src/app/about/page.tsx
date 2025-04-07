import styles from "./styles.module.css";

import Header from "@/components/header/Header";

export default function About() {
  return (
    <div>
      <Header />
      <main className={styles.page}>
        <a>
          {/* About Me */}
        </a>

        <p>
          I love coding and analytics
        </p>
        
        <a href="/">
          ← Back to Home
        </a>
      </main>
    </div>
  );
}