// styles
import './about.scss';

function About() {
  return (
    <>
      <h2 className="section-title">
        Les acteurs concernés
      </h2>
      <section className="actors">
        <div className="actors-card">
          <div className="actors-box">
            <div className="actors-box-content">
              <h3 className="actors-box-content-title">
                Organismes aidants
              </h3>
              <p className="actors-box-content-p">
                <span>
                &nbsp; Tout organisme privé ou public
                  souhaitant faire intervenir un spectacle
                  vivant peux aider. &nbsp;
                </span>
              </p>
              <p className="actors-box-content-p">
                Si vous avez un budget
                qui permet de faire intervenir deux
                représentations d'un spectacle vivants
                vous pouvez être un organisme AIDANT
                du concept "spectacles solidaires".
              </p>
            </div>
          </div>
        </div>

        <div className="actors-card">
          <div className="actors-box">
            <div className="actors-box-content">
              <h3 className="actors-box-content-title">
                Organismes aidés
              </h3>
              <p className="actors-box-content-p">
                Les spectacles solidaires seront en
                partenariat avec différentes
                <span>
                &nbsp; associations
                  solidaires caritatives &nbsp;
                </span>
                destinées à un public
                n'ayant pas accès (ou très peu) aux
                spectacles vivants.
              </p>
              <p className="actors-box-content-p">
                Ces structures seront
                les acteurs principaux AIDÉS.
              </p>
            </div>
          </div>
        </div>

        <div className="actors-card">
          <div className="actors-box">
            <div className="actors-box-content">
              <h3 className="actors-box-content-title">
                Spectacles vivants
              </h3>
              <p className="actors-box-content-p">
                "Les spectacles solidaires" ouvrent un
                partenariat avec des
                <span>
                &nbsp; compagnies de
                  théâtres et des artistes indépendants &nbsp;
                </span> qui
                proposent des spectacles vivants originaux
                et de tous horizons pour petits et grands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <h2 className="section-title">Comment ça marche ? </h2>
      <section className="process">
        <div className="process-card">
          <div className="process-box">
            <div className="process-box-content">
              <h2 className="process-box-content-number">01</h2>
              <h3 className="process-box-content-title">Étape 1</h3>
              <p className="process-box-content-p">
                Une structure organisatrice nous contacte pour faire intervenir un
                spectacle de notre catalogue lors de son événement.
              </p>
              <p className="actors-box-content-p">
                Elle choisit (ou
                non) de financer ce même spectacle (sous forme de mécénat) pour
                qu'une de nos structures caritatives partenaires puisse elle aussi
                accueillir ce spectacle.
              </p>
              <p className="actors-box-content-p">
                Il est aussi possible de simplement financer le
                spectacle pour une seule représentation solidaire.
              </p>
              <a className="process-box-content-a" href="#">En savoir plus</a>
            </div>
          </div>
        </div>

        <div className="process-card">
          <div className="process-box">
            <div className="process-box-content">
              <h2 className="process-box-content-number">02</h2>
              <h3 className="process-box-content-title">Étape 2</h3>
              <p className="process-box-content-p">
                La structure organisatrice souhaite financer deux spectacles (pour elle
                et pour un de nos partenaires caritatif).
              </p>
              <p className="actors-box-content-p">
                Nous organisons la venue du
                spectacle auprès des deux structures et nous occupons de toute la
                partie administrative
              </p>
              <a className="process-box-content-a" href="#">En savoir plus</a>
            </div>
          </div>
        </div>

        <div className="process-card">
          <div className="process-box">
            <div className="process-box-content">
              <h2 className="process-box-content-number">03</h2>
              <h3 className="process-box-content-title">Étape 3</h3>
              <p className="process-box-content-p">
                Expliquer la démarche du mécénat, comment cela est défiscalisé et
                comment toutes les structures peuvent aussi simplement financer un
                spectacle solidaire pour les associations caritatives
              </p>
              <a className="process-box-content-a" href="#">En savoir plus</a>
            </div>
          </div>
        </div>

        <div className="process-card">
          <div className="process-box">
            <div className="process-box-content">
              <h2 className="process-box-content-number">04</h2>
              <h3 className="process-box-content-title">Étape 4</h3>
              <p className="process-box-content-p">
                Les représentations ont lieu, vous n'avez fait que des heureux ; public,
                artistes, organisateurs.
              </p>
              <a className="process-box-content-a" href="#">En savoir plus</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
