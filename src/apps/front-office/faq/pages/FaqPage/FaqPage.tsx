import React, { useState } from "react";
import styles from "./style.module.scss";
import { trans } from "@mongez/localization";
import { Plus } from "tabler-icons-react";
export type FaqPageProps = {
  children: React.ReactNode;
};
function _FaqPage() {
  const [accordinApear, setAccordinApear] = useState(true);
  function accordion() {
    setAccordinApear((prevState) => !prevState);
    console.log(accordinApear);
  }
  return (
    <>
      <div className={styles.faq}>
        <h1>{trans("faq")}</h1>
      </div>
      <div className={styles.content}>
        <div className="container">
          <div className={styles.faqBox}>
            <div className={styles.faqBoxHeader}>
              <h3>frist question</h3>
              <span onClick={accordion}>
                <Plus color="#dd5903" size={20}></Plus>
              </span>
            </div>
            {/* styles.faqBoxBody */}
          </div>
          <div
            className={
              accordinApear ? `${styles.faqBoxBody}` : `${styles.trans}`
            }
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              repellendus nisi tempore est voluptatibus, nam aliquam voluptas
              nulla enim explicabo?
            </p>
          </div>
          <div className={styles.faqBox}>
            <div className={styles.faqBoxHeader}>
              <h3>frist question</h3>
              <span onClick={accordion}>
                <Plus color="#dd5903" size={20}></Plus>
              </span>
            </div>
            {/* styles.faqBoxBody */}
          </div>
          <div
            className={
              !accordinApear ? `${styles.faqBoxBody}` : `${styles.trans}`
            }
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              repellendus nisi tempore est voluptatibus, nam aliquam voluptas
              nulla enim explicabo?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const FaqPage = React.memo(_FaqPage);
export default FaqPage;
