// styles
import './profil.scss';

function Profil() {
  return (
    <div className="profil">
      <div className="profil__avatar">
        <img className="profil__avatar--picture" src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt="" />
      </div>
      <div>
        <h1 className="profil__title">Mon profil</h1>
        <ul>
          <li className="profil__desc"><span className="profil__desc--span">Nom : </span> </li>
          <li className="profil__desc"><span className="profil__desc--span">Prénom : </span> </li>
          <li className="profil__desc"><span className="profil__desc--span">E-mail : </span></li>
        </ul>
        <button className="profil__button" type="button"> Se déconnecter</button>
        <div>
          <button className="profil__button--delete" type="button"> Supprimer mon compte</button>
        </div>
      </div>
    </div>
  );
}

export default Profil;
