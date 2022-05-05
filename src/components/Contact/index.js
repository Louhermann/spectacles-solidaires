// styles
import './contact.scss';

function Contact() {
  return (
    <div className="card">
      <h2>Contactez nous</h2>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label>Prenom</label>
            <input name="prenom" type="text" />
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <label>Nom</label>
            <input name="nom" type="text" />
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <label>E-mail</label>
            <input name="mail" type="text" />
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <label>Téléphone</label>
            <input type="tel" name="telephone" />
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <label>Public</label>
            <input type="text" name="age" />
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <label>Budget</label>
            <input type="text" name="prix" />
          </div>
        </div>

        <div className="col">
          <div className="form-group ">
            <label>Message</label>
            <textarea className="textarea" type="text" name="message" style={{ height: '7em', width: '90%' }} />
          </div>
        </div>

        <div className="col">
          <input type="submit" value="Envoyer" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
