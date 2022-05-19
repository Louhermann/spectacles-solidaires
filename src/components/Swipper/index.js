import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.scss';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper';

import image1 from '../../assets/images/Artichocolat/Artichocolat.jpg';
import image2 from '../../assets/images/La note magique/La_note_magique.jpg';
import image3 from '../../assets/images/Le murmure de la mer/Le_murmure_de_la_mer.jpg';
import image4 from '../../assets/images/Les défis et Enigmes/Les_défis.jpg';
import image5 from '../../assets/images/Les Experiences Spectaculaires/Les_expériences_S.jpg';
import image6 from '../../assets/images/Les Mains Bavardeuses/Les_mains_Bavardeuses.jpg';
import image7 from '../../assets/images/Badou/Badou.jpg';
import image8 from '../../assets/images/Nekolo/Nekolo.jpg';
import image9 from '../../assets/images/Petite ombre/Petite_ombre.jpg';
import image10 from '../../assets/images/Sur le port de chine/Sur_le_port.jpg';
import image11 from '../../assets/images/Aliko/Aliko.jpg';
import image12 from '../../assets/images/Les repriseuses de l_ouest/Les repriseuses.jpg';

// // import required modules

export default function App() {
  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="3"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
    >

      <SwiperSlide><img src={image1} alt="1" /></SwiperSlide>
      <SwiperSlide><img src={image2} alt="1" /></SwiperSlide>
      <SwiperSlide><img src={image3} alt="1" /></SwiperSlide>
      <SwiperSlide><img src={image4} alt="1" /></SwiperSlide>
      <SwiperSlide><img src={image5} alt="1" /></SwiperSlide>
      <SwiperSlide><img src={image6} alt="1" /></SwiperSlide>
      <SwiperSlide><img src={image7} alt="1" /></SwiperSlide>
      <SwiperSlide><img src={image8} alt="1" /></SwiperSlide>
      <SwiperSlide><img src={image9} alt="1" /></SwiperSlide>
      <SwiperSlide><img src={image10} alt="1" /></SwiperSlide>
      <SwiperSlide><img src={image11} alt="1" /></SwiperSlide>
      <SwiperSlide><img src={image12} alt="1" /></SwiperSlide>

    </Swiper>
  );
}
