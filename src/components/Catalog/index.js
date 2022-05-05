// == Import : local
// Data
import {catalogData} from './CatalogData';
// Style
import './catalog.scss';
import { NavLink } from 'react-router-dom';


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

        {catalogData.map(show => 
        <ul className="cards">
  <li>
    <a href="" className="card">

      <div className='catalog__show-poster'>{show.content}</div>
      <div className="card__overlay">
        <div className="card__header">
        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
          <div className="card__header-text">
            <h3 className="card__title">{`${show.name}`}</h3>            
            <span className="card__status">À partir de 3 ans</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>
  </ul>
  

      )}

     

    </div>
  );
}

// == Export
export default Catalog;






