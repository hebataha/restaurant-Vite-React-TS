import styles from "./style.module.scss";
export type SortProps = {
  children: React.ReactNode;
};
export default function Sort() {
  return (
    <div className="container">
      <div className={styles.sort}>
        <span>Showing 1-6 of 8 results</span>
        <select>
          <option>Default sorting</option>
          <option>Sort by popularity</option>
          <option>Sort by average rating</option>
          <option>Sort by lates</option>
          <option>Sort by price: low to high</option>
          <option>Sort by price: high to low</option>
        </select>
      </div>
    </div>
  );
}
