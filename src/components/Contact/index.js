// styles
import './contact.scss';

import { contact } from '../../actions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Contact() {

  const valueContactName = useSelector((state) => state.contact.name);
  const valueContactSurname = useSelector((state) => state.contact.surname);
  const valueContactEmail = useSelector((state) => state.contact.email);
  const valueContactPhone = useSelector((state) => state.contact.phone);
  const valueContactPublic = useSelector((state) => state.contact.public);
  const valueContactBudget = useSelector((state) => state.contact.budget);
  const valueContactMessage = useSelector((state) => state.contact.message);

  const dispatch = useDispatch();

  const onNameChange = (event) => {
    dispatch(contact({name: event.target.value}));
    console.log('change');
  };

  const onSurnameChange = (event) => {
    dispatch(contact({surname: event.target.value}));
  };

  const onEmailChange = (event) => {
    dispatch(contact({email: event.target.value}));
  };

   const onPhoneChange  = (event) => {
    dispatch(contact({phone: event.target.value}));
  };

  const onPublicChange  = (event) => {
    dispatch(contact({public: event.target.value}));
  };

 const onBudgetChange = (event) => {
  dispatch(contact({budget: event.target.value}));
  };

   const onMessageChange  = (event) => {
    dispatch(contact({message: event.target.value}));
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
            <input className="card__input" name="prenom" type="text" value={valueContactName} onChange={onNameChange} />
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Nom</label>
            <input className="card__input" name="nom" type="text" value={valueContactSurname} onChange={onSurnameChange}/>
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">E-mail</label>
            <input className="card__input" name="mail" type="text" value={valueContactEmail} onChange={onEmailChange}/>
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Téléphone</label>
            <input className="card__input" type="tel" name="telephone" value={valueContactPhone} onChange={onPhoneChange} />
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Public</label>
            <input className="card__input" type="text" name="age" value={valueContactPublic} onChange={onPublicChange}/>
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Budget</label>
            <input className="card__input" type="text" name="prix" value={valueContactBudget} onChange={onBudgetChange}/>
          </div>
        </div>

        <div className="card__col">
          <div className="card__form">
            <label className="card__label">Message</label>
            <textarea className="card__textarea" type="text" name="message" value={valueContactMessage} onChange={onMessageChange}/>
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
