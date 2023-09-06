import React from "react";
import styles from "./styles.module.scss";
import Catagories from "./Catagories/Catagories";
import SinglePost from "./SinglePost/SinglePost";
import Tags from "./Tags/Tags";
import InputSearch from "./InputSearch/InputSearch";

export function SinglePostPage() {
  return (
    <>
      <div className="container">
        <div className={styles.flexPost}>
          <div className={styles.SinglePost}>
            <SinglePost />
          </div>
          <div>
            <InputSearch />
            <Catagories />
            <Tags />
          </div>
        </div>
      </div>
    </>
  );
}
