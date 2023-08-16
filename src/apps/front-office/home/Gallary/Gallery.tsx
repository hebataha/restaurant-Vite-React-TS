import { useState } from "react";
// Import Swiper React components
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./style.module.scss";
import Gallery1 from "/public/gallery/gallery-1.webp";
import Gallery2 from "/public/gallery/gallery2.webp";
import Gallery3 from "/public/gallery/gallery-3.jpeg";
import Gallery4 from "/public/gallery/gallery-4.jpeg";

import TitleComponent from "../TitleComponent/TitleComponent";

export type GallaryProps = {
  children: React.ReactNode;
};
export default function Gallary(props: GalleryProps) {
  const [color, setColor] = useState(true);
  const [gallery, setGallery] = useState(true);
  return (
    <>
      <div className={styles.gallery}>
        <TitleComponent color={color} gallery={gallery}/>
        <div className="container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            navigation={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}>
            <SwiperSlide>
              <div className={styles.sliderWrapper}>
                <img src={Gallery2} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sliderWrapper}>
                <img src={Gallery1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sliderWrapper}>
                <img src={Gallery4} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sliderWrapper}>
                <img src={Gallery2} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sliderWrapper}>
                <img src={Gallery3} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sliderWrapper}>
                <img src={Gallery1} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
