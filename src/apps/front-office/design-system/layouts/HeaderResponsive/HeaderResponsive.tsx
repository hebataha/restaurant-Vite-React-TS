import { Link, changeLocaleCode } from "@mongez/react-router";
import styles from "./style.module.scss";
import { useState } from "react";
import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
export type HeaderResponsiveProps = {
  children: React.ReactNode;
};
import { AlignRight } from "tabler-icons-react";

export default function HeaderResponsive() {
  const [close, setClose] = useState(true);
  const [lang, setLang] = useState(true);

  const changeLang = () => {
    const localeCode = current("localeCode") === "en" ? "ar" : "en";
    changeLocaleCode(localeCode);
    setLang(prevState => !prevState);
  };

  function toggleMenu() {
    setClose(prevState => !close);
  }
  return (
    <>
      <div className={styles.sideMenu}>
        <div
          className={!close ? styles.appearTransition : styles.appearMenu}
          onClick={toggleMenu}>
          <div className={styles.bar}>
            <AlignRight size={48} color="#fff"></AlignRight>
          </div>
        </div>

        <div className={close ? styles.HeaderResponsive : styles.hide}>
          <div
            className={close ? styles.close : styles.closeHide}
            onClick={toggleMenu}>
            X
          </div>
          <div className={styles.menu}>
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
              <li>
                <button onClick={changeLang}>{lang ? "en" : "ar"}</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
