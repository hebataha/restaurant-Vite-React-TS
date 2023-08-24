import React from "react";
import ShopHeader from "./ShopHeader/ShopHeader";

export type ShopPageProps = {
  children: React.ReactNode;
};
function _ShopPage() {
  return (
    <>
      <ShopHeader />
    </>
  );
}

const ShopPage = React.memo(_ShopPage);
export default ShopPage;
