import { trans } from "@mongez/localization";
import styles from "./style.module.scss";
import { BorderAll } from "tabler-icons-react";
export type BookNowProps = {
  children: React.ReactNode;
};
export default function BookNow(props: BookNowProps) {
  return (
    <>
      <div className={styles.bookNow}>
        <div className="container">
          <div className={styles.bookNowInfo}>
            <h1>{trans("bookAbout")}</h1>
            <button>
              <BorderAll size={20}></BorderAll>
              <span>{trans("bookButton")}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
