// == Import
import './connexion.scss';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSignIn, setSignUp, login } from '../../actions';

// == Composant
function Connexion() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const dispatch = useDispatch();

  function handleChangeSignUp(event) {
    dispatch(setSignUp(event.target.value, event.target.name));
  }

  function handleChangeSignIn(event) {
    dispatch(setSignIn(event.target.value, event.target.name));
  }

  function handleSubmitSignIn(evt) {
    evt.preventDefault();
    dispatch(login());
    console.log('submit');
  }

  function handleSubmitSignUp(evt) {
    evt.preventDefault();
    console.log('enregistré');
  }

  const valueSignUpEmail = useSelector((state) => state.signUp.email);
  const valueSignUpPassword = useSelector((state) => state.signUp.password);
  const valueSignUpName = useSelector((state) => state.signUp.lastname);
  const valueSignInPassword = useSelector((state) => state.signIn.password);
  const valueSignInEmail = useSelector((state) => state.signIn.username);

  return (

    <div
      className={`container-form-connexion ${isActive ? 'right-panel-active' : null}`}
      id="container"
    >
      <div className="form-container sign-up-container">
        <form
          className="form-connexion"
          onSubmit={handleSubmitSignUp}
        >
          <h1 className="form-container-title">Créer un compte</h1>
          <input
            name="lastName"
            className="form-connexion-input"
            type="text"
            placeholder="Nom"
            value={valueSignUpName}
            onChange={handleChangeSignUp}
          />
          <input
            name="email"
            className="form-connexion-input"
            type="email"
            placeholder="Email"
            value={valueSignUpEmail}
            onChange={handleChangeSignUp}
          />
          <input
            name="password"
            className="form-connexion-input"
            type="password"
            placeholder="Mot de passe"
            value={valueSignUpPassword}
            onChange={handleChangeSignUp}
          />
          <button
            type="submit"
            className="form-button"
          >S'enregistrer
          </button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form className="form-connexion" onSubmit={handleSubmitSignIn}>
          <h1 className="form-container-title">Se connecter</h1>
          <input
            name="username"
            className="form-connexion-input"
            type="email"
            placeholder="Email"
            value={valueSignInEmail}
            onChange={handleChangeSignIn}
          />
          <input
            name="password"
            className="form-connexion-input"
            type="password"
            placeholder="Mot de passe"
            value={valueSignInPassword}
            onChange={handleChangeSignIn}
          />
          <a className="form-link" href="#">
            Mot de passe oublié ?
          </a>
          <button
            type="submit"
            className="form-button"
          >
            Connexion
          </button>
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
