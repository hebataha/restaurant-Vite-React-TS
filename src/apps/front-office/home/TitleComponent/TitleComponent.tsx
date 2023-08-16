import { trans } from "@mongez/localization";
import TitleShape from "/public/welcomeSection/title-shape.webp";
import styles from "./style.module.scss";

export type TitleComponentProps = {
  children: React.ReactNode;
};
export default function TitleComponent({ color, welcome }) {
  return (
    <>
      <div className={styles.menuTitle}>
        <img src={TitleShape} />
        <h1 style={{ color: color ? "#000" : "#fff" }}>
          {welcome && trans("welcome")}
          {""} {welcome && trans("Luxury")}
        </h1>
        <p>{trans("dishesDescription")}</p>
      </div>
    </>
  );
}
