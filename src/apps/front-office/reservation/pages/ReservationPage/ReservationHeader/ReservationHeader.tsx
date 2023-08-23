import { trans } from "@mongez/localization";

import styles from "./style.module.scss";
export type ReservationHeaderProps = {
  children: React.ReactNode;
};
export default function ReservationHeader() {
  return (
    <>
      <div className={styles.reservationHeader}>
        <h1>{trans("reservation")}</h1>
      </div>
    </>
  );
}
