import styles from "../styles/Components.module.scss";
import Image from "next/image";
import HomePostCardExtension from "./home-post-card-extension";

export default function HomePostCard(props) {
  return (
    <div className={styles["full-home-card"]}>
      <div className={styles["home-post-card"]}>
        <div className={styles["post-card-bookmark"]}>
          <Image src="/bookmark-unselected.svg" alt="bookmark" layout="fill" />
        </div>
        <div className={styles["post-title"]}>{props.postName}</div>
        <div className={styles["post-card-carot"]}>
          <Image src="/arrow-right.png" alt="carot" layout="fill" />
        </div>
        <div className={styles["subheader-list"]}>
          {props.subheaderList.map((subheader) => {
            return (
              <HomePostCardExtension
                subheader={subheader.SubheaderName}
                key={subheader}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
