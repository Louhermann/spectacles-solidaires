// == Import
import './footer.scss';
import { NavLink } from 'react-router-dom';
import insta from '../../assets/images/Model/images/instagram.png';

// == Composant
function Footer() {
  return (
    <div className="footer">
      <NavLink className="footer-item" to="Contact">Contact</NavLink>
      <NavLink className="footer-item" to="Apropos">À propos</NavLink>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mathildebeve/?hl=fr" className="footer-item footer-link" to="Instagram">
        <img className="insta-logo" alt="instagram-logo" src={insta} />Suivez-nous sur Instagram
      </a>
    </div>
  );
}

// == Export
export default Footer;
