import styles from "./styles.module.css";

import Link from "next/link";

import Name from "../name/Name";

export default function Header() {
  return (
    <header className={styles.header}>
      <Name />
      <Link href="/about" className={styles.aboutPage}>About Page</Link>
    </header>
  )
}