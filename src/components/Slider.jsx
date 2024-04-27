import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <div className=" border rounded-3xl"> 
         <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide >
        <img  src="https://i.ibb.co/syQVJmN/1.jpg" alt="" style={{width:"100%", height: "500px"}}/>
      </SwiperSlide>
      <SwiperSlide >
        <img  src="https://i.ibb.co/y56TMR7/2.jpg" alt="" style={{width:"100%", height: "500px"}} />
      </SwiperSlide>
      <SwiperSlide >
        <img  src="https://i.ibb.co/3rSHKbK/3.jpg" alt="" style={{width:"100%", height: "500px"}} />
      </SwiperSlide>
      
    </Swiper>
                   
        </div>
    );
};

export default Slider;