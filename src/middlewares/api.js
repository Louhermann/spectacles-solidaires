import axios from 'axios';
import { SAVE_DATA, saveEvent } from '../actions';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_DATA: {
      // const token = store.getState();
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTI0MjUyNjQsImV4cCI6MTY1MjQ5MDA2NCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.e7qcvQI6r5MDzYL-Zqu0GdcUZEWgHy1dGfNIhaOYTBwxkgjdU0M9hvpSbTArdIIQDqFR0TK9aAGfoMOmmXVzDwj4aDkQ1SOJ6MsOuExxn26BMqiOex5Auj-tt29iQeGpq9rzw1rwSeanRxdaC_QW-WyqL8zQR1k0znLIyEt2bZ68T9mO6o4guS6ouIb-Go1tZGk1bmwPKGsMkREwfSbn5k9yq3TOhxS_vAxVgNqq8HKLMAysMPkXRBp1KLbjqRVMSiDBUA-i5SCamG4sHRn0q4QdX0Z_4WPSf67jh-RnYEcrKLm0vEFDw62ABT3MXyPg-IpEcJ6fP7oSxWijwszmbg';

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
