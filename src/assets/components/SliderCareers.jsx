import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

const SliderCareers = ({agricola, agroforestal,agroindustria,ambiente,computacion, electronica , empresas , publica , riesgos , turismo , veterinaria , flecha , touch}) => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
        <SwiperSlide>
            <div className="contSlider">
                <div><span></span></div>
                <div className="imgCareer"><img  src={agricola} alt="" /></div>
                <button>
                   <a href="#"> <h3 className='blink-2'>Know more</h3></a>
                    <img  className="imgFlecha shake-horizontal" src={flecha} alt="" />
                    </button>
            </div></SwiperSlide>
        <SwiperSlide>
            <div className="contSlider">
                <div><span></span></div>
                <div className="imgCareer"><img  src={agroforestal} alt="" /></div>
                <button>
                    <h3 className='blink-2'>Know more</h3>
                    <img className="imgFlecha shake-horizontal" src={flecha} alt="" />
                    </button>



            </div></SwiperSlide>
        <SwiperSlide>
            <div className="contSlider">
                <div><span></span></div>
                <div className="imgCareer"><img  src={agroindustria} alt="" /></div>
                <button>
                    <h3 className='blink-2'>Know more</h3>
                    <img className="imgFlecha shake-horizontal" src={flecha} alt="" />
                    </button>



            </div></SwiperSlide>
        <SwiperSlide>
            <div className="contSlider">
                <div><span></span></div>
                <div className="imgCareer"><img  src={ambiente} alt="" /></div>
                <button>
                    <h3 className='blink-2'>Know more</h3>
                    <img className="imgFlecha shake-horizontal" src={flecha} alt="" />
                    </button>


        
            </div></SwiperSlide>
        <SwiperSlide>
            <div className="contSlider">
                <div><span></span></div>
                <div className="imgCareer"><img  src={computacion} alt="" /></div>
                <button>
                    <h3 className='blink-2'>Know more</h3>
                    <img className="imgFlecha shake-horizontal" src={flecha} alt="" />
                    </button>



            </div></SwiperSlide>
        <SwiperSlide>
            <div className="contSlider">
                <div><span></span></div>
                <div className="imgCareer"><img  src={electronica} alt="" /></div>
                <button>
                    <h3 className='blink-2'>Know more</h3>
                    <img className="imgFlecha shake-horizontal" src={flecha} alt="" />
                    </button>



            </div></SwiperSlide>
        <SwiperSlide>
            <div className="contSlider">
                <div><span></span></div>
                <div className="imgCareer"><img  src={empresas} alt="" /></div>
                <button>
                    <h3 className='blink-2'>Know more</h3>
                    <img className="imgFlecha shake-horizontal" src={flecha} alt="" />
                    </button>



            </div></SwiperSlide>
        <SwiperSlide>
            <div className="contSlider">
                <div><span></span></div>
                <div className="imgCareer"><img  src={publica} alt="" /></div>
                <button>
                    <h3 className='blink-2'>Know more</h3>
                    <img className="imgFlecha shake-horizontal" src={flecha} alt="" />
                    </button>



            </div></SwiperSlide>
        <SwiperSlide>
            <div className="contSlider">
                <div><span></span></div>
                <div className="imgCareer"><img  src={riesgos} alt="" /></div>
                <button>
                    <h3 className='blink-2'>Know more</h3>
                    <img className="imgFlecha shake-horizontal" src={flecha} alt="" />
                    </button>



            </div></SwiperSlide>
        <SwiperSlide>
            <div className="contSlider">
                <div><span></span></div>
                <div className="imgCareer"><img  src={turismo} alt="" /></div>
                <button>
                    <h3 className='blink-2'>Know more</h3>
                    <img className="imgFlecha shake-horizontal" src={flecha} alt="" />
                    </button>



            </div></SwiperSlide>
        <SwiperSlide>
            <div className="contSlider">
                <div><span></span></div>
                <div className="imgCareer"><img  src={veterinaria} alt="" /></div>
                <button>
                    <h3 className='blink-2'>Know more</h3>
                    <img className="imgFlecha shake-horizontal" src={flecha} alt="" />
                    </button>



            </div></SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

export default SliderCareers