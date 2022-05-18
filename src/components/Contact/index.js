// styles
import './contact.scss';
import HubspotForm from 'react-hubspot-form';

function Contact() {
  return (
    <div className="contact_container">
      <h1 className="contact_title">
        Contactez-nous !
      </h1>
      <HubspotForm
        portalId="7932293"
        formId="05ce7a0d-4b14-44bd-b99d-474d7f350cc9"
      />
    </div>
  );
}

export default Contact;
