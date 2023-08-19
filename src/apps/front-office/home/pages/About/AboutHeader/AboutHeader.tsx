import { trans } from "@mongez/localization";
import styles from "./style.module.scss";
import HeaderVideo from "/public/AboutPage/header.mp4";
export type AboutHeaderProps = {
  children: React.ReactNode;
};
export default function AboutHeader() {
  return (
    <>
      <div className={styles.aboutHeader}>
        <div className={styles.HomeBlog}>
          <div className={styles.blogWrapper}>
            <div className={styles.blogItem}>
              <div className={styles.overlay}></div>
              <video loop autoPlay>
                <source src={HeaderVideo} type="video/mp4" />

                <source src={HeaderVideo} type="video/ogg" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
