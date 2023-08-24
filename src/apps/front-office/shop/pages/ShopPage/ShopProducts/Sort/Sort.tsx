import { trans } from "@mongez/localization";
import styles from "./style.module.scss";
export type SortProps = {
  children: React.ReactNode;
};
export default function Sort() {
  return (
    <div className="container">
      <div className={styles.sort}>
        <span>
          {/* Showing 1-6 of 8 results */}
          {trans("showing")}
          1-6 
          {""}
          {trans("results")}
        </span>
        <select>
          <option>{trans("defaultSorting")}</option>
          <option>{trans("SortPopularity")}</option>
          <option>{trans("SortRating")}</option>
          <option>{trans("lowHigh")}</option>
          <option>{trans("highlow")}</option>
        </select>
      </div>
    </div>
  );
}
