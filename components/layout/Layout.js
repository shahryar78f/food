import styles from "@/components/layout/Layout.module.css";
import Link from "next/link";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">food</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        next.js course | BotoFood project
      </footer>
    </>
  );
}

export default Layout;
