// == Import
import './header.scss';
import Navbar from 'src/components/Navbar';


// == Composant
function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Spectacles solidaire</h1>
      <Navbar />
    </div>
  );
}

// == Export
export default Header;
