import { trans } from "@mongez/localization";
import styles from "./style.module.scss";
import LoginImg from "/public/login/login.avif";
export type LoginProps = {
  children: React.ReactNode;
};

export default function Login(props: LoginProps) {
  return (
    <>
      <div className={styles.login}>
        <div className={styles.loginWrapper}>
          <div className={styles.overlay}></div>
          <div className={styles.loginHeader}>
            <img src={LoginImg} />
            <div className="container">
              <div className={styles.loginForm}>
                <h1>{trans("login")}</h1>
                <div className="container">
                  <form>
                    <div>
                      <label>
                        Username or email address <sup>*</sup> :
                      </label>
                      <input type="text" />
                    </div>
                    <div>
                      <label>
                        password<sup>*</sup> :
                      </label>
                      <input type="text" />
                    </div>

                    <button>
                      <span>Login</span>
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
