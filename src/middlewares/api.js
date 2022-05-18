import emailjs from '@emailjs/browser';
import axios from 'axios';
import {
  SAVE_DATA,
  saveEvent,
  LOGIN,
  CONTACT,
  // isLogged,
} from '../actions';

const axiosInstance = axios.create({
  baseURL: 'http://al1santa-server.eddi.cloud/projet-14-spectacles-solidaires-back/public/api/',
});

const apiMiddleWare = (store) => (next) => (action) => {
  const { token } = store.getState();
  switch (action.type) {
    case SAVE_DATA: {
      axiosInstance
        .get(
          'event',
          {
            headers:
            {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((response) => {
          store.dispatch(saveEvent(response.data.events));
          // console.log(response.data.events);
        })
        .catch(
          (response) => {
            console.log(response);
          },
        );
      next(action);
      break;
    }

    case LOGIN: {
      const { signIn: { username, password } } = store.getState();

      axiosInstance
        .post(
          'login_check',
          {
            username,
            password,
          },
        )
        .then((response) => {
          console.log(response);
          store.dispatch(response.data.token);
          // .dispatch(isLogged(true));
        })
        .catch((err) => {
          console.log('oups...');
          console.log(err);
        });
      next(action);
      break;
    }

    // case CONTACT: {
    //   emailjs.sendForm('service_v5agd3h', 'template_svj2zrl', '#contact', 'V7f8HPedeyRo5IJ-4')
    //     .then((response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     }, (error) => {
    //       console.log('FAILED...', error);
    //     });
    //   next(action);
    //   break;
    // }
    default:
      next(action);
  }
};
export default apiMiddleWare;
