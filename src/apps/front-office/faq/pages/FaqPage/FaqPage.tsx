import React from "react";
import styles from "./style.module.scss";
import { trans } from "@mongez/localization";
import Accordion from "./Accordion/Accordion";
export type FaqPageProps = {
  children: React.ReactNode;
};
function _FaqPage() {
  return (
    <>
      <div className={styles.faq}>
        <h1>{trans("faq")}</h1>
      </div>
      <Accordion />
    </>
  );
}

const FaqPage = React.memo(_FaqPage);
export default FaqPage;
