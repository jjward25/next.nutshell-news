import HomePostCard from "../front-components/home-post-card";
import Image from "next/image";
import styles from "../styles/Pages.module.scss";
import { useRouter } from "next/router";
import postObjList from "../postObjList.json";
import Content from "../content.json";
import { useState } from "react";

export default function Article() {
  const router = useRouter();
  const post = postObjList[router.query.id];
  const category = post.Category;
  const relatedPosts = Content[post.Section].filter(
    (category) => category.CategoryName == post.Category
  )[0].PostArray;

  var intro = postObjList[router.query.id].SubheaderArray.filter(
    (postObj) => postObj.SubheaderName == "Introduction"
  );

  if (typeof intro[0] == "undefined") {
    intro = "";
  } else {
    intro = intro[0].BulletArray[0].BulletText;
  }

  const [rotateChevron, setRotateChevron] = useState(false);
  function shExtend() {
    setRotateChevron(!rotateChevron);
  }

  return (
    <div className={styles["container"]}>
      <main className={styles["main"]}>
        <div className={styles["home-content-wrap"]}>
          <div className={styles["related-posts"]}>
            <div className={styles["font-category-header"]}>Related Posts</div>
            <div className={styles["home-posts-wrap"]}>
              {relatedPosts
                .filter((relatedPost) => relatedPost.PostName != post.PostName)
                .map((relatedPost) => {
                  return (
                    <HomePostCard
                      key={relatedPost.PostName}
                      postName={relatedPost.PostName}
                      subheaderList={relatedPost.SubheaderArray}
                      category={category}
                    />
                  );
                })}
            </div>
          </div>

          <div className={styles["article-main-card"]}>
            <div className={styles["post-category-text"]}>{post.Category}</div>

            <div className={styles["font-title-header"]}>{post.PostName}</div>

            <div className={styles["post-intro-text"]}>{intro}</div>

            {postObjList[router.query.id].SubheaderArray.filter(
              (postObj) => postObj.SubheaderName != "Introduction"
            ).map((postObj) => {
              return (
                <div key={postObj.SubheaderName + postObj.SubheaderPriority}>
                  <div
                    className={
                      styles[
                        `subheader-accordion${rotateChevron ? "-open" : ""}`
                      ]
                    }
                  >
                    <p className={styles["subheader-text"]}>
                      {postObj.SubheaderName}
                    </p>
                    <div
                      className={
                        styles[
                          `subheader-image-wrap${rotateChevron ? "-open" : ""}`
                        ]
                      }
                      onClick={() => shExtend()}
                    >
                      <Image
                        src="/purple-arrow-right.png"
                        alt="carot"
                        layout="fill"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      styles[`bullet-wrap${rotateChevron ? "-open" : ""}`]
                    }
                  >
                    {postObj.BulletArray.map((bullet) => {
                      return (
                        <div
                          key={bullet.BulletPriority}
                          className={styles["article-bullet-text"]}
                        >
                          <span className={styles["bullet-image-wrap"]}>
                            <Image src="/acorn.svg" alt="acorn" layout="fill" />
                          </span>
                          <div className={styles["article-bullet-text-wrap"]}>
                            <div className={styles["article-bullet-main"]}>
                              {bullet.BulletText}
                            </div>
                            <div className={styles["article-bullet-citation"]}>
                              {bullet.BulletCite}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles["post-social-icons"]}>
            <div className={styles['post-icon-bg"']}>
              <span className={styles["post-icon-wrap"]}>
                <Image
                  src="/bookmark-unselected.svg"
                  alt="bookmark"
                  layout="fill"
                />
              </span>
            </div>
            <div className={styles['post-icon-bg"']}>
              <span className={styles["post-icon-wrap"]}>
                <Image src="/share.png" alt="share" layout="fill" />
              </span>
            </div>
            <div className={styles['post-icon-bg"']}>
              <span className={styles["post-icon-wrap"]}>
                <Image src="/comment.png" alt="comment" layout="fill" />
              </span>
            </div>
            <div className={styles['post-icon-bg"']}>
              <span className={styles["post-icon-wrap"]}>
                <Image src="/feedback.png" alt="feedback" layout="fill" />
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
