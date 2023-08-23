import { trans } from "@mongez/localization";
import styles from "./style.module.scss";
import RegisterImg from "/public/register/register.webp";
export type RegisterProps = {
  children: React.ReactNode;
};
export default function Register() {
  return (
    <>
      <div className={styles.register}>
        <div className={styles.registerWrapper}>
          <div className={styles.overlay}></div>
          <div className={styles.registerHeader}>
            <img src={RegisterImg} />
            <div className={styles.registerContainer}>
              <div className={styles.registerForm}>
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
                        {trans("password")}
                        <sup>*</sup> :
                      </label>
                      <input type="text" />
                    </div>
                    <div>
                      <label>
                        {trans("repassword")}
                        <sup>*</sup> :
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
