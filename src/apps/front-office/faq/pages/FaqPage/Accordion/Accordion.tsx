import AccordionContent from "./AccordionContent/AccordionContent";
import styles from "./style.module.scss";

export type AccordionProps = {
  children: React.ReactNode;
};
export default function Accordion() {
  return (
    <>
      <div className={styles.accordionWrapper}>
        <AccordionContent heading="my name">
          <p>heba taha</p>
        </AccordionContent>
      </div>
      <div className={styles.accordionWrapper}>
        <AccordionContent heading="job title">
          <p>front end developer</p>
        </AccordionContent>
      </div>
    </>
  );
}
