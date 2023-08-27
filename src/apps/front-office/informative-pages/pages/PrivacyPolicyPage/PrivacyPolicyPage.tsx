import { trans } from "@mongez/localization";
import styles from "./style.module.scss";
export type PrivacyPolicyPageProps = {
  children: React.ReactNode;
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className={styles.privacy}>
        <h1>{trans("privacy")}</h1>
      </div>
      <div className={styles.content}>
        <p>{trans("privacyContent")}</p>
        <p>{trans("privacyContent")}</p>
        <p>{trans("privacyContent")}</p>
      </div>
    </>
  );
}
