import styles from "./style.module.scss";
export type BookReservationProps = {
  children: React.ReactNode;
};
export default function BookReservation(props: BookReservationProps) {
  return (
    <>
      <div className={styles.BookReservation}>
        <div className="container">
        <form>
          <div>
            <label>
              NUMBER OF GUEST <sup>*</sup>
            </label>
            <input type="text" placeholder="person" />
          </div>
          <div>
            <label>
            SELECT DATE <sup>*</sup>
            </label>
            <input type="date" placeholder="person"/>
          </div>
          <div>
            <label>
            SELECT time  <sup>*</sup>
            </label>
            <input type="time" />
          </div>
          <div>
            <button>
              book reservation
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}
