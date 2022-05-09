// == Import
import './show.scss';
import { BsYoutube } from 'react-icons/bs';
import image1 from '../../assets/images/Artichocolat/Artichocolat.jpg';
import image2 from '../../assets/images/Artichocolat/Artichocolat_mini.jpg';
// == Composant
function Show() {
  return (
    <div className="show">
      {/* div left */}
      <div className="show__left">
        {/* here the video */}
        <div className="show__left--container">
          <div className="show__left--video">
            <a href="" className="show__left--video--logo">
              <BsYoutube />
            </a>
          </div>
          {/* age */}
          <div className="show__left--age">
            <p>de 2 à 6 ans - 30min</p>
          </div>
        </div>
        {/* title */}
        <div className="show__left__content">
          <h2 className="show__left__content--title">Les reprisseuses de l'ouest</h2>
          <p className="show__left__content--desc">Ici sera la description
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptatibus quavelit
            aspernatur temporibus cupiditate harum. Nobis inventore voluptes error dolor quod, ullm
            nisi saepe vero recusandae neque quaerat magni laboriosam vit commodi eaque? Excepturs
            saepe aperiam in labore esse error a vitae suscipit inventore,laceat eos, molestiaeecto.
          </p>
          <p className="show__left__content--descItalic">Ici sera la description mais en italique !!!! Ici sera la description mais en italique !!!! Ici sera la description mais en italique !!!! Ici sera la description mais en italique !!!!</p>
        </div>
        {/* technique */}
        <div className="show__left__tech">
          <h3 className="show__left__tech--title">Technique</h3>
          <ul className="show__left__tech--list">
            <li>Espace Scénique : 5m X 4m</li>
            <li>Adaptable au lieu (intérieur/extérieur)</li>
            <li>Montage 30 min / démontage 15 min</li>
          </ul>
        </div>
      </div>

      {/* div center */}
      <div className="show__center">
        {/* name of spectacle */}
        <ul className="show__center--categories">
          <li className="show__center--categories--li">Différence</li>
          <li className="show__center--categories--li">Conte</li>
          <li className="show__center--categories--li">Danse</li>
          <li className="show__center--categories--li">Musique</li>
        </ul>
        <div>
          <a className="show__center--contact" href="#">Contactez-nous</a>
          <p className="show__center--subtext">pour plus d'infors et tarifs !</p>
        </div>
        <img className="show__center--picture" src={image2} alt="1" />
      </div>

      {/* div right */}
      <div className="show__right">
        <div className="show__right--back">
          <img className="show__right--picture" src={image1} alt="2" />
          <p className="show__right--desc">
            + atelier enfant 1h
          </p>

        </div>
      </div>
    </div>
  );
}

// == Export
export default Show;
