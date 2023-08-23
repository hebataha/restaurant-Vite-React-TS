import styles from "./style.module.scss";
import { trans } from "@mongez/localization";
import {
  BrandFacebook,
  BrandTwitter,
  BrandBehance,
  BrandYoutube,
  BrandLinkedin,
} from "tabler-icons-react";
export type ContactFormProps = {
  children: React.ReactNode;
};
export default function ContactForm(props: ContactFormProps) {
  console.log(3 + 2);
  return (
    <>
      <div className={styles.contactForm}>
        <div className="container">
          <div className={styles.contactFormWrapper}>
            <div className={styles.info}>
              <h1>{trans("catch")} </h1>
              <p>{trans("dishesDescription")}</p>
              <ul>
                <li>{trans("austria")}</li>
                <li>{trans("phoneFind")}</li>
                <li>{trans("emailFind")}</li>
                <li>{trans("mon")}</li>
                <li>{trans("fri")}</li>
              </ul>
              <ul className={styles.social}>
                <BrandFacebook size={30} color="#bcbcbc"></BrandFacebook>
                <BrandTwitter size={30} color="#bcbcbc"></BrandTwitter>
                <BrandBehance size={30} color="#bcbcbc"></BrandBehance>
                <BrandYoutube size={30} color="#bcbcbc"></BrandYoutube>
                <BrandLinkedin size={30} color="#bcbcbc"></BrandLinkedin>
              </ul>
            </div>
            <div className={styles.form}>
              <h1>{trans("contact")}</h1>
              <form>
                <input type="text" placeholder={trans("name")} />
                <input type="email" placeholder={trans("email")} />
                <textarea></textarea>
                <button>{trans("send")}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
