// == Import
import './header.scss';

// == Composant
function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Spectacles solidaire</h1>
      <nav className="header-navbar">
        <a href="">Accueil</a>
        <a href="">Spectacles</a>
        <a href="">Contact</a>
        <a href="">À propos</a>
      </nav>
    </div>
  );
}

// == Export
export default Header;
