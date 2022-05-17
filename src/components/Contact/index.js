// styles
import './contact.scss';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContact, contact } from '../../actions';

function Contact() {
  const valueContactName = useSelector((state) => state.contact.name);
  const valueContactSurname = useSelector((state) => state.contact.surname);
  const valueContactEmail = useSelector((state) => state.contact.email);
  const valueContactPhone = useSelector((state) => state.contact.phone);
  const valueContactPublic = useSelector((state) => state.contact.public);
  const valueContactBudget = useSelector((state) => state.contact.budget);
  const valueContactMessage = useSelector((state) => state.contact.message);

  const dispatch = useDispatch();

  const onChange = (event) => {
    dispatch(setContact(event.target.value, event.target.name));
    console.log('change');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(contact());
    console.log('submit');
  };

  return (
    <form className="card" onSubmit={handleSubmit} method="POST">
      <h2 className="card__title">Contactez nous</h2>
      <div className="card__row">
        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Prenom</label>
            <input className="card__input" name="name" type="text" value={valueContactName} onChange={onChange} />
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Nom</label>
            <input className="card__input" name="surname" type="text" value={valueContactSurname} onChange={onChange} />
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">E-mail</label>
            <input className="card__input" name="email" type="text" value={valueContactEmail} onChange={onChange} />
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Téléphone</label>
            <input className="card__input" type="phone" name="phone" value={valueContactPhone} onChange={onChange} />
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Public</label>
            <input className="card__input" type="text" name="public" value={valueContactPublic} onChange={onChange} />
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Budget</label>
            <input className="card__input" type="text" name="budget" value={valueContactBudget} onChange={onChange} />
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Message</label>
            <textarea className="card__textarea" type="text" name="message" value={valueContactMessage} onChange={onChange} />
          </div>
        </div>

        <div className="card__col">
          <input className="card__input--submit" type="submit" value="Envoyer" />
        </div>
      </div>
    </form>
  );
}

export default Contact;
