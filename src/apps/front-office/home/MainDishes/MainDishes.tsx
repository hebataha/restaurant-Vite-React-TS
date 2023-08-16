import styles from "./style.module.scss";
import TitleShape from "/public/welcomeSection/title-shape.webp";
import Burger from "/public/mainDishes/burger.webp";
import { trans } from "@mongez/localization";
export type MainDishesProps = {
  children: React.ReactNode;
};
export default function MainDishes(props: MainDishesProps) {
  return (
    <>
      <div className={styles.mainDishes}>
        <div className="container">
          <div className={styles.mainDishesContainer}>
            <div className={styles.menuTitle}>
              <img src={TitleShape} />
              <h1>
                {trans("Starters")}
                {""} {trans("mainDishes")}
              </h1>
              <p>{trans("dishesDescription")}</p>
            </div>

            <div className={styles.menuList}>
              <div className={styles.menuWrapper}>
                <div className={styles.menuImg}>
                  <img src={Burger} />
                </div>
                <div className={styles.menuInfo}>
                  <h3>{trans("Chicha")}</h3>
                  <p>{trans("listDes")}</p>
                </div>
                <div className={styles.menuButton}>
                  <button>$33.00</button>
                </div>
              </div>
              <div className={styles.menuWrapper}>
                <div className={styles.menuImg}>
                  <img src={Burger} />
                </div>
                <div className={styles.menuInfo}>
                  <h3>{trans("Chicha")}</h3>
                  <p>{trans("listDes")}</p>
                </div>
                <div className={styles.menuButton}>
                  <button>$33.00</button>
                </div>
              </div>
              <div className={styles.menuWrapper}>
                <div className={styles.menuImg}>
                  <img src={Burger} />
                </div>
                <div className={styles.menuInfo}>
                  <h3>{trans("Chicha")}</h3>
                  <p>{trans("listDes")}</p>
                </div>
                <div className={styles.menuButton}>
                  <button>$33.00</button>
                </div>
              </div>
            </div>
          </div>
      
            <div className={styles.buttonWrapper}>
            <button> {trans("viewMore")}</button> 
            </div>
         
   
        </div>
      </div>
    </>
  );
}
