import styles from "./style.module.scss";
import Sort from "./Sort/Sort";
import ProductImage from "/public/shopPage/3.avif";
import ProductImage2 from "/public/shopPage/1.avif";
import ProductImage3 from "/public/shopPage/2.avif";
import { trans } from "@mongez/localization";

export type ShopProductsProps = {
  children: React.ReactNode;
};
export default function ShopProducts() {
  return (
    <>
      <Sort />

      <div className="container">
        <div className={styles.ShopProducts}>
          <div className={styles.ShopProductsItem}>
            <div className={styles.ProductImage}>
              <img src={ProductImage} />
            </div>
            <div className={styles.ProductName}>
              <span>Chicha Morada</span>
            </div>
            <div className={styles.ProductPrice}>
              <span>$33.00</span>
            </div>
            <button>
              <span>{trans("addCart")}</span>
            </button>
          </div>
          <div className={styles.ShopProductsItem}>
            <div className={styles.ProductImage}>
              <img src={ProductImage2} />
            </div>
            <div className={styles.ProductName}>
              <span>Chicha Morada</span>
            </div>
            <div className={styles.ProductPrice}>
              <span>$33.00</span>
            </div>
            <button>
              <span>{trans("addCart")}</span>
            </button>
          </div>
          <div className={styles.ShopProductsItem}>
            <div className={styles.ProductImage}>
              <img src={ProductImage3} />
            </div>
            <div className={styles.ProductName}>
              <span>Chicha Morada</span>
            </div>
            <div className={styles.ProductPrice}>
              <span>$33.00</span>
            </div>
            <button>
              <span>{trans("addCart")}</span>
            </button>
          </div>
          <div className={styles.ShopProductsItem}>
            <div className={styles.ProductImage}>
              <img src={ProductImage} />
            </div>
            <div className={styles.ProductName}>
              <span>Chicha Morada</span>
            </div>
            <div className={styles.ProductPrice}>
              <span>$ 33.00</span>
            </div>
            <button>
              <span>{trans("addCart")}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
