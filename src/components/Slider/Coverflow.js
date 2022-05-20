import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
// import {
//   Pagination,
//   Autoplay,
//   EffectCards,
// } from 'swiper';

import {
  Pagination,
  Autoplay,
  EffectCoverflow,
} from 'swiper';
// styles
import './covorflow.scss';
import 'swiper/css/bundle';
import 'swiper/css/effect-cards';

function Coverflow() {
  const events = useSelector((state) => state.events);

  return (
    <div className="cards">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 7,
          slideShadows: true,
        }}
        pagination
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}><img src={event.picture_2} alt="1" /></SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}

export default Coverflow;
