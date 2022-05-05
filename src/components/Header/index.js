// == Import
import './header.scss';
import Navbar from 'src/components/Navbar';

// == Composant
function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Spectacles solidaires</h1>
      <Navbar />
    </div>
  );
}

// == Export
export default Header;
