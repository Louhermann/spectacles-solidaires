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
        <div className="show__left--video">
          <a href="" className="show__left--video--a"><BsYoutube /></a>
        </div>
        {/* age */}
        <div className="show__left--age">
          <p>de tel a tel age</p>
        </div>
        {/* title */}
        <div className="show__left__content">
          <h2 className="show__left__content--title">Titre</h2>
          <p className="show__left__content--desc">Ici sera la description
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptatibus quavelit
            aspernatur temporibus cupiditate harum. Nobis inventore voluptes error dolor quod, ullm
            nisi saepe vero recusandae neque quaerat magni laboriosam vit commodi eaque? Excepturs
            saepe aperiam in labore esse error a vitae suscipit inventore,laceat eos, molestiaeecto.
          </p>
          <p className="show__left__content--descItalic">Ici sera la description mais en italique !!!!</p>
        </div>
        {/* technique */}
        <div className="show__left__tech">
          <h3 className="show__left__tech--title">Technique</h3>
          <ul className="show__left__tech--list">
            <li>petite</li>
            <li>description</li>
            <li>technique</li>
          </ul>
        </div>
      </div>

      {/* div center */}
      <div className="show__center">
        {/* name of spectacle */}
        <ul className="show__center--categories">
          <li>Nom</li>
          <li>De</li>
          <li>La</li>
          <li>Categorie</li>
        </ul>
        <a className="show__center--tarif">+ d'infos et tarifs sur demande !</a>
        <img className="show__center--picture" src={image1} alt="1" />
      </div>

      {/* div right */}
      <div className="show__right">
        <img className="show__right" src={image2} alt="2" />
      </div>
      <p className="show__right--desc">
        petite description
      </p>
    </div>
  );
}

// == Export
export default Show;
