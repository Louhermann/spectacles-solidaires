import Cards from './Card';
import Coverflow from './Coverflow';
// import { useState, useEffect } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import {
//   EffectCoverflow,
//   Pagination,
//   Autoplay,
//   EffectCards,
// } from 'swiper';
import useWindowSize from './size';

function Slider() {
  const size = useWindowSize();

  const isMobile = size.width < 767;
  // console.log(size.width);
  // console.log(isMobile);

  return (
    isMobile ? <Cards /> : <Coverflow />
  );
}

export default Slider;
