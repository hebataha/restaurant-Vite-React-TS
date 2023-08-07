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
      {!close && (
        <div className={styles.appearMenu} onClick={toggleMenu}>
          <div className={styles.bar}>+</div>
        </div>
      )}

      {close && (
        <div className={styles.HeaderResponsive}>
          <div className={styles.close} onClick={toggleMenu}>
            X
          </div>

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
      )}
    </>
  );
}
