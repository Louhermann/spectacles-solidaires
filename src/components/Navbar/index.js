// == Import
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import './navbar.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../actions';

// == Composant
function Navbar() {
  const isLogged = useSelector((state) => state.isLogged);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  function handleLogOut() {
    dispatch(logOut(false));
    navigate('/Connexion');
  }

  return (
    <div className={hamburgerOpen ? 'navbar-open' : 'navbar'}>

      {/* menu icon - only visible in mobile version */}
      <div
        className="hamburger"
        onClick={toggleHamburger}
      >
        <Hamburger toggled={hamburgerOpen} />
      </div>
      <nav className={hamburgerOpen ? 'nav-open' : 'nav-close'}>
        {/* menu items */}
        <ul className={hamburgerOpen ? 'ul ul-open' : 'ul ul-close'}>
          <li className="li"><NavLink activeclassname="active" className="list-item" onClick={toggleHamburger} data-item="Accueil" to="/">Accueil</NavLink></li>
          <li className="li"><NavLink activeclassname="active" className="list-item" onClick={toggleHamburger} data-item="Catalogue" to="Catalogue">Catalogue</NavLink></li>
          <li className="li"><NavLink activeclassname="active" className="list-item" onClick={toggleHamburger} data-item="Contact" to="Contact">Contact</NavLink></li>
          <li className="li"><NavLink activeclassname="active" className="list-item" onClick={toggleHamburger} data-item="A propos" to="Apropos">À propos</NavLink></li>
          { !isLogged
          && (
          <li className="li login-item">
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
          </li>
          )}
          { isLogged
          && (
            <>

              <li className="li">
                <NavLink activeclassname="active" className="list-item" data-item="Profil" to="Profil">
                  Mon profil
                </NavLink>
              </li>
              <li className="li login-item">
                <NavLink className="list-item " to="Connexion">
                  <button
                    className="button_logOut"
                    type="button"
                    onClick={handleLogOut}
                  >
                    <AiOutlineUser
                      size="40px"
                      title="se connecter"
                      display="flex"
                      text-align="-webkit-center"
                      className="icon "
                    />
                    Se déconnecter
                  </button>
                </NavLink>
              </li>
            </>
          ) }

        </ul>
      </nav>
    </div>
  );
}

// == Export
export default Navbar;
