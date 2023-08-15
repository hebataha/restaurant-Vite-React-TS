import styles from "./style.module.scss";
import TitleShape from "/public/welcomeSection/title-shape.webp";
import Burger from "/public/mainDishes/burger.webp";
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
              <h1>Starters & Main Dishes</h1>
              <p>
                It’s the story of an everlasting love affair, Dieter Delicioz
                and the Atlantic Ocean in the big air.
              </p>
            </div>
            <div className={styles.menuList}>
              <div className={styles.menuWrapper}>
                <div className={styles.menuImg}>
                  <img src={Burger} />
                </div>
                <div className={styles.menuInfo}>
                  <h3>Chicha Morada</h3>
                  <p>Beetroot And Datterini, Goat Cheese, Ricotta</p>
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
                  <h3>Chicha Morada</h3>
                  <p>Beetroot And Datterini, Goat Cheese, Ricotta</p>
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
                  <h3>Chicha Morada</h3>
                  <p>Beetroot And Datterini, Goat Cheese, Ricotta</p>
                </div>
                <div className={styles.menuButton}>
                  <button>$33.00</button>
                </div>
              </div>
            </div>
       
          </div>
        </div>
      </div>
    </>
  );
}
