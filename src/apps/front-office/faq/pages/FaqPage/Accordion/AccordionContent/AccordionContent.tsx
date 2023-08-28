import { Plus, Minus } from "tabler-icons-react";
import styles from "./style.module.scss";
import { useState } from "react";
export type AccordionContentProps = {
  children: React.ReactNode;
  heading: string;
};
export default function AccordionContent({
  heading,
  children,
}: AccordionContentProps) {
  const [appear, setAppeaer] = useState(true);

  const handleAccordion = () => {
    setAppeaer((prevState) => !prevState);
  };
  return (
    <>
      <div className={styles.faqBoxHeader}>
        <h3>{heading}</h3>
        <span onClick={handleAccordion}>
          {appear ? (
            <Plus color="#dd5903" size={20}></Plus>
          ) : (
            <Minus color="#dd5903" size={20}></Minus>
          )}
        </span>
      </div>
      <div className={appear ? styles.faqBoxBody : styles.trans}>
        {children}
      </div>
    </>
  );
}
