import Link from "next/link";
import styles from "../styles/Components.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles["footerwrap"]}>
      <div className={styles["footer-left"]}>
        <div className={styles["footerlogowrap"]}>
          <Link href="/">
            <span className={styles["footer-logo"]}>
              <Image
                src="/acorn-grey.svg"
                alt="Nutshell News Logo"
                className="headerlogo"
                layout="fill"
              />
            </span>
          </Link>

          <Link href="/">
            <h1 className={styles["headertitle"]}>nutshell news</h1>
          </Link>
        </div>

        <p style={{ paddingLeft: "20px", paddingTop: "2.5px" }}>
          Copyright Nutshell News
        </p>
      </div>

      <ul className={styles["footerbuttonslist"]}>
        <li className={styles["footerbuttons"]}>
          <Link href="/">News</Link>
        </li>
        <li className={styles["footerbuttons"]}>
          <Link href="/life">Life</Link>
        </li>
        <li className={styles["footerbuttons"]}>
          <Link href="/academic">Academic</Link>
        </li>
        <li className={styles["footerbuttons"]}>
          <Link href="/readinglist">Readling List</Link>
        </li>
        <li className={styles["footerbuttons"]}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
