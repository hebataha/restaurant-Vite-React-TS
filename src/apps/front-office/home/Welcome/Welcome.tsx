import { trans } from "@mongez/localization";
import styles from "./style.module.scss";
import Image from "/public/welcomeSection/about2.webp";
import TitleComponent from "../TitleComponent/TitleComponent";

export type WelcomeProps = {
  children: React.ReactNode;
};

export default function Welcome() {
  return (
    <>
      <div className={styles.welcomeSectionWrapper}>
        <div className="container">
          <div className={styles.welcomeSection}>
            <div className={styles.imageWrapper}>
              <img src={Image} />
            </div>
            <div className={styles.info}>
              <TitleComponent color welcome />
              <button> {trans("moreFood")}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
