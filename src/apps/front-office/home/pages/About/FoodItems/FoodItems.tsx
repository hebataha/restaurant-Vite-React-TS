import TitleComponent from "apps/front-office/home/TitleComponent/TitleComponent";
import styles from "./style.module.scss";
import { Soup, Meat, GlassFull } from "tabler-icons-react";
import { trans } from "@mongez/localization";
export type FoodItemsProps = {
  children: React.ReactNode;
};
export default function FoodItems(props: FoodItemsProps) {
  return (
    <>
      <TitleComponent foodItems color />
      <div className={styles.FoodItems}>
        <div className="container">
          <div className={styles.FoodItemsWrapper}>
            <div className={styles.foodItemsBox}>
              <div className={styles.foodItemsCard}>
                <div className={styles.foodItemsIcon}>
                  <Soup size={80} color="#dd5903"></Soup>
                </div>
                <div className={styles.foodItemsInfo}>
                  <h2>{trans("meat")}</h2>
                  <p>
                    <p>{trans("menuDescription")}</p>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.foodItemsBox}>
              <div className={styles.foodItemsCard}>
                <div className={styles.foodItemsIcon}>
                  <Meat size={80} color="#dd5903"></Meat>
                </div>
                <div className={styles.foodItemsInfo}>
                  <h2>{trans("chicken")}</h2>
                  <p>{trans("menuDescription")}</p>
                </div>
              </div>
            </div>
            <div className={styles.foodItemsBox}>
              <div className={styles.foodItemsCard}>
                <div className={styles.foodItemsIcon}>
                  <GlassFull size={80} color="#dd5903"></GlassFull>
                </div>
                <div className={styles.foodItemsInfo}>
                  <h2>{trans("cup")}</h2>
                  <p>{trans("menuDescription")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
