// == Import
import './hamburger.scss';

// == Composant
function hamburger() {
  return (
    <div className="hamburger">
    {/* menu icon - only visible in mobile version */}
     <div className='burger burger1'></div>
     <div className='burger burger2'></div>
     <div className='burger burger3'></div>
    </div>
  );
}

// == Export
export default hamburger;
