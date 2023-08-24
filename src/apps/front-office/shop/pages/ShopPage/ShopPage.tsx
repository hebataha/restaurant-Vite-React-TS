import React from "react";
import ShopHeader from "./ShopHeader/ShopHeader";
import ShopProducts from "./ShopProducts/ShopProducts";
import styles from "./style.module.scss";

export type ShopPageProps = {
  children: React.ReactNode;
};
function _ShopPage() {
  return (
    <>
      <ShopHeader />
      <div className={styles.ShopPage}>
        <ShopProducts />
      </div>
    </>
  );
}

const ShopPage = React.memo(_ShopPage);
export default ShopPage;
