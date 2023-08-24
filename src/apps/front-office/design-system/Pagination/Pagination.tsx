import { Link } from "@mongez/react-router";
import styles from "./style.module.scss";
export type PaginationProps = {
  children: React.ReactNode;
};
export default function Pagination() {
  return (
    <>
      <div className={styles.center}>
        <div className={styles.pagination}>
          <Link href="#">&laquo;</Link>
          <Link href="#">1</Link>
          <Link href="#" className={styles.active}>
            2
          </Link>
          <Link href="#">3</Link>
          <Link href="#">4</Link>
          <Link href="#">5</Link>
          <Link href="#">6</Link>
          <Link href="#">&raquo;</Link>
        </div>
      </div>
    </>
  );
}
