// == Import
import './connexion.scss';

// == Composant
function Connexion() {
  return (
    <form method="post" className="connexion">
      <div className="connexion-div">
        <label htmlFor="name">Nom d'utilisateur:</label>
        <input type="text" name="name" placeholder="Nom d'utilisateur" required />
      </div>
      <div className="connexion-div">
        <label htmlFor="name">Mot de passe:</label>
        <input type="password" name="password" placeholder="Mot de passe" required />
      </div>
      <div>
        <button className="connexion-button" type="submit">Se connecter</button>
      </div>
    </form>
  );
}

// == Export
export default Connexion;
