import styles from "./styles.module.css";

import Name from "../name/Name";

export default function Header() {
  return (
    <header className={styles.header}>
      <Name />
      <a href="/about" className={styles.aboutPage}>About Me</a>
    </header>
  );
}