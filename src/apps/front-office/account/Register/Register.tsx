import { trans } from "@mongez/localization";
import styles from "./style.module.scss";
import LoginImg from "/public/login/login.avif";
export type RegisterProps = {
  children: React.ReactNode;
};
export default function Register(props: RegisterProps) {
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
                  <h1>{trans("register")}</h1>
                  <form>
                    <div>
                      <label>
                        {trans("userAndEmail")} <sup>*</sup> :
                      </label>
                      <input type="text" />
                    </div>

                    <div>
                      <label>
                        {trans("address")} <sup>*</sup> :
                      </label>
                      <input type="text" />
                    </div>
                    <div>
                      <label>
                        {trans("password")}<sup>*</sup> :
                      </label>
                      <input type="text" />
                    </div>
                    <div>
                      <label>
                        {trans("repassword")}<sup>*</sup> :
                      </label>
                      <input type="text" />
                    </div>
                    <button>
                      <span>{trans("register")}</span>
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
