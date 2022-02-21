import HomeVerticals from "../front-components/home-vertical-content";
import styles from "../styles/Pages.module.scss";

export default function Life() {
  return (
    <div className={styles["container"]}>
      <main className={styles["main"]}>
        <div className={styles["home-content-wrap"]}>
          <HomeVerticals />
        </div>
      </main>
    </div>
  );
}
