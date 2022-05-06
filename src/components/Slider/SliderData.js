// Import of Universally unique identifier for generate keys
import uuidv4 from 'uuid';

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

// eslint-disable-next-line import/prefer-default-export
export const sliderData = [
  {
    key: uuidv4(),
    content: <img className="carousel__picture" src={image1} alt="1" />,
  },
  {
    key: uuidv4(),
    content: <img className="carousel__picture" src={image2} alt="2" />,
  },
  {
    key: uuidv4(),
    content: <img className="carousel__picture" src={image3} alt="3" />,
  },
  {
    key: uuidv4(),
    content: <img className="carousel__picture" src={image4} alt="4" />,
  },
  {
    key: uuidv4(),
    content: <img className="carousel__picture" src={image5} alt="5" />,
  },
  {
    key: uuidv4(),
    content: <img className="carousel__picture" src={image6} alt="6" />,
  },
  {
    key: uuidv4(),
    content: <img className="carousel__picture" src={image7} alt="7" />,
  },
  {
    key: uuidv4(),
    content: <img className="carousel__picture" src={image8} alt="8" />,
  },
  {
    key: uuidv4(),
    content: <img className="carousel__picture" src={image9} alt="9" />,
  },
  {
    key: uuidv4(),
    content: <img className="carousel__picture" src={image10} alt="10" />,
  },
];
