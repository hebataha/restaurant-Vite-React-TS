import { Link, changeLocaleCode } from "@mongez/react-router";
import React, { useState } from "react";
import styles from "./style.module.scss";
import HeaderResponsive from "../HeaderResponsive/HeaderResponsive";
import { trans } from "@mongez/localization";
import Logo from "/public/logo.png";
import { current } from "@mongez/react";
import Person from "/public/profile/person.avif";
// import Logo from ""

export default function Header() {
  const [lang, setLang] = useState(true);
  const loggedIn = {
    loggedIn: false,
  };

  const changeLang = () => {
    const localeCode = current("localeCode") === "en" ? "ar" : "en";
    changeLocaleCode(localeCode);
    setLang((prevState) => !prevState);
  };
  return (
    <>
      <header>
        <nav className="container">
          <div className={styles.logo}>
            <Link href="/">
              <img src={Logo} />
            </Link>
          </div>
          <div className={styles.navBar}>
            <ul>
              <li>
                <Link href="/">{trans("home")}</Link>
              </li>
              <li>
                <Link href="/about-us">{trans("about")}</Link>
              </li>
              <li>
                <Link href="/reservation">{trans("reservation")}</Link>
              </li>

              <li>
                <Link href="/terms-conditions">{trans("terms")}</Link>
              </li>
              <li>
                <Link href="/privacy-policy">{trans("privacy")}</Link>
              </li>
              <li>
                <Link href="/faq">{trans("faq")}</Link>
              </li>
              <li>
                <Link href="/blog">{trans("blog")}</Link>
              </li>
              <li>
                <Link href="/shop">{trans("shop")}</Link>
              </li>
              <li>
                <Link href="/contact">{trans("contact")}</Link>
              </li>

              {loggedIn.loggedIn ? (
                <>
                  <li>
                    <Link href="/login">{trans("login")}</Link>
                  </li>
                  <li>
                    <Link href="/register">{trans("register")}</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className={styles.personWrapper}>
                    <div className={styles.person}>
                      <div className={styles.imageWrapper}>
                        <img src={Person} />
                      </div>

                      <span>mazen</span>
                    </div>
                    <div className={styles.personDrop}>
                      <ul>
                        <li>heba</li>
                      </ul>
                    </div>
                  </li>
                </>
              )}

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
