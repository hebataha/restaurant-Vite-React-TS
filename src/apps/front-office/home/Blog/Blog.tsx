import { trans } from "@mongez/localization";
import styles from "./style.module.scss";
import TitleComponent from "../TitleComponent/TitleComponent";
export type BlogProps = {
  children: React.ReactNode;
};
export default function Blog(props: BlogProps) {
  return (
    <>
      <div className={styles.HomeBlog}>
        <div className="container">
          <TitleComponent/>
          <div className={styles.blogWrapper}></div>
        </div>
      </div>
    </>
  );
}
