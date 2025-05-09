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

        <span> Previous Job </span>
        <span> Reporting Analyst </span>
        <span> - Created weekly reports for upper management on metrics from Google Analytics </span>
        <span> - Created monthly reports with visualizations </span>
        <span> - Participated in weekly standups to give higher management a view of whats happening </span>
      </main>

      <Footer />
    </div>
  );
}