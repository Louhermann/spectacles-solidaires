// import emailjs from '@emailjs/browser';
import axios from 'axios';

import {
  SAVE_DATA,
  saveEvent,
  LOGIN,
  isLogged,
  saveToken,
  saveUser,
  CREATE_USER,
  GET_USER,
} from '../actions';

const axiosInstance = axios.create({
  baseURL: 'http://al1santa-server.eddi.cloud/projet-14-spectacles-solidaires-back/public/api/',

});
// const dispatch = useDispatch();

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
          {
            headers:
            {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((response) => {
          console.log(response);
          store.dispatch(saveToken(response.data.token));
          store.dispatch(isLogged(true));
        })
        .catch((err) => {
          console.log('oups...');
          console.log(err);
        });
      next(action);
      break;
    }

    case CREATE_USER: {
      const {
        signUp: {
          lastname,
          firstname,
          password,
          email,
        },
      } = store.getState();
      axiosInstance
        .post(
          'user/create',
          {
            lastname,
            firstname,
            password,
            email,
          },
          {
            headers:
            {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;
    }

    case GET_USER: {
      axiosInstance
        .get(
          'user/',
          {
            headers:
            {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((response) => {
          store.dispatch(saveUser(response.data.user));
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default apiMiddleWare;
