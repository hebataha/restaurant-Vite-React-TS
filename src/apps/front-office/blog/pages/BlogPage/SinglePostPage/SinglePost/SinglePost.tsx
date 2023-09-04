import React from "react";
import styles from "./style.module.scss";
import Helmet from "@mongez/react-helmet";
import { trans } from "@mongez/localization";
import { BrandFacebook, BrandTwitter, Tags } from "tabler-icons-react";

const SinglePost: React.FC = () => {
  return (
    <>
      <Helmet
        appendAppName={false}
        title="Posts"
        description="Short description about my store"
        keywords={["online", "store", "electronics"]}
      />

      <div className="container">
        <div className={styles.flexPost}>
          <div className={styles.SinglePost}>
            <div className={styles.postImage}>
              <img src="" />
            </div>
            <div className={styles.postBody}>
              <div className={styles.postTitle}>
                <h3>LIFESTYLE </h3>
              </div>
              <div className={styles.postHeadLine}>
                <h3>Best Template Website For HTML CSS</h3>
              </div>
              <div className={styles.postInfo}>
                <span className={styles.auther}>Admin </span>
                <span>|</span>
                <span className={styles.date}>May 31, 2020</span>
                <span>|</span>
                <span className={styles.comments}>12 Comments</span>
              </div>
              <div className={styles.postDescription}>
                <p>
                  Stand Blog is a free HTML CSS template for your CMS theme. You
                  can easily adapt or customize it for any kind of CMS or
                  website builder. You are allowed to use it for your business.
                  You are NOT allowed to re-distribute the template ZIP file on
                  any template collection site for the download purpose. Contact
                  TemplateMo for more info. Thank you.
                </p>
              </div>
              <div className={styles.postFooter}>
                <div className={styles.label}>
                  <Tags size={20} color="#aaa"></Tags>
                  <span> Beauty, </span>
                  <span>Nature</span>
                </div>
                <div className={styles.share}>
                  <span>
                    <BrandFacebook size={20} color="#aaa"></BrandFacebook>
                    {trans("facebook")}{" "}
                  </span>
                  <span>
                    <BrandTwitter size={20} color="#aaa"></BrandTwitter>
                    {trans("twitter")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SinglePost;
