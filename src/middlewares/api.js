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

    case CONTACT: {
      axiosInstance
      .post(
        {
          // name,
          // surname,
          // email,
          // phone, 
          // public,
          // budget,
          // message,
        },
        )
      .then((response)=>{
        if (response.data.status === 'success') {
          alert("Message Sent.");
        } else if(response.data.status === 'fail') {
          alert("Message failed to send.")
        }
      })
      .catch((err) => {
        console.log('oups...');
      });
      next(action);
      break;
    
    }
    default:
      next(action);
  }
};
export default apiMiddleWare;