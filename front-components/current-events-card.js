import styles from "../styles/Components.module.scss";
import posts from "../public/posts.json";

export default function CurrentEvents() {
  return (
    <div className={styles["current-events"]}>
      <div className={styles["font-category-header"]}>Current Events </div>

      <div className={styles["ce-card-wrap"]}>
        {posts
          .filter((post) => post.Category === "Current Events")
          .map((post) => {
            return (
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
              >
                <div className={styles["ce-card-header"]}>
                  <div className={styles["ce-card-subheader"]}>
                    <div className={styles["subheader-text"]}>
                      {post.SubheaderName}
                    </div>
                  </div>
                  <div className={styles["ce-card-postdate"]}>
                    {post.PostDate}
                  </div>
                </div>

                <div className={styles["ce-card-main"]}>{post.BulletText}</div>

                <div className={styles["ce-card-citation"]}>
                  <a href={post.BulletLink} target="_blank" rel="noreferrer">
                    {" "}
                    {post.BulletCite}
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
