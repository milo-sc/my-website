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
        Welcome to my personal website! I'm Victor Wu, a passionate analyst with a strong interest in coding. 
        Here, you'll find insights into my work, projects I've contributed to, and thoughts on topics that inspire me. 
        Whether you're here to learn more about my professional journey or to connect over shared interests, I hope you find something meaningful. Thanks for visiting!
        </p>
        
        <a href="/">
          {/* ← Back to Home */}
        </a>
      </main>
    </div>
  );
}