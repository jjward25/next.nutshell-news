import styles from "../styles/Components.module.scss";
import Image from "next/image";
import HomePostCardExtension from "./home-post-card-extension";
import React, { useState } from "react";
import Link from "next/link";
import postObjList from "../postObjList.json";

const ROUTE_POST_ID = "posts/[id]";

export default function HomePostCard(props) {
  const [rotateChevron, setRotateChevron] = useState(false);
  function shExtend() {
    setRotateChevron(!rotateChevron);
  }

  const [postObj, setPostObj] = useState({});
  function selectPost(selectedPost) {
    setPostObj(
      postObjList.filter((post) => {
        post.PostName == selectedPost;
      })
    );
    console.log(postObj);
  }

  return (
    <div className={styles["full-home-card"]}>
      <div className={styles["home-post-card"]}>
        <div className={styles["post-card-bookmark"]}>
          <Image src="/bookmark-unselected.svg" alt="bookmark" layout="fill" />
        </div>

        <Link
          href={{
            pathname: ROUTE_POST_ID,
            query: { id: props.postName },
          }}
          as={`/post/${props.postName}`}
          passHref
        >
          <div
            className={styles["post-title"]}
            onClick={() => selectPost(props.postName)}
          >
            {props.postName}
          </div>
        </Link>

        <div
          className={styles[`post-card-carot${rotateChevron ? "-open" : ""}`]}
          onClick={() => shExtend()}
        >
          <Image src="/arrow-right.png" alt="carot" layout="fill" />
        </div>
      </div>

      <div className={styles[`subheader-list${rotateChevron ? "-open" : ""}`]}>
        {props.subheaderList.map((subheader) => {
          return (
            <HomePostCardExtension
              subheader={subheader.SubheaderName}
              key={`${props.postName}+" "+${subheader}`}
            />
          );
        })}
      </div>
    </div>
  );
}
