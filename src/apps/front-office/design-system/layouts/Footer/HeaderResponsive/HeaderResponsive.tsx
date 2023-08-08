import { Link } from "@mongez/react-router";
import styles from "./style.module.scss";
import { useState } from "react";
export type HeaderResponsiveProps = {
  children: React.ReactNode;
};
export default function HeaderResponsive(props: HeaderResponsiveProps) {
  const [close, setClose] = useState(true);

  function toggleMenu() {
    setClose(prevState => !close);
  }
  return (
    <>
      <div className={styles.sideMenu}>
        <div className={!close ? styles.appearTransition : styles.appearMenu  } onClick={toggleMenu}>
          <div className={styles.bar}>+</div>
        </div>
    
     
        <div className={close? styles.HeaderResponsive : styles.hide}>
          <div className={ close? styles.close : styles.closeHide} onClick={toggleMenu}>
            X
          </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Reservation</Link>
            </li>

            <li>
              <Link>Menus</Link>
            </li>
            <li>
              <Link>Shop</Link>
            </li>
            <li>
              <Link>Login</Link>
            </li>
            <li>
              <Link>Register</Link>
            </li>
            <li>
              <button>AR</button>
            </li>
          </ul>
        </div>
        </div>
        </div>
     
    </>
  );
}
