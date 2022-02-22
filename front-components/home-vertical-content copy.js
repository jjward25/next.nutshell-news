import HomePostCard from "./home-post-card";
import styles from "../styles/Components.module.scss";
import Posts from "../public/posts.json";
import Content from "../content.json";

export default function HomeVerticals2(props) {
  return (
    <div className={styles["category-home-vertical"]}>
      {Content.filter((section) => section.Section === props.sectionName)[
        "CategoryArray"
      ].map((section) => {
        return <div key={section}> {section.CategoryArray} </div>;
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
