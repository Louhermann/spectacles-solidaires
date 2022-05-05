// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import About from 'src/components/About';
import Contact from 'src/components/Contact';
import Catalog from 'src/components/Catalog';
import Error404 from 'src/components/Error404';
import Connexion from 'src/components/Connexion';
import { Routes, Route } from 'react-router-dom';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Apropos" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Catalogue" element={<Catalog />} />
        <Route path="Connexion" element={<Connexion />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
