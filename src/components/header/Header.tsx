import styles from "./styles.module.css";

import Link from "next/link";

import Name from "../name/Name";

export default function Header() {
  return (
    <header className={styles.header}>
      <a> test text </a>
      <Name />
      <Link href="/about">Visit About Page</Link>
    </header>
  )
}