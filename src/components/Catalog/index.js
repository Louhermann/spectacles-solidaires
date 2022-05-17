import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// == Import : local
// Data
// import catalogData from './CatalogData';
// Style
import './catalog.scss';

// == Composant
function Catalog() {
  const events = useSelector((state) => state.events);

  // const slugify = (str) => {
  //   const strr = str.toLowerCase()
  //     .trim()
  //     .replace(/[^\w\s-]/g, '')
  //     .replace(/[\s_-]+/g, '-')
  //     .replace(/^-+|-+$/g, '');
  //   return strr;
  // };

  return (
    <div className="catalog">
      <ul className="containers">
        {events.map((event) => (
          <li className="container_catalog" key={event.id}>
            <NavLink to={`spectacle/${event.id}`}>
              <div className="catalog__show-poster">
                <img className="catalog-images" src={event.picture_2} alt={`Poster ${event.title}`} />
              </div>
              <div className="container__overlapse">
                <div className="container__header">
                  <svg className="container__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <div className="container__header-text">
                    <h3 className="container__title">{event.title}</h3>
                    <span className="container__status">{event.age}</span>
                  </div>
                </div>
                <p className="container__description">{event.content}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

// == Export
export default Catalog;
