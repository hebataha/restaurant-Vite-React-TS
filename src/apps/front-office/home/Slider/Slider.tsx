// Import Swiper React components
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Rest1 from "/public/headerSlider/rest1.webp";
import Rest2 from "/public/headerSlider/rest2.webp";
import Rest3 from "/public/headerSlider/rest3.jpeg";
import Rest4 from "/public/headerSlider/rest4.webp";
import styles from "./style.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { trans } from "@mongez/localization";
export type SlderProps = {
  children: React.ReactNode;
};

export default function Slider(props: SlderProps) {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}>
        <SwiperSlide>
          <div className={styles.sliderWrapper}>
            <div className={styles.overlay}></div>
            <div className={styles.HeaderSlider}>
              <img src={Rest1} />
              <div className={styles.info}>
              <h1>
                {trans('delicious')} 
                <span> {trans("foods")} </span>
                </h1>{""}
                <h1>{trans("wonderful")}</h1>
                <button>{trans("more")}</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sliderWrapper}>
            <div className={styles.overlay}></div>
            <div className={styles.HeaderSlider}>
              <img src={Rest2} />
              <div className={styles.info}>
              <h1>
                {trans('delicious')} 
                <span> {trans("foods")}</span>
                </h1>{""}
                <h1>{trans("wonderful")}</h1>
                <button>{trans("more")}</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sliderWrapper}>
            <div className={styles.overlay}></div>
            <div className={styles.HeaderSlider}>
              <img src={Rest3} />
              <div className={styles.info}>
              <h1>
                {trans('delicious')} 
                <span> {trans("foods")}</span>
                </h1>{""}
                <h1>{trans("wonderful")}</h1>
                <button>{trans("more")}</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sliderWrapper}>
            <div className={styles.overlay}></div>
            <div className={styles.HeaderSlider}>
              <img src={Rest4} />
              <div className={styles.info}>
              <h1>
                {trans('delicious')} {""}
                <span>{trans("foods")}</span>
                </h1>
                <h1> {trans("wonderful")}</h1>
                <button>{trans("more")}</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
