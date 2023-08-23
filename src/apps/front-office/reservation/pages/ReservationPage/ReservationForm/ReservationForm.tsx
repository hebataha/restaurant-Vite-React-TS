import { trans } from "@mongez/localization";
import styles from "./style.module.scss";
export type ReservationFormProps = {
  children: React.ReactNode;
};
export default function ReservationForm() {
  return (
    <>
      <div className={styles.ReservationForm}>
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
            <div>
              <button>{trans("book")}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
