// styles
import './profil.scss';

// npm
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserById, logOut, setIsLogged } from '../../actions';

function Profil() {
  const username = useSelector((state) => state.signIn.username);
  const users = useSelector((state) => state.users);
  const { firstname, lastname, email } = users.find((user) => username === user.email);

  // console.log(firstname, lastname, email, id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogOut() {
    dispatch(logOut(false));
    navigate('/');
  }

  function deleteAccount() {
    dispatch(getUserById());
    dispatch(setIsLogged(false));
    navigate('/');
  }

  return (
    <div className="profil">
      <div className="profil__avatar">
        <img className="profil__avatar--picture" src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt="" />
      </div>
      <div>
        <h1 className="profil__title">Mon profil</h1>
        <ul>
          <li className="profil__desc"><span className="profil__desc--span">Nom : {lastname} </span> </li>
          <li className="profil__desc"><span className="profil__desc--span">Prénom : {firstname} </span> </li>
          <li className="profil__desc"><span className="profil__desc--span">E-mail : {email} </span></li>
        </ul>
        <button className="profil__button" type="button" onClick={handleLogOut}> Se déconnecter</button>
        <div>
          <button className="profil__button--delete" type="button" onClick={deleteAccount}> Supprimer mon compte</button>
        </div>
      </div>
    </div>
  );
}

export default Profil;
