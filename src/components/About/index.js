// styles
import './about.scss';

function About() {
  return (
    <div className="about">
      <h2 className="about_title">
        La portée solidaire de notre projet 
      </h2>
      <section className="about_actors">
      <div className="about_actors_image"></div>
      <ul className="about_actors_list">
        <li className="about_actors_list-item">
          <h3 className="about_actors_list-title">
            Organismes aidants
          </h3>
          <p className="about_actors_list-content">
            Tout organisme ayant un budget et souhaitant programmer un spectacle dans sa structure, peut choisir de financer une seconde représentation de ce spectacle, qui aura lieu dans une de nos associations caritatives partenaires.
          </p>
          <p className="about_actors_list-content">
            Si c'est le cas, votre organisme devient organisme AIDANT au sein du concept "spectacles solidaires".
           </p>
          <h2 className="about_actors_list-subtitle">
            Qui est concerné ? 
          </h2>
          <p className="about_actors_list-content"> 
              <span>
              &nbsp; Tout organisme privé ou public
                  souhaitant faire intervenir un spectacle
                  vivant peux aider. &nbsp;
              </span>
          </p> 
        </li>

        <li className="about_actors_list-item">
          <h3 className="about_actors_list-title">
          Organismes aidés
          </h3>
          <p className="about_actors_list-content">
          Les organismes aidés sont des 
                <span>
                &nbsp; associations
                  solidaires caritatives &nbsp;
                </span> 
                en partenariat avec les spectacles solidaires.
           </p>

           <p className="about_actors_list-content">
                Grâce aux organimes aidants, elles bénéficient d'une représentation d'un spectacle et touchent un public n'ayant habituellement pas (ou très peu) accès aux spectacles vivants.
              </p>

          <h2 className="about_actors_list-subtitle">
            Qui est concerné ? 
          </h2>
          <p className="about_actors_list-content">
              <span>
              &nbsp; Toute associations ayant un public n'ayant pas ou peu accès aux spectacles vivants peut devenir partenaire du concept "spectacles solidaires". &nbsp;
              </span>     
          </p>
        </li>

        <li className="about_actors_list-item">
          <h3 className="about_actors_list-title">
          Les spectacles vivants
          </h3>
          <p className="about_actors_list-content">
          "Les spectacles solidaires" ouvrent un
                partenariat avec des
                <span>
                &nbsp; compagnies de
                  théâtres et des artistes indépendants &nbsp;
                </span> qui
                proposent des spectacles vivants originaux
                et de tous horizons pour petits et grands.
           </p>
          <h2 className="about_actors_list-subtitle">
            Qui est concerné ? 
          </h2>
          <p className="about_actors_list-content">
              <span>
              &nbsp; Toute compagnie de
                  théâtre et  artiste indépendant ayant à coeur de diffuser ses spectacle à un public varié et nottament à ceux qui n'ont habituellement pas accès aux spectacles vivants peut devenir partenaire du concept "spectacle solidaire". &nbsp;
              </span>
          </p> 
        </li>

      </ul>

      </section>

      </div> 


/* 

        <div className="about_actors-card">
          <div className="about_actors-box">
            <div className="about_actors-box-content">
              <h3 className="about_actors-box-content-title">
              Organismes aidés
              </h3>
              <p className="about_actors-box-content-p">
                Les organismes aidés sont des 
                <span>
                &nbsp; associations
                  solidaires caritatives &nbsp;
                </span> 
                en partenariat avec les spectacles solidaires.
              </p>
              
              <p className="about_actors-box-content-p">
                Grâce aux organimes aidants, elles bénéficient d'une représentation d'un spectacle et touchent un public n'ayant habituellement pas (ou très peu) accès aux spectacles vivants.
              </p>
            </div>
          </div>
        </div>

        <div className="about_actors-card">
          <div className="about_actors-box">
            <div className="about_actors-box-content">
              <h3 className="about_actors-box-content-title">
              Organismes aidés
              </h3>
              <p className="about_actors-box-content-p">
                Les organismes aidés sont des 
                <span>
                &nbsp; associations
                  solidaires caritatives &nbsp;
                </span> 
                en partenariat avec les spectacles solidaires.
              </p>
              
              <p className="about_actors-box-content-p">
                Grâce aux organimes aidants, elles bénéficient d'une représentation d'un spectacle et touchent un public n'ayant habituellement pas (ou très peu) accès aux spectacles vivants.
              </p>
            </div>
          </div>
        </div>

        <div className="about_actors-card">
          <div className="about_actors-box">
            <div className="about_actors-box-content">
              <h3 className="about_actors-box-content-title">
                Organismes aidés
              </h3>
              <p className="about_actors-box-content-p">
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
              <p className="about_actors-box-content-p">
                Ces structures seront
                les acteurs principaux AIDÉS.
              </p>
            </div>
          </div>
        </div>

        <div className="about_actors-card">
          <div className="about_actors-box">
            <div className="about_actors-box-content">
              <h3 className="about_actors-box-content-title">
                Spectacles vivants
              </h3>
              <p className="about_actors-box-content-p">
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
      {/* </section>  */

      /* <h2 className="section-title">Comment ça marche ? </h2>
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
        </div> */
      /* </section>  */
  );
}

export default About;
