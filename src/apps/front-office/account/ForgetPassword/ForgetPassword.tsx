import { trans } from "@mongez/localization";
import styles from "./style.module.scss";
import LoginImg from "/public/login/login.avif";
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
                  <h1>{trans("forgetPassword")}</h1>
                  <form>
                    <div>
                      <label>
                        {trans("userAndEmail")} <sup>*</sup> :
                      </label>
                      <input type="text" />
                    </div>

                    <button>
                      <span>{trans("send")}</span>
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
