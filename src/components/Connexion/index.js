// == Import
import './connexion.scss';

import { useState } from 'react';

// == Composant
function Connexion() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const [valueIn, setValueIN] = useState({
    email: '',
    password: '',
  });

  function handleChange(event) {
    setValueIN(event.target.value);
  }

  return (

    <div
      className={`container-form-connexion ${isActive ? 'right-panel-active' : null}`}
      id="container"
    >
      <div className="form-container sign-up-container">
        <form className="form-connexion" action="#">
          <h1 className="form-container-title">Créer un compte</h1>
          <input
            className="form-connexion-input"
            type="text"
            placeholder="Nom"
          />
          <input
            className="form-connexion-input"
            type="email"
            placeholder="Email"
          />
          <input
            className="form-connexion-input"
            type="password"
            placeholder="Mot de passe"
          />
          <button
            type="button"
            className="form-button"
          >S'enregistrer
          </button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form className="form-connexion" action="#">
          <h1 className="form-container-title">Se connecter</h1>
          <input
            className="form-connexion-input"
            type="email"
            placeholder="Email"
            value={valueIn.email}
            onChange={handleChange}
          />
          <input
            className="form-connexion-input"
            type="password"
            placeholder="Mot de passe"
          />
          <a className="form-link" href="#">
            Mot de passe oublié ?
          </a>
          <button type="button" className="form-button">Connexion</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="form-container-title">Content de te revoir !</h1>
            <p className="paragraphe">
              Pour rester en contact avec nous,
              veuillez vous connecter avec vos informations personnelles
            </p>
            <button
              type="button"
              className="form-button ghost"
              id="signIn"
              onClick={handleToggle}
            >
              Se connecter
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="form-container-title">Bienvenue !</h1>
            <p className="paragraphe">
              Entrez vos données personnelles et commencez votre voyage avec nous
            </p>
            <button
              type="button"
              className="form-button ghost"
              id="signUp"
              onClick={handleToggle}
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

// == Export
export default Connexion;
