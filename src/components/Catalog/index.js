import { NavLink } from 'react-router-dom';
// == Import : local
// Data
import { NavLink } from 'react-router-dom';
import catalogData from './CatalogData';
// Style
import './catalog.scss';

// == Composant
function Catalog() {
  return (
    <div className="catalog">
      {/* {catalogData.map(show =>
        <>
         <NavLink to="Show" className='catalog__show'>
           <div className='catalog__show-poster'>{show.content}</div>
           <h2 className='catalog__show-title' key={show.name}>{`${show.name}`}</h2>
         </NavLink>
        </>,

        )} */}

      <ul className="containers">
        {catalogData.map((show) => (
          <li className="container" key={show.id}>
            <NavLink to="spectacle">
              <div className="catalog__show-poster">
                {show.content}
              </div>
              <div className="container__overlapse">
                <div className="container__header">
                  <svg className="container__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <div className="container__header-text">
                    <h3 className="container__title">{`${show.name}`}</h3>
                    <span className="container__status">À partir de 3 ans</span>
                  </div>
                </div>
                <p className="container__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </NavLink>
          </li>
        ))};
      </ul>
    </div>
  );
}

// == Export
export default Catalog;
