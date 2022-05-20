import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
// import {
//   Pagination,
//   Autoplay,
//   EffectCards,
// } from 'swiper';

import {
  Pagination,
  Autoplay,
  EffectCards,
} from 'swiper';
// styles
import './slider.scss';
import 'swiper/css/bundle';
import 'swiper/css/effect-cards';

function Cards() {
  const events = useSelector((state) => state.events);

  return (
    <div className="cards">
      <Swiper
        effect="cards"
        grabCursor
        pagination
        modules={[EffectCards, Autoplay, Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <NavLink to={`Catalogue/spectacle/${event.id}`}>
              <img src={event.picture_2} alt="1" />
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}

export default Cards;
