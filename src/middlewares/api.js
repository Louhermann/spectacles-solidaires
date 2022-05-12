import axios from 'axios';
import { SAVE_DATA, saveEvent } from '../actions';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_DATA: {
      // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios
        .get('http://al1santa-server.eddi.cloud/projet-14-spectacles-solidaires-back/public/api/event')
        .then((response) => {
          store.dispatch(saveEvent(response.data));
          console.log(response.data);
        })
        .catch(
          (response) => {
            console.log(response);
          },
        );
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default apiMiddleWare;
