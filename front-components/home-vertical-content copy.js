import HomePostCard from "./home-post-card";
import styles from "../styles/Components.module.scss";
import Content from "../public/posts.json";

export default function HomeVerticals() {
  var newsObj = Content.filter((bullet) => bullet.Section === "News");
  console.log(newsObj);

  newsObj.map()

  return (
    <div className={styles["category-home-vertical"]}>
      <div className={styles["font-category-header"]}>Ongoing News</div>
      <div className={styles["home-posts-wrap"]}></div>
    </div>
  );
}
