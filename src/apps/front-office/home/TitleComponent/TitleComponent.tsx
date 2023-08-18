import { trans } from "@mongez/localization";
import TitleShape from "/public/welcomeSection/title-shape.webp";
import styles from "./style.module.scss";

export type TitleComponentProps = {
  children: React.ReactNode;
  color: string;
  welcome: boolean;
  find: boolean;
  dish: boolean;
  blog: boolean;
  gallery: boolean;
  about:boolean
};
export default function TitleComponent({
  color,
  welcome,
  find,
  dish,
  blog,
  gallery,
  about
}: TitleComponentProps) {
  return (
    <>
      <div className={styles.menuTitle}>
        <img src={TitleShape} />
        <h1 style={{ color: color ? "#000" : "#fff" }}>
          {welcome && trans("welcome")}
          {""} {welcome && trans("Luxury")}
          {find && trans("findFood")}
          {dish && trans("Starters")}
          {""} {dish && trans("mainDishes")}
          {blog && trans("blog")}
          {gallery && trans("gallery")}
          {about && trans("aboutTitle")}
        </h1>
        <p>
          {find && ""}
          {welcome && trans("dishesDescription")}
        </p>
      </div>
    </>
  );
}
