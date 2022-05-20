// == Import
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import About from 'src/components/About';
import Contact from 'src/components/Contact';
import Catalog from 'src/components/Catalog';
import Error404 from 'src/components/Error404';
import Connexion from 'src/components/Connexion';
import Show from 'src/components/Show';
import Profil from 'src/components/Profil';

import { saveData } from '../../actions';

// Style
import './styles.scss';

function App() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  const isLogged = useSelector((state) => state.isLogged);
  useEffect(
    () => {
      dispatch(saveData());
    },
    [],
  );

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Apropos" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Catalogue" element={<Catalog />} />
        <Route path="404" element={<Error404 />} />
        {events.map((event) => (
          <Route path="Catalogue/spectacle/:slug" key={event.id} element={<Show key={event.title} />} />
        ))};
        <Route path="*" element={<Navigate replace to="404" />} />
        {!isLogged
          ? <Route path="Connexion" element={<Connexion />} />
          : (
            <>
              <Route path="Profil" element={<Profil />} />
              <Route path="Connexion" element={<Navigate to="/Profil" />} />
            </>
          )}

      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
