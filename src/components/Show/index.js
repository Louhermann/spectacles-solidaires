// == Import
import './show.scss';
import { BsYoutube } from 'react-icons/bs';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// == Composant
function Show() {
  const events = useSelector((state) => state.events);
  const { slug } = useParams();
  const event = events.find((show) => show.id === parseInt(slug, 10));

  return (
    <div className="show">
      {/* div left */}
      <div className="show__left">
        {/* here the video */}
        <div className="show__left__container">
          <div className="show__left__container--video">
            <a className="show__left__container--video--logo" href={event.link_video} target="_blank" rel="noreferrer">
              <BsYoutube />
            </a>
          </div>
          {/* age */}
          <div className="show__left__container--age">
            <p className="show__left__container--age--text">{event.age}</p>
          </div>
        </div>
        {/* title */}
        <div className="show__left__content">
          <h2 className="show__left__content--title">{event.title}</h2>
          <p className="show__left__content--desc">{event.content}
          </p>
          <p className="show__left__content--descItalic">{event.content_2}</p>
        </div>
        {/* technique */}
        <div className="show__left__tech">
          <h3 className="show__left__tech--title">Technique</h3>
          <ul className="show__left__tech--list">
            <li>{event.technique_1}</li>
            <li>{event.technique_2}</li>
            <li>{event.technique_3}</li>
          </ul>
        </div>
      </div>

      {/* div center */}
      <div className="show__center">
        {/* name of spectacle */}
        <ul className="show__center--categories">
          {event.category.map((cat) => (
            <li className="show__center--categories--li" key={cat.name}>{cat.name}</li>
          ))}
        </ul>
        <div className="show__center__middle">
          <Link to="/Contact" className="show__center__middle--contact">
            Contactez-nous
          </Link>
          <p className="show__center__middle--subtext">pour plus d'infos et tarifs !</p>
        </div>
        <img className="show__center--picture" src={event.picture_1} alt="1" />
      </div>

      {/* div right */}
      <div className="show__right">
        <div className="show__right--back">
          <img className="show__right--picture" src={event.picture_2} alt="2" />
          <p className="show__right--desc">
            {event.bonus_1}
          </p>
          <p className="show__right--desc">
            {event.bonus_2}
          </p>

        </div>
      </div>
    </div>
  );
}

// == Export
export default Show;
