// == Import
import './connexion.scss';

import { useState } from 'react';

// == Composant
function Connexion() {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (

    <div
      className={`container-form-connexion ${isActive ? 'right-panel-active' : null}`}
      id="container"
    >
      <div className="form-container sign-up-container">
        <form className="form-connexion" action="#">
          <h1 className="form-container-title">Create Account</h1>
          <span className="span">or use your email for registration</span>
          <input
            className="form-connexion-input"
            type="text"
            placeholder="Name"
          />
          <input
            className="form-connexion-input"
            type="email"
            placeholder="Email"
          />
          <input
            className="form-connexion-input"
            type="password"
            placeholder="Password"
          />
          <button
            type="button"
            className="form-button"
          >Sign Up
          </button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form className="form-connexion" action="#">
          <h1 className="form-container-title">Sign in</h1>
          <span className="span">or use your account</span>
          <input
            className="form-connexion-input"
            type="email"
            placeholder="Email"
          />
          <input
            className="form-connexion-input"
            type="password"
            placeholder="Password"
          />
          <a className="form-link" href="#">
            Forgot your password?
          </a>
          <button type="button" className="form-button">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="form-container-title">Welcome Back!</h1>
            <p className="paragraphe">
              To keep connected with us please login with your personal info
            </p>
            <button
              type="button"
              className="form-button ghost"
              id="signIn"
              onClick={handleToggle}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="form-container-title">Hello, Friend!</h1>
            <p className="paragraphe">
              Enter your personal details and start journey with us
            </p>
            <button
              type="button"
              className="form-button ghost"
              id="signUp"
              onClick={handleToggle}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

// == Export
export default Connexion;
