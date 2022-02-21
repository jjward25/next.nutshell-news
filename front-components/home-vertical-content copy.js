import HomePostCard from "./home-post-card";
import styles from "../styles/Components.module.scss";
import Posts from "../public/posts.json";
import Content from "../content.json";

export default function HomeVerticals() {
  return (
    <div className={styles["category-home-vertical"]}>
      {Content.News.map((category) => {
        return <div key={category.values()}> {category} </div>;
      })}

      <div className={styles["font-category-header"]}>Ongoing News</div>
      <div className={styles["home-posts-wrap"]}></div>
    </div>
  );
}
/*
<div
  className={styles["current-events-card"]}
  key={
    post.Category +
    "." +
    post.PostPriority +
    "." +
    post.SubheaderPriority +
    "." +
    post.BulletPriority
  }
></div>;
*/
