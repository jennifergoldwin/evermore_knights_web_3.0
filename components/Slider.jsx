import React from "react";

// import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination,EffectCoverflow } from "swiper";
// Import Swiper styles
import 'swiper/css';
// import { Navigation,Pagination,EffectCoverflow } from "swiper";
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const model_1 = {
    rotate : 0,
    stretch : 0,
    depth : 220,
    modifier : 1.8,
    slideShadows : false,
}

const breakpoint = {
    1280:{
        slidesPerView:3 ,

    },
    768:{
        slidesPerView: 3,
    },
    640: {

        slidesPerView: 3,
    },
    320: {
        slidesPerView: 1,
    },
      // when window width is >= 480px
      // when window width is >= 640px
    
}


// SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export const Slider = ({list,id}) => {
    
    return(
        
        <div className="px-2 pb-8  mx-auto w-full">
            {id === "model_1" ? 
            <Swiper modules={[Navigation, Pagination, EffectCoverflow]} slidesPerView="auto"
                 draggable grabCursor  centeredSlides="true" loop 
                navigation={{nextEl:'.swiper-button-next',prevEl: '.swiper-button-prev'}} 
                pagination={{ clickable: true }} effect="coverflow"
                coverflowEffect= {model_1} > 

                <div className="swiper-button-prev">
                    <img src="/assets/images/arrow-left.png"/>
                </div>

                <div className="swiper-button-next">
                    <img src="/assets/images/arrow-right.png"/>
                </div>

                {list.map(slide=>(
                    <SwiperSlide  key={slide}>
                        <img src={slide}/>
                    </SwiperSlide>
                ))}     
            </Swiper>
            :
                <Swiper modules={[Navigation, Pagination, EffectCoverflow]} className="swiper-model-custom"
                     slidesPerView="auto"
                     centeredSlides="true" loop="true" grabCursor 
                    navigation={{nextEl:'.swiper-button-next',prevEl: '.swiper-button-prev'}} 
                    pagination={{ clickable: true }} breakpoints={breakpoint}>
                    <div className="swiper-button-prev">
                        <img src="/assets/images/arrow-left.png"/>
                    </div>

                    <div className="swiper-button-next">
                        <img src="/assets/images/arrow-right.png"/>
                    </div>
                    {list.map(slide=>(
                        id==="model_2"?
                        <SwiperSlide  key={slide}>
                            <img className="p-12" src={slide}/>
                        </SwiperSlide> 
                        : <SwiperSlide key={slide.url}>
                            <div className="flex flex-col justify-center items-center ">
                                <img src={slide.url}/>
                                <h2 className="pb-4 font-bold text-xl lg:text-3xl md:text-2xl sm:text-xl  text-gray-400">{slide.title}</h2>
                            </div>
                        </SwiperSlide>
                    ))}   
        
                </Swiper>
            }
        </div>
     
    );

}