// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Slider from 'src/components/Slider';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Slider />
      <Footer />
    </div>
  );
}

// == Export
export default App;
