import HomePostCard from "./home-post-card";
import Image from "next/image";
import styles from "../styles/Components.module.scss";
import Content from "../content.json";

export default function HomeVerticals2(props) {
  return (
    <div className={styles["category-home-vertical"]}>
      {Content.News.filter(
        (category) => category.CategoryName != "Current Events"
      ).map((category) => {
        return (
          <div
            className={styles["category-home-vertical"]}
            key={category.CategoryName}
          >
            <div className={styles["font-category-header"]}>
              {category.CategoryName}
            </div>
            <div className={styles["home-posts-wrap"]}>
              {category.PostArray.map((post) => {
                return (
                  <HomePostCard
                    key={post.PostName}
                    postName={post.PostName}
                    subheaderList={post.SubheaderArray}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
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
