// /* eslint-disable react/jsx-indent */

// Import npm
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import { setGoToSlide } from '../../actions';

// Import style
import './slider.scss';

function Slider() {
  const dispatch = useDispatch();
  const isTrue = true;
  const events = useSelector((state) => state.events);
  const goToSlide = useSelector((state) => state.slider.goToSlide);

  const slide = (events.map((event, index) => (
    {
      key: event.id,
      content: <img src={event.picture_2} alt={event.title} />,
      onClick: () => dispatch(setGoToSlide(index)),
    }
  ))
  );

  return (
    <div className="carousel">
      <h1 className="carousel__title">Nos Spectacles </h1>
      <div className="carousel-container">
        <Carousel
          slides={slide}
          goToSlide={goToSlide}
          offsetRadius={2}
          showNavigation={isTrue}
          animationConfig={config.gentle}
        />
      </div>
    </div>
  );
}

export default Slider;
