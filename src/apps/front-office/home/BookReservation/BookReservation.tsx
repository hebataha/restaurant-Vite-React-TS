import { trans } from "@mongez/localization";
import styles from "./style.module.scss";
export type BookReservationProps = {
  children: React.ReactNode;
  reservation: boolean;
};
export default function BookReservation({ reservation }) {
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
              <input type="date" placeholder="person" />
            </div>
            <div>
              <label>
                {trans("time")} <sup>*</sup>
              </label>
              <input type="time" />
            </div>

            {/* Reservation Page */}

            {reservation && (
              <>
                <div>
                  <label>
                    {trans("name")} <sup>*</sup>
                  </label>
                  <input type="text" />
                </div>
                <div>
                  <label>
                    {trans("email")} <sup>*</sup>
                  </label>
                  <input type="name" />
                </div>
                <div>
                  <label>
                    {trans("phone")} <sup>*</sup>
                  </label>
                  <input type="number" />
                </div>
                <div className={styles.textarea}>
                  <label>
                    {trans("specialQuest")} <sup>*</sup>
                  </label>
                  <textarea>{trans("message")}</textarea>
                </div>
              </>
            )}

            {/* Reservation Page */}
            <div>
              <button className={reservation && styles.reservationButton}>{trans("book")}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
