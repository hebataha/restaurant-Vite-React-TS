import { Link } from "@mongez/react-router";
import React from "react";
import styles from "./style.module.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <div className={styles.logo} >
        logo
        </div>
        <div className={styles.navBar} >
        logo
    
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
          <Link>Home</Link>
        </li>
        <li>
          <Link>Home</Link>
        </li>
        </div>
      </nav>
    </header>
  );
}
