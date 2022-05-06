// == Import
import './footer.scss';
import { NavLink } from 'react-router-dom';

// == Composant
function Footer() {
  return (
    <div className="footer">
      <NavLink className="footer-item" to="Contact">Contact</NavLink>
      <NavLink className="footer-item" to="Apropos">À propos</NavLink>
    </div>
  );
}

// == Export
export default Footer;
