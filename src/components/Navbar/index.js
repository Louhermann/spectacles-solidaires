// == Import
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
// const isLogged = useSelector((state) => state.isLogged);

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
      <nav className={hamburgerOpen ? 'nav-open' : 'nav-close'}>
        {/* menu items */}
        <ul className={hamburgerOpen ? 'ul ul-open' : 'ul ul-close'}>
          <li className="li"><NavLink activeclassname="active" className="list-item" data-item="Accueil" to="/">Accueil</NavLink></li>
          <li className="li"><NavLink activeclassname="active" className="list-item" data-item="Catalogue" to="Catalogue">Catalogue</NavLink></li>
          <li className="li"><NavLink activeclassname="active" className="list-item" data-item="Contact" to="Contact">Contact</NavLink></li>
          <li className="li"><NavLink activeclassname="active" className="list-item" data-item="A propos" to="Apropos">À propos</NavLink></li>
          <li className=" li login-item">
            <NavLink className="list-item" data-item="" to="Connexion">
              <AiOutlineUser
                size="40px"
                title="se connecter"
                display="flex"
                text-align="-webkit-center"
                className="icon"
              />
              {/* { !isLogged ?  'Se connecter' : 'Se deconnecter'} */}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// == Export
export default Navbar;
