import styles from "./styles.module.css";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Main */}
      <main className={styles.main}>
        <h1> Hello! My name is Victor Wu, and I love numbers and coding! </h1>

        <a href="/about"> Learn more </a>

        <span> Projects </span>
        
        <span> GracefulNY Website </span>
        <span> Data Analytics Project </span>
        <span> My Website </span>
      </main>

      <Footer />
    </div>
  );
}