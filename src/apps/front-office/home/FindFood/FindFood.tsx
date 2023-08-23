import { useState } from "react";
import styles from "./style.module.scss";
import Bg from "/public/findFoodSection/bg.webp";
import {
  BrandFacebook,
  BrandTwitter,
  BrandBehance,
  BrandYoutube,
  BrandLinkedin,
} from "tabler-icons-react";
import { trans } from "@mongez/localization";
import TitleComponent from "../TitleComponent/TitleComponent";
export type FindFoodProps = {
  children: React.ReactNode;
};
export default function FindFood(props: FindFoodProps) {
  return (
    <>
      <div className={styles.findFood}>
        <div className={styles.findFoodWrapper}>
          <div className={styles.info}>
            <TitleComponent find color />
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
          <div className={styles.bg}>
            <img src={Bg} />
          </div>
        </div>
      </div>
    </>
  );
}
