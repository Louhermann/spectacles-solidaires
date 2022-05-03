// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

// == Export
export default App;
