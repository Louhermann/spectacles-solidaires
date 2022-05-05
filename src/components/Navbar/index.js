// == Import
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import './navbar.scss';

// == Composant
function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="navbar">

      {/* menu icon - only visible in mobile version */}
      <div
        className="hamburger"
        onClick={toggleHamburger}
      >
        <Hamburger />
      </div>

      {/* menu items */}
      <ul>
        <li>Accueil</li>
        <li>Spectacles</li>
        <li>Contact</li>
        <li>À propos</li>
        <li>
          <AiOutlineUser
            size="40px"
            title="se connecter"
          />
          Se connecter
        </li>
      </ul>

      {/* to display the burger menu only in mobile version */}
      {/* TODO : find a way to do this in the scss file */}
      {/* TODO : add transition for prettier result */}

      <style jsx="true">{`
     @media (max-width: 650px) {
       .navbar {
         height: ${hamburgerOpen ? 'fit-content' : '50px'};
         border-top : ${hamburgerOpen ? '2px dotted black' : 'none'};
         border-bottom : ${hamburgerOpen ? '2px dotted black' : 'none'};
       }
       .navbar ul {
         display: ${hamburgerOpen ? 'flex' : 'none'};
         flex-direction: ${hamburgerOpen ? 'column' : 'row'};
         justify-content: ${hamburgerOpen ? 'space-around' : 'none'};
         height :  ${hamburgerOpen ? '100%' : '50px'};
         transition: ${hamburgerOpen ? '1s max-height 0.3s;' : ''};
       }

       .navbar li { 
         padding: ${hamburgerOpen ? '1rem' : 'none'};
       }
       }
     `}

      </style>
    </div>
  );
}

// == Export
export default Navbar;
