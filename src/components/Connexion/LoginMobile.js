/* eslint-disable jsx-a11y/label-has-associated-control */
// styles
import './login.scss';
// import { PropTypes } from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  setSignIn, setSignUp, login, createUser, getUser,
} from '../../actions';

function LoginMobile() {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChangeSignUp(event) {
    dispatch(setSignUp(event.target.value, event.target.name));
  }

  function handleChangeSignIn(event) {
    dispatch(setSignIn(event.target.value, event.target.name));
  }

  function handleSubmitSignIn(evt) {
    // console.log('envoyer');
    evt.preventDefault();
    dispatch(login());
    dispatch(getUser());
    if (isLogged) {
      navigate('/Profil');
    }
  }
  function handleSubmitSignUp(evt) {
    evt.preventDefault();
    dispatch(createUser());
  }

  const valueSignUp = useSelector((state) => state.signUp);

  const valueSignIn = useSelector((state) => state.signIn);

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form onSubmit={handleSubmitSignIn}>
          <label className="label" htmlFor="chk" aria-hidden="true">Se Connecter</label>
          <input
            name="username"
            className="input"
            type="email"
            placeholder="Email"
            value={valueSignIn.username}
            onChange={handleChangeSignIn}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Mot de passe"
            value={valueSignIn.password}
            onChange={handleChangeSignIn}
          />
          <button type="submit" className="form-button">Se connecter</button>
        </form>
      </div>
      <div className="login">
        <form onSubmit={handleSubmitSignUp} className="form-label">
          <label className="label--down" htmlFor="chk" aria-hidden="true">S'enregistrer</label>

          <input
            name="lastname"
            className="input"
            type="text"
            placeholder="Nom"
            value={valueSignUp.Lastname}
            onChange={handleChangeSignUp}
          />
          <input
            name="firstname"
            className="input"
            type="text"
            placeholder="Prénom"
            value={valueSignUp.Firstname}
            onChange={handleChangeSignUp}
          />
          <input
            name="email"
            className="input"
            type="email"
            placeholder="Email"
            value={valueSignUp.Email}
            onChange={handleChangeSignUp}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Mot de passe"
            value={valueSignUp.Password}
            onChange={handleChangeSignUp}
          />
          <button
            type="submit"
            className="form-button"
          >S'enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginMobile;
