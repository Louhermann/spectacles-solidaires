/* eslint-disable react/jsx-indent */
// == npm
import { useState, useEffect } from 'react';
import Carousel from "react-spring-3d-carousel";
// import {v4 as uuid} from "uuid"; 
import { config } from "react-spring";
// == Import
import { sliderData } from './SliderData';
import './slider.scss';

function Slider() {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true);

  sliderData.map((slide, index) => {
 return { ...slide, onClick: () => setGoToSlide({index}) }});

  return (
  <div className="carousel">
    <h1 className="carousel__title">Nos Spectacles </h1>
      <div className="carousel-container">
        <Carousel
          slides={sliderData}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showNavigation}
          animationConfig={config.slow}
        />
      </div>
  </div>
  );
}

export default Slider;
// style={{ width: "80%", height: "500px", margin: "12em auto" }}
