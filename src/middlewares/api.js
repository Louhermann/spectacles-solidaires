import axios from 'axios';
import { SAVE_DATA, saveEvent } from '../actions';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_DATA: {
      const { token } = store.getState();
      axios
        .get(
          'http://al1santa-server.eddi.cloud/projet-14-spectacles-solidaires-back/public/api/event',
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
    default:
      next(action);
  }
};
export default apiMiddleWare;
