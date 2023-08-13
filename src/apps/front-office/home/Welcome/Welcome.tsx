import { trans } from "@mongez/localization";
import styles from "./style.module.scss";
import Image from "/public/welcomeSection/about2.webp";
import TitleShape from "/public/welcomeSection/title-shape.webp";

export type WelcomeProps = {
  children: React.ReactNode;
};
export default function Welcome(props: WelcomeProps) {
  return (
    <>
      <div className={styles.welcomeSectionWrapper}>
        <div className="container">
          <div className={styles.welcomeSection}>
            <div className={styles.imageWrapper}>
              <img src={Image} />
            </div>
            <div className={styles.info}>
              <img src={TitleShape} />
              <h1>
              {trans("welcome")} <br></br> {trans("Luxury")}
              </h1>
              <p>
               {trans("discFood")}
              </p>
              <button>   {trans("moreFood")}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
