// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./index.module.css";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

function MainSlider() {
  return (
    <>
      <Head>
        <title>Main Page</title>
        <meta name="description" content="This is Main Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src={
          "https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"
        }
        strategy={"beforeInteractive"}
      />

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Image
            src={"/assets/images/1.jpg"}
            alt={"slide number one"}
            width={1000}
            height={1000}
            className={styles.slideImages}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/images/1.jpg"}
            alt={"slide number two"}
            width={500}
            height={500}
            className={styles.slideImages}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/images/1.jpg"}
            alt={"slide number three"}
            width={500}
            height={500}
            className={styles.slideImages}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/images/1.jpg"}
            alt={"slide number four"}
            width={500}
            height={500}
            className={styles.slideImages}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MainSlider;
