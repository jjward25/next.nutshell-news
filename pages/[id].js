import HomePostCard from "../front-components/home-post-card";
import Image from "next/image";
import styles from "../styles/Pages.module.scss";
import { useRouter } from "next/router";
import postObjList from "../postObjList.json";
import Content from "../content.json";
import { useState } from "react";
import Accordion from "../front-components/postAccordion";

export default function Article() {
  const router = useRouter();
  const post = postObjList[router.query.id];

  var category = "";
  if (typeof post == "undefined") {
    category = "Current Events";
  } else {
    category = post.Category;
  }

  var relatedPosts = [];
  if (typeof post == "undefined") {
    relatedPosts = Content["News"].filter(
      (category) => category.CategoryName == post.Category
    )[0].PostArray;
  } else {
    relatedPosts = Content[post.Section].filter(
      (category) => category.CategoryName == post.Category
    )[0].PostArray;
  }

  var intro = [];
  if (typeof postObjList[router.query.id] == "undefined") {
  } else {
    intro = postObjList[router.query.id].SubheaderArray.filter(
      (postObj) => postObj.SubheaderName == "Introduction"
    );
  }

  var introText = "";
  if (typeof intro[0] == "undefined") {
    introText = "";
  } else {
    introText = intro[0].BulletArray[0].BulletText;
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

            <div className={styles["post-intro-text"]}>{introText}</div>
            <ul className={styles["accordion"]}>
              {postObjList[router.query.id].SubheaderArray.filter(
                (postObj) => postObj.SubheaderName != "Introduction"
              ).map((postObj) => {
                return (
                  <Accordion
                    heading={postObj.SubheaderName}
                    content={postObj.BulletArray.map((bullet) => {
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
                              <a
                                href={bullet.BulletLink}
                                alt="citation"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {bullet.BulletCite}
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    key={postObj.SubheaderName + postObj.SubheaderPriority}
                  />
                );
              })}
            </ul>
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
