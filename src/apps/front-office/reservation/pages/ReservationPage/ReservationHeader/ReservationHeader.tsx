import styles from "./style.module.scss"
export type ReservationHeaderProps = {
  children: React.ReactNode;
};
export default function ReservationHeader(props: ReservationHeaderProps) {
  return (
    <>
      <div className={styles.reservationHeader}>
        <h1>reservation</h1>
      </div>
    </>
  );
}
