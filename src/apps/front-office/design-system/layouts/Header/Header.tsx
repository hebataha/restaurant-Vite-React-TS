import { Link, changeLocaleCode } from "@mongez/react-router";
import React, { useState } from "react";
import styles from "./style.module.scss";
import HeaderResponsive from "../HeaderResponsive/HeaderResponsive";
import { trans } from "@mongez/localization";
import Logo from "/public/logo.png";
import { current } from "@mongez/react";
// import Logo from ""

export default function Header() {
  const [lang, setLang] = useState(true);

  const changeLang = () => {
    const localeCode = current("localeCode") === "en" ? "ar" : "en";
    changeLocaleCode(localeCode);
    setLang(prevState => !prevState);
  };
  return (
    <>
      <header>
        <nav className="container">
          <div className={styles.logo}>
            <img src={Logo} />
          </div>
          <div className={styles.navBar}>
            <ul>
              <li>
                <Link>{trans("home")}</Link>
              </li>
              <li>
                <Link href="/about-us">{trans("about")}</Link>
              </li>
              <li>
                <Link href="/reservation">{trans("reservation")}</Link>
              </li>

              <li>
                <Link>{trans("menus")}</Link>
              </li>
              <li>
                <Link>{trans("shop")}</Link>
              </li>
              <li>
                <Link href="/login">{trans("login")}</Link>
              </li>
              <li>
                <Link href="/register">{trans("register")}</Link>
              </li>
              <li>
                <button onClick={changeLang}>{lang ? "EN" : "AR"}</button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <HeaderResponsive />
    </>
  );
}
