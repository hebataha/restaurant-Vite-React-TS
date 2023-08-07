import { Link } from "@mongez/react-router";
import React from "react";
import styles from "./style.module.scss";
import HeaderResponsive from "../Footer/HeaderResponsive/HeaderResponsive";

export default function Header() {
  return (
    <>
    <header >
      <nav className="container">
        <div className={styles.logo} >
        logo
        </div>
        <div className={styles.navBar} >
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
          <button>
            AR
          </button>
        </li>
        </ul>
        </div>
      </nav>
    </header>
    <HeaderResponsive/>
    </>
  );
}
