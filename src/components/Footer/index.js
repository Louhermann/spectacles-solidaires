// == Import
import './footer.scss';
import { NavLink } from 'react-router-dom';

// == Composant
function Footer() {
  return (
    <div className="footer">
      <NavLink to="Contact">Contact</NavLink>
      <NavLink to="Apropos">A propos</NavLink>
    </div>
  );
}

// == Export
export default Footer;
