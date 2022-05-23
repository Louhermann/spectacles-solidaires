// styles
import './about.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function About() {
  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);

  const toggleClassOne = () => {
    setActive1(!isActive1);
  };

  const toggleClassTwo = () => {
    setActive2(!isActive2);
  };

  const toggleClassThree = () => {
    setActive3(!isActive3);
  };

  return (
    <>
      <div className="about">

        <h2 className="about_title">
          Rendons la culture accessible à tous !
        </h2>
        <section className="about_actors">

          <div className="about_actors_image" />
          <h2 className="about_title">Les acteurs</h2>

          <button
            type="button"
            className={isActive1 ? 'about_actors_list-title about_actors_accordion about_actors_active' : 'about_actors_list-title about_actors_accordion'}
            onClick={toggleClassOne}
          >
            Organisme aidant
          </button>

          <div
            className="about_actors_panel"
            style={{
              display: isActive1 ? 'block' : 'none',
            }}
          >
            <p className="about_actors_list-content">
              Tout organisme ayant un budget et souhaitant programmer un spectacle dans sa
              structure, peut choisir de financer une seconde représentation de ce
              spectacle, qui aura lieu dans une de nos associations caritatives partenaires.

            </p>
            <p className="about_actors_list-content">
              Si c'est le cas, votre organisme devient organisme aidant
              au sein du concept "spectacles solidaires".
            </p>
            <h2 className="about_actors_list-subtitle">
              Qui est concerné?
            </h2>
            <p className="about_actors_list-content">
              <span className="about_actors_list-content_span">
                &nbsp;Tout organisme privé ou public
                souhaitant faire intervenir un spectacle
                vivant peux aider.&nbsp;
              </span>
            </p>
          </div>

          <button
            type="button"
            className={isActive2 ? 'about_actors_list-title about_actors_accordion about_actors_active' : ' about_actors_list-title about_actors_accordion'}
            onClick={toggleClassTwo}
          >
            Organisme aidé
          </button>
          <div
            className="about_actors_panel"
            style={{
              display: isActive2 ? 'block' : 'none',
            }}
          >
            <p className="about_actors_list-content">
              Les organismes aidés sont des
              <span className="about_actors_list-content_span">
                &nbsp;associations
                solidaires caritatives&nbsp;
              </span>
              en partenariat avec les spectacles solidaires.
            </p>

            <p className="about_actors_list-content">
              Grâce aux organimes aidants, elles bénéficient d'une représentation d'un
              spectacle et touchent un public n'ayant habituellement pas (ou très peu) accès aux
              spectacles vivants.
            </p>

            <h2 className="about_actors_list-subtitle">
              Qui est concerné?
            </h2>
            <p className="about_actors_list-content">
              <span className="about_actors_list-content_span">
                &nbsp;Toute associations ayant un public n'ayant pas ou peu accès aux spectacles
                vivants peut devenir partenaire du concept "spectacles solidaires".&nbsp;
              </span>
            </p>
          </div>

          <button
            type="button"
            className={isActive3 ? 'about_actors_list-title about_actors_accordion about_actors_active' : ' about_actors_list-title accordion about_actors_accordion'}
            onClick={toggleClassThree}
          >
            Spectacles vivants
          </button>
          <div
            className="about_actors_panel"
            style={{
              display: isActive3 ? 'block' : 'none',
            }}
          >
            <p className="about_actors_list-content">
              "Les spectacles solidaires" ouvrent un
              partenariat avec des
              <span className="about_actors_span">
                &nbsp;compagnies de
                théâtres et des artistes indépendants&nbsp;
              </span>qui
              proposent des spectacles vivants originaux
              et de tous horizons pour petits et grands.
            </p>
            <h2 className="about_actors_list-subtitle">
              Qui est concerné?
            </h2>
            <p className="about_actors_list-content">
              <span className="about_actors_span">
                &nbsp;Toute compagnie de
                théâtre et  artiste indépendant ayant à coeur de diffuser ses
                spectacle à un public varié et nottament à ceux qui n'ont habituellement
                pas accès aux spectacles vivants peut devenir partenaire du concept "spectacle
                solidaire".&nbsp;
              </span>
            </p>
          </div>

        </section>

        <h2 className="about_title">Comment ça marche?</h2>
        <section className="about_process">
          <div className="about_process-card">
            <div className="about_process-box">
              <div className="about_process-box-content">
                <h2 className="about_process-box-content-number">01</h2>
                <h3 className="about_process-box-content-title">Étape 1</h3>
                <p className="about_process-box-content-p">
                  Une structure nous contacte pour faire intervenir un
                  spectacle de notre catalogue lors de son événement.
                </p>
                <p className="about_process-box-content-p">
                  Elle peut choisir de financer ce même spectacle (sous forme de mécénat) pour
                  qu'une de nos structures caritatives partenaires puisse elle aussi
                  accueillir ce spectacle.
                </p>
                <Link to="/Contact" className="about_process-box-content-a">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>

          <div className="about_process-card">
            <div className="about_process-box">
              <div className="about_process-box-content">
                <h2 className="about_process-box-content-number">02</h2>
                <h3 className="about_process-box-content-title">Étape 2</h3>
                <p className="about_process-box-content-p">
                  La structure organisatrice souhaite financer deux spectacles (pour elle
                  et pour un de nos partenaires caritatif).
                </p>
                <p className="about_process-box-content-p">
                  Nous organisons la venue du
                  spectacle auprès des deux structures et nous occupons de toute la
                  partie administrative
                </p>
              </div>
            </div>
          </div>

          <div className="about_process-card">
            <div className="about_process-box">
              <div className="about_process-box-content">
                <h2 className="about_process-box-content-number">03</h2>
                <h3 className="about_process-box-content-title">Étape 3</h3>
                <p className="about_process-box-content-p">
                  Si la structure organisatrice souhaite financer un spectacle pour un de nos
                  partenaires caritatif, elle peut bénéficier d'une réduction d'imposition sur
                  le spectacle à portée solidaire (celui au bénéfice de l'association caritative).
                </p>
                <p className="about_process-box-content-p">
                  Si la structure ne souhaite pas accueillir de spectacle mais uniquement
                  en financer un pour
                  une association caritative, cela est également possible.
                </p>
                <a className="about_process-box-content-a" href="https://www.culture.gouv.fr/Thematiques/Mecenat/Qu-est-ce-que-le-mecenat" target="_blank" rel="noreferrer">En savoir plus sur le mécénat</a>
              </div>
            </div>
          </div>

          <div className="about_process-card">
            <div className="about_process-box">
              <div className="about_process-box-content">
                <h2 className="about_process-box-content-number">04</h2>
                <h3 className="about_process-box-content-title">Étape 4</h3>
                <p className="about_process-box-content-p">
                  Les représentations ont lieu, vous n'avez fait que des heureux ; public,
                  artistes, organisateurs.
                </p>
                <Link to="/Catalogue" className="about_process-box-content-a">
                  Découvrir notre catalogue de spectacles
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* </div> */}
    </>
  );
}

export default About;
