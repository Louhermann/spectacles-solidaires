// == Import
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../actions';

// == Composant
function Navbar() {
  const isLogged = useSelector((state) => state.isLogged);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const dispatch = useDispatch();
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  function handleLogOut() {
    console.log('deco');
    dispatch(logOut(false));
  }
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
            { !isLogged
          && (
          <NavLink className="list-item" to="Connexion">
            <AiOutlineUser
              size="40px"
              title="se connecter"
              display="flex"
              text-align="-webkit-center"
              className="icon"
            />
            Se connecter
          </NavLink>
          )}
            { isLogged
          && (
          <>
            <AiOutlineUser
              size="40px"
              title="se connecter"
              display="flex"
              text-align="-webkit-center"
              className="icon"
            />
            <button
              className="button_logOut"
              type="button"
              onClick={handleLogOut}
            >
              Se Déconnecter
            </button>
          </>
          ) }
            {/* <NavLink className="list-item" to="Connexion">
              <AiOutlineUser
                size="40px"
                title="se connecter"
                display="flex"
                text-align="-webkit-center"
                className="icon"
              />
              { !isLogged ? 'Se connecter' : 'Se deconnecter'}
              { isLogged
              && (
              <button
                type="button"
                onClick={handleLogOut}
              >
                Se Déconnecter
              </button>
              )} */}

          </li>
        </ul>
      </nav>
    </div>
  );
}

// == Export
export default Navbar;
