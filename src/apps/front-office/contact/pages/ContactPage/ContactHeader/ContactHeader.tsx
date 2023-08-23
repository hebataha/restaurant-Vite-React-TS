import { trans } from "@mongez/localization";

import styles from "./style.module.scss";
export type ReservationHeaderProps = {
  children: React.ReactNode;
};
export default function ContactHeader() {
  return (
    <>
      <div className={styles.ContactHeader}>
        <h1>{trans("contact")}</h1>
      </div>
    </>
  );
}
