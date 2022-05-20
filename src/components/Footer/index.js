// == Import
import './footer.scss';
import { NavLink } from 'react-router-dom';

// == Composant
function Footer() {
  return (
    <div className="footer">
      <NavLink className="footer-item" to="Contact">Contact</NavLink>
      <NavLink className="footer-item" to="Apropos">À propos</NavLink>
      <a href="https://www.instagram.com/mathildebeve/?hl=fr" className="footer-item" to="Instagram"><img alt="instagram-logo" src="../../assets/images/Model/images/instagram.png" />Suivez-nous sur Instagram</a>
    </div>
  );
}

// == Export
export default Footer;
