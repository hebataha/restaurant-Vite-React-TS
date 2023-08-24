import { trans } from "@mongez/localization";

import styles from "./style.module.scss";
export type ReservationHeaderProps = {
  children: React.ReactNode;
};
export default function ShopHeader() {
  return (
    <div className={styles.shopWrapper}>
      <div className={styles.overlay}></div>
      <div className={styles.shopHeader}>
        <h1>{trans("shop")}</h1>
      </div>
    </div>
  );
}
