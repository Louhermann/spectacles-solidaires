// == npm
import { Zoom } from 'react-slideshow-image';

// == Import
import './slider.scss';

// == Image
// import image0 from '../../assets/images/Les Mains Bavardeuses/Les_mains_Bavardeuses.jpg';
import image1 from '../../assets/images/Artichocolat/Artichocolat.jpg';
import image2 from '../../assets/images/La note magique/La_note_magique.jpg';
import image3 from '../../assets/images/Le murmure de la mer/Le_murmure_de_la_mer.jpg';
import image4 from '../../assets/images/Les défis et Enigmes/Les_défis.jpg';
import image5 from '../../assets/images/Les Experiences Spectaculaires/Les_expériences_S.jpg';
import image6 from '../../assets/images/Les Mains Bavardeuses/Les_mains_Bavardeuses.jpg';
import image7 from '../../assets/images/Nouveau dossier/Badou.jpg';
import image8 from '../../assets/images/Les repriseuses de l_ouest/Les repriseuses.jpg';
import image9 from '../../assets/images/Nekolo/Nekolo.jpg';
import image10 from '../../assets/images/Petite ombre/Petite_ombre.jpg';
import image11 from '../../assets/images/Sur le port de chine/Sur_le_port.jpg';

const images = [
  // image0
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

// == Composant
function Slider() {
  return (
    <div className="slider-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img className="slider-container-img" style={{ height: '50%', width: '100%' }} key={index} src={each} alt="" />
        ))}
      </Zoom>
    </div>
  );
}

// == Export
export default Slider;
