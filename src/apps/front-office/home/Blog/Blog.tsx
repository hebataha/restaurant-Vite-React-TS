import { useState } from "react";
import styles from "./style.module.scss";
import TitleComponent from "../TitleComponent/TitleComponent";
import Blog1 from "/public/homeBlog/blog1.webp";
import { trans } from "@mongez/localization";
export type BlogProps = {
  children: React.ReactNode;
};
export default function Blog(props: BlogProps) {
  const [blog, setBlog] = useState(true);
  return (
    <>
      <div className={styles.HomeBlog}>
        <div className="container">
          <TitleComponent blog={blog} />
          <div className={styles.blogWrapper}>
            <div className={styles.blogItem}>
              <div className={styles.overlay}></div>
              <img src={Blog1} />
              <div className={styles.badge}>
                <span>{trans("dateBlog")}</span>
              </div>
              <div className={styles.info}>
                <h4>{trans("blogTitle")}</h4>
                <label>{trans("blogDes")}</label>
              </div>
            </div>
            <div className={styles.blogItem}>
              <div className={styles.overlay}></div>
              <img src={Blog1} />
              <div className={styles.badge}>
                <span>{trans("dateBlog")}</span>
              </div>
              <div className={styles.info}>
                <h4>{trans("blogTitle")}</h4>
                <label>{trans("blogDes")}</label>
              </div>
            </div>
            <div className={styles.blogItem}>
              <div className={styles.overlay}></div>
              <img src={Blog1} />
              <div className={styles.badge}>
                <span>{trans("dateBlog")}</span>
              </div>
              <div className={styles.info}>
                <h4>{trans("blogTitle")}</h4>
                <label>{trans("blogDes")}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
