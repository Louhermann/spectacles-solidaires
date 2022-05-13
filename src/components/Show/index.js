// == Import
import './show.scss';
import { BsYoutube } from 'react-icons/bs';
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



// == Composant
function Show() {
  const events = useSelector((state) => state.events);
  console.log(events);

  const { slug } = useParams();
  console.log({slug});


  const show = useSelector((state) => findShow(events, slug));

  return (
    <div className="show">
      {/* div left */}
      <div className="show__left">
        {/* here the video */}
        <div className="show__left__container">
          <div className="show__left__container--video">
            <a href="" className="show__left__container--video--logo">
              <BsYoutube />
            </a>
          </div>
          {/* age */}
          <div className="show__left__container--age">
            <p className="show__left__container--age--text">{events.age}</p>
          </div>
        </div>
        {/* title */}
        <div className="show__left__content">
          <h2 className="show__left__content--title">Les Reprisseuses de l'Ouest</h2>
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
        <div className="show__center__middle">
          <a className="show__center__middle--contact" href="#">Contactez-nous</a>
          <p className="show__center__middle--subtext">pour plus d'infos et tarifs !</p>
        </div>
        {/* <img className="show__center--picture" src={image2} alt="1" /> */}
      </div>

      {/* div right */}
      <div className="show__right">
        <div className="show__right--back">
          {/* <img className="show__right--picture" src={image1} alt="2" /> */}
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

