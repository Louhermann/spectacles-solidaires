/* eslint-disable react/jsx-indent */
import { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import uuidv4 from 'uuid';
import { config } from 'react-spring';
import './slider.scss';

// == Image
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

function Slider() {
  const [state, setState] = useState({
    // goToSlide: 0,
    offsetRadius: 1,
    showNavigation: true,
    config: config.wobbly,
  });

  const [goToSlide, setGoToSlide] = useState(0);

  const slides = [
    {
      key: uuidv4(),
      content: <img src={image1} alt="1" />,
    },
    {
      key: uuidv4(),
      content: <img src={image2} alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src={image3} alt="3" />,
    },
    {
      key: uuidv4(),
      content: <img src={image4} alt="4" />,
    },
    {
      key: uuidv4(),
      content: <img src={image5} alt="5" />,
    },
    {
      key: uuidv4(),
      content: <img src={image6} alt="6" />,
    },
    {
      key: uuidv4(),
      content: <img src={image7} alt="7" />,
    },
    {
      key: uuidv4(),
      content: <img src={image8} alt="8" />,
    },
    {
      key: uuidv4(),
      content: <img src={image9} alt="9" />,
    },
    {
      key: uuidv4(),
      content: <img src={image10} alt="10" />,
    },
  ].map((slide, index) => ({
    ...slide,
    onClick: () => setGoToSlide(index),
  }));

  return (
  <div className="carousel">
    <h1 className="carousel__title">Nos Spectacles </h1>
      <div className="carousel-container">
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={2}
          showNavigation={state.showNavigation}
          animationConfig={config.slow}
        />
      </div>
  </div>
  );
}

export default Slider;
