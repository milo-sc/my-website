import styles from "./styles.module.css";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Main */}
      <main className={styles.main}>
        <h1> Hello! My name is Victor Wu, and I love numbers! </h1>

        <a href="/about"> Learn more </a>

        <span> Projects </span>
        
      </main>

      <Footer />
    </div>
  );
}