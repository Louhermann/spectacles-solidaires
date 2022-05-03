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
     <ul>
       <li>Accueil</li>
       <li>Spectacles</li>
       <li>Contact</li>
       <li>À propos</li>
     </ul>
     <div className='hamburger' onClick={toggleHamburger}>
       <Hamburger />
     </div>

     <style jsx>{`
       ul {
         display: ${hamburgerOpen ? 'inline' : 'none'};
       }
     `}

     </style>
    </div>
  );
}

// == Export
export default Navbar;
