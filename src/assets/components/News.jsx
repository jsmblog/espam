import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
const News = ({noticias,img1,img2,img3,img4,img5}) => {
    const [menuNews, setMenuNews] = useState(false)


    const hanldeClickNews = () => {
        setMenuNews(!menuNews)
        console.log(menuNews)
    }
    const onMenuNews = (menuNews) ? "onNewsOn " : "ContNews"

  return (
   <>
    <div>
         <div  >
        <div className='positionFixedNews'>
        <img onClick={hanldeClickNews} className='News shake-top' width={60} src={noticias} alt="" />
        </div>
    </div>
    </div>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       <div >
       <SwiperSlide  className={`${onMenuNews} onNewsOn slide-in-fwd-top`}><div ><img src={img1} alt="" /></div></SwiperSlide>
        <SwiperSlide  className={`${onMenuNews} onNewsOn slide-in-fwd-top`}><div ><img src={img2} alt="" /></div></SwiperSlide>
        <SwiperSlide  className={`${onMenuNews} onNewsOn slide-in-fwd-top`}><div ><img src={img3} alt="" /></div></SwiperSlide>
        <SwiperSlide  className={`${onMenuNews} onNewsOn slide-in-fwd-top`}><div ><img src={img4} alt="" /></div></SwiperSlide>
        <SwiperSlide  className={`${onMenuNews} onNewsOn slide-in-fwd-top`}><div ><img src={img5} alt="" /></div></SwiperSlide>
       </div>
      </Swiper>
    </>
  )
}

export default News