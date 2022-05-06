/* eslint-disable react/jsx-indent */
// == npm
import { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
// == Import
import { sliderData } from './SliderData';
import './slider.scss';

function Slider() {
  const [goToSlide, setGoToSlide] = useState(4);
  const showNavigation = true;

  // onChangeInput = e => {
  //   this.setState({
  //     [e.target.name]: parseInt(e.target.value, 10) || 0
  //   });
  // };

  sliderData.map((slide, index) => {
 return { ...slide, onClick: () => setGoToSlide({index}) } });

  return (
  <div className="carousel">
    <h1 className="carousel__title">Nos Spectacles </h1>
      <div className="carousel-container">
        <Carousel
          slides={sliderData}
          goToSlide={goToSlide}
          offsetRadius={2}
          showNavigation={showNavigation}
          animationConfig={config.slow}
          autoPlay={showNavigation}
          interval={1}
        />
      </div>
  </div>
  );
}

export default Slider;
