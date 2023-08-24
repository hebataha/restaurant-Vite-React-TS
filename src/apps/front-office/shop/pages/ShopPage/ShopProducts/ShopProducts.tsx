import styles from "./style.module.scss";
import Sort from "./Sort/Sort";

export type ShopProductsProps = {
  children: React.ReactNode;
};
export default function ShopProducts() {
  return (
    <>
      <Sort />
      <div className={styles.ShopProducts}></div>
    </>
  );
}
