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
  }
  return (
    <div className={hamburgerOpen ? 'navbar-open' : 'navbar'}>

    {/* menu icon - only visible in mobile version */}
      <div className='hamburger' onClick={toggleHamburger}>
        <Hamburger />
      </div>

     {/* menu items */}
     <ul className={hamburgerOpen ? 'ul-open' : 'ul-close'}>
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

    </div>
  );
}

// == Export
export default Navbar;
