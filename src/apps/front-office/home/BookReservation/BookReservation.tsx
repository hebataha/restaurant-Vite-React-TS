import { trans } from "@mongez/localization";
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
              {trans("number")} <sup>*</sup>
            </label>
            <input type="text" placeholder={trans("person")} />
          </div>
          <div>
            <label>
           {trans("date")} <sup>*</sup>
            </label>
            <input type="date" placeholder="person"/>
          </div>
          <div>
            <label>
            {trans("time")} <sup>*</sup>
            </label>
            <input type="time" />
          </div>
          <div>
            <button>
              {trans("book")}
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}
