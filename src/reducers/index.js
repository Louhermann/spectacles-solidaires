import { SET_SIGN_IN, SET_SIGN_UP, SAVE_EVENT, SET_GO_TO_SLIDE } from '../actions';

const initialState = {

  signIn: {
    email: '',
    password: '',
    lastName: '',
  },

  signUp: {
    email: '',
    password: '',
  },

  slider: {
    goToSlide: 0,
  },

  events: [],
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTI0MjUyNjQsImV4cCI6MTY1MjQ5MDA2NCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.e7qcvQI6r5MDzYL-Zqu0GdcUZEWgHy1dGfNIhaOYTBwxkgjdU0M9hvpSbTArdIIQDqFR0TK9aAGfoMOmmXVzDwj4aDkQ1SOJ6MsOuExxn26BMqiOex5Auj-tt29iQeGpq9rzw1rwSeanRxdaC_QW-WyqL8zQR1k0znLIyEt2bZ68T9mO6o4guS6ouIb-Go1tZGk1bmwPKGsMkREwfSbn5k9yq3TOhxS_vAxVgNqq8HKLMAysMPkXRBp1KLbjqRVMSiDBUA-i5SCamG4sHRn0q4QdX0Z_4WPSf67jh-RnYEcrKLm0vEFDw62ABT3MXyPg-IpEcJ6fP7oSxWijwszmbg',
};

function mainReducers(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SIGN_UP:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          [action.name]: action.value,
        },
      };
    case SET_SIGN_IN:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          [action.name]: action.value,
        },
      };
    case SAVE_EVENT:
      return {
        ...state,
        events: action.event,
      };
    case SET_GO_TO_SLIDE:
      return {
        ...state,
        slider: {
          ...state.slider,
          goToSlide: action.index,
        },
      };
    default:
      return state;
  }
}

export default mainReducers;
