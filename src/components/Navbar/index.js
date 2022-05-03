// == Import
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import './navbar.scss';

// == Composant
function Navbar() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
     setHamburgerOpen(!hamburgerOpen);
  }
  return (
    <div className="navbar">

    {/* menu icon - only visible in mobile version */}
      <div className='hamburger' onClick={toggleHamburger}>
        <Hamburger />
      </div>

     {/* menu items */}
     <ul>
       <li>Accueil</li>
       <li>Spectacles</li>
       <li>Contact</li>
       <li>À propos</li>
     </ul>



     {/* to display the burger menu only in mobile version */}
     {/* TODO : find a way to do this in the scss file */}
     {/* TODO : add transition for prettier result */}

     <style jsx>{`
     @media (max-width: 767px) {
       .navbar {
         height: ${hamburgerOpen ? '100vh' : '50px'};
       }
       .navbar ul {
         display: ${hamburgerOpen ? 'flex' : 'none'};
         flex-direction: ${hamburgerOpen ? 'column' : 'row'};
         justify-content: ${hamburgerOpen ? 'space-around' : 'none'};
         height :  ${hamburgerOpen ? '100%' : '50px'};
       }
       }
     `}

     </style>
    </div>
  );
}

// == Export
export default Navbar;
