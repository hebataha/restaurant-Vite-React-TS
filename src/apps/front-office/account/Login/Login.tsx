import { trans } from "@mongez/localization";
import styles from "./style.module.scss";
import LoginImg from "/public/login/login.avif";
import { Link } from "@mongez/react-router";
export type LoginProps = {
  children: React.ReactNode;
};

export default function Login() {
  return (
    <>
      <div className={styles.login}>
        <div className={styles.loginWrapper}>
          <div className={styles.overlay}></div>
          <div className={styles.loginHeader}>
            <img src={LoginImg} />
            <div className={styles.loginContainer}>
              <div className={styles.loginForm}>
                <div className="container">
                  <h1>{trans("login")}</h1>
                  <form>
                    <div>
                      <label>
                        {trans("userAndEmail")} <sup>*</sup> :
                      </label>
                      <input type="text" />
                    </div>
                    <div>
                      <label>
                        {trans("password")}
                        <sup>*</sup> :
                      </label>
                      <input type="text" />
                    </div>
                    <Link href="/forget-password">
                      <span className={styles.forget}>
                        {trans("forgetPassword")}
                      </span>
                    </Link>

                    <button>
                      <span>{trans("login")}</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
