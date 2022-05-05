// == Import : local
// Data
import {catalogData} from './CatalogData';
// Style
import './catalog.scss';

// == Composant
function Catalog() {

  return (
    <div className="catalog">
      {catalogData.map(show => 
        <>
         <div className='catalog__show'>
           <div className='catalog__show-poster'>{show.content}</div>
           <h2 className='catalog__show-title' key={show.name}>{`${show.name}`}</h2> 
         </div>
        </>,
      )}
    </div>
  );
}

// == Export
export default Catalog;






