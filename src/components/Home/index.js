// Import styles
import './home.scss';
import Slider from 'src/components/Slider';

// == Img

function Home() {
  return (
    <>
      <div className="home">
        {/* <h1 className="home__title ">Description du site</h1> */}
        <p className="home__text">
          Tous les ans, de nombreux organismes publics et privés organisent des temps culturels pour
          faire découvrir des spectacles vivants à un public. Ces évènements sont pour certains
          ouverts à  tous, d'autres destinés à un public ciblé ou privé.
        </p>
        <p className="home__text">
          La vocation de spectacles solidaire part d'un constat : comme dans beaucoup de secteurs,
          certains publics sont privilégiés par rapport à d'autres.
          Les budgets très différents créént de l’inégalité entre les publics.
        </p>
        <p className="home__text">
          La mission des spectacles solidaires est de développer l’accès
          à la culture auprès de tous, qu’ils puissent la partager et s’entraider.
        </p>

      </div>
      <div>
        <Slider />
      </div>
    </>
  );
}

export default Home;
