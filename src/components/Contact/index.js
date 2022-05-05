// styles
import './contact.scss';

function Contact() {
  return (
    <div className="card">
      <h2 className="card__title">Contactez nous</h2>
      <div className="card__row">
        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Prenom</label>
            <input className="card__input" name="prenom" type="text" />
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Nom</label>
            <input className="card__input" name="nom" type="text" />
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">E-mail</label>
            <input className="card__input" name="mail" type="text" />
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Téléphone</label>
            <input className="card__input" type="tel" name="telephone" />
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Public</label>
            <input className="card__input" type="text" name="age" />
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Budget</label>
            <input className="card__input" type="text" name="prix" />
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Message</label>
            <textarea className="card__textarea" type="text" name="message" />
          </div>
        </div>

        <div className="card__col">
          <input className="card__input--submit" type="submit" value="Envoyer" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
