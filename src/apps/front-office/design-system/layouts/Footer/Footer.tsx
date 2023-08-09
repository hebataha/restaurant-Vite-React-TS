import { trans } from "@mongez/localization";
import styles from "./style.module.scss";
import Logo from "/public/logo.png";
import { Link } from "@mongez/react-router";
import Burger from "/public/footerImages/burger.jpeg";
import Dish from "/public/footerImages/dish.jpeg";
import Potato from "/public/footerImages/potato.jpeg";
import Pancake from "/public/footerImages/bancake.jpeg";
import { SignRight } from "tabler-icons-react";

export default function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <div className=" container">

        <div className={`${styles.footerElements}`}>
          <div className={styles.info}>
            <img className={styles.logo} src={Logo} />
            <p>
              {trans("descriptionFooter")}
            </p>
          </div>
          <div className={styles.touch}>
            <h3>
            <SignRight size={30} color="#dd5903" />
              <span>
              {trans("touch")}
              </span>
            </h3>
            <p>{trans("addressStreet")}</p>
            <p>+39-055-123456</p>
            <p>booking@webexample.com</p>
          </div>
          <div className={styles.pages}>
            <h3>
            <SignRight size={30} color="#dd5903" />
              <span>
              {trans("pages")}
              </span>
            </h3>
            <ul>
              <li>
                <Link>{trans("home")}</Link>
              </li>
              <li>
                <Link>{trans("about")}</Link>
              </li>
              <li>
                <Link>{trans("reservation")}</Link>
              </li>

              <li>
                <Link>{trans("menus")}</Link>
              </li>
              <li>
                <Link>{trans("shop")}</Link>
              </li>
              <li>
                <Link>{trans("login")}</Link>
              </li>
              <li>
                <Link>{trans("register")}</Link>
              </li>
            </ul>
          </div>
          <div className={styles.imagesWrapper}>
            <div className={styles.images}>
            <div>
                <img src={Pancake} />
              </div>
              <div>
                <img src={Burger} />
              </div>
              <div>
                <img src={Dish} />
              </div>
            </div>
            <div className={styles.images}>
              <div>
                <img src={Pancake} />
              </div>
              <div>
                <img src={Potato} />
              </div>
              <div>
                <img src={Burger} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
