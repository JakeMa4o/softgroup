// Swiper
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

// Styles
import Styles from "./Banner.module.css"


const Banner = () => {
  return (
    <div className={Styles.banner}>
      <Swiper className={Styles.swiper} speed={500} pagination={true} autoplay={{delay: 2500, disableOnInteraction: false}} modules={[Autoplay, Pagination]} >
        <SwiperSlide className={Styles.slide}>1</SwiperSlide>
        <SwiperSlide className={Styles.slide}>2</SwiperSlide>
        <SwiperSlide className={Styles.slide}>3</SwiperSlide>
        <SwiperSlide className={Styles.slide}>4</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner