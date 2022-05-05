// == Import
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import './navbar.scss';
import { NavLink } from 'react-router-dom';

// == Composant
function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className={hamburgerOpen ? 'navbar-open' : 'navbar'}>

      {/* menu icon - only visible in mobile version */}
      <div
        className="hamburger"
        onClick={toggleHamburger}
      >
        <Hamburger />
      </div>

      {/* menu items */}
      <ul className={hamburgerOpen ? 'ul-open' : 'ul-close'}>
        <li><NavLink to="/">Accueil</NavLink></li>
        <li><NavLink to="Catalogue">Catalogue</NavLink></li>
        <li><NavLink to="Contact">Contact</NavLink></li>
        <li><NavLink to="Apropos">A propos</NavLink></li>
        <li>
          <NavLink to="Connexion">
            <AiOutlineUser
              size="40px"
              title="se connecter"
              display="flex"
              text-align="-webkit-center"
            />
            Se connecter
          </NavLink>
        </li>
      </ul>

    </div>
  );
}

// == Export
export default Navbar;
