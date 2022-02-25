import HomePostCard from "../front-components/home-post-card";
import Image from "next/image";
import styles from "../styles/Pages.module.scss";
import { useRouter } from "next/router";
import postObjList from "../postObjList.json";
import Content from "../content.json";

export default function Article() {
  const router = useRouter();
  const post = postObjList[router.query.id];
  console.log(post);
  const category = post.Category;
  const relatedPosts = Content[post.Section].filter(
    (category) => category.CategoryName == post.Category
  )[0].PostArray;
  console.log(relatedPosts);

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

            <div className={styles["post-intro-text"]}>
              Text lorum ipsum this is an article about latin language influence
              text philosophy text introduction summary recap. Text lorum ipsum
              this is an article about latin language influence text philosophy
              text introduction summary recap.Text lorum ipsum this is an
              article about latin language influence text philosophy text
              introduction summary.
            </div>

            <div className={styles["subheader-accordion-closed"]}>
              <p className={styles["subheader-text"]}>Subheader title</p>
              <span className={styles["subheader-image-wrap"]}>
                <Image
                  src="/purple-arrow-right.png"
                  alt="carrot"
                  layout="fill"
                />
              </span>
            </div>
            <div className={styles["subheader-accordion-open"]}>
              <p className={styles["subheader-text"]}>Open subheader title</p>
              <span className={styles["subheader-image-wrap"]}>
                <Image
                  src="/purple-arrow-down.png"
                  alt="carrot"
                  layout="fill"
                />
              </span>
            </div>

            <div className={styles["article-bullet-text"]}>
              <span className={styles["bullet-image-wrap"]}>
                <Image src="/acorn.svg" alt="acorn" layout="fill" />
              </span>
              <div className={styles["article-bullet-text-wrap"]}>
                <div className={styles["article-bullet-main"]}>
                  Article bullet text. This is a sentence or two about the post
                  topic. It could be one short line, or potentially multiple
                  lines. There will always be a citation after the bullet text.
                </div>
                <div className={styles["article-bullet-citation"]}>
                  Citation
                </div>
              </div>
            </div>
            <div className={styles["article-bullet-text"]}>
              <span className={styles["bullet-image-wrap"]}>
                <Image src="/acorn.svg" alt="acorn" layout="fill" />
              </span>
              <div className={styles["article-bullet-text-wrap"]}>
                <div className={styles["article-bullet-main"]}>
                  Article bullet text. This is a sentence or two about the post
                  topic. It could be one short line, or potentially multiple
                  lines. There will always be a citation after the bullet text.
                  Article bullet text. This is a sentence or two about the post
                  topic. It could be one short line, or potentially multiple
                  lines. There will always be a citation after the bullet text.
                  Article bullet text. This is a sentence or two about the post
                  topic. It could be one short line, or potentially multiple
                  lines. There will always be a citation after the bullet text.
                </div>
                <div className={styles["article-bullet-citation"]}>
                  Citation
                </div>
              </div>
            </div>
            <div className={styles["article-bullet-text"]}>
              <span className={styles["bullet-image-wrap"]}>
                <Image src="/acorn.svg" alt="acorn" layout="fill" />
              </span>
              <div className={styles["article-bullet-text-wrap"]}>
                <div className={styles["article-bullet-main"]}>
                  Article bullet text. This is a sentence or two about the post
                  topic. It could be one short line, or potentially multiple
                  lines. There will always be a citation after the bullet text.
                </div>
                <div className={styles["article-bullet-citation"]}>
                  Citation
                </div>
              </div>
            </div>

            <div className={styles["subheader-accordion-closed"]}>
              <p className={styles["subheader-text"]}>Subheader title</p>
              <span className={styles["subheader-image-wrap"]}>
                <Image
                  src="/purple-arrow-right.png"
                  alt="carrot"
                  layout="fill"
                />
              </span>
            </div>

            <div className={styles["subheader-accordion-closed"]}>
              <p className={styles["subheader-text"]}>Subheader title</p>
              <span className={styles["subheader-image-wrap"]}>
                <Image
                  src="/purple-arrow-right.png"
                  alt="carrot"
                  layout="fill"
                />
              </span>
            </div>

            <div className={styles["article-content-bottom-border"]}></div>
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
