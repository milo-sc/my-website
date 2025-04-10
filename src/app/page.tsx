import styles from "./styles.module.css";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Header Element */}
      <Header />

      {/* Main */}
      <main className={styles.main}>
        <h1> Welcome! </h1>
      </main>

      {/* Footer Element */}
      <Footer />
    </div>
  );
}