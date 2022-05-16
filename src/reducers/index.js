import {
  SET_SIGN_IN,
  SET_SIGN_UP,
  SAVE_EVENT,
  SET_GO_TO_SLIDE,
  SAVE_TOKEN,
  IS_LOGGED,
  LOG_OUT,
} from '../actions';

const initialState = {
  isLogged: true,

  signIn: {
    username: 'admin@admin.com',
    password: 'admin',
  },

  signUp: {
    email: '',
    password: '',
    lastName: '',
  },

  slider: {
    goToSlide: 0,
  },

  events: [],
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTI2ODU3NzAsImV4cCI6MTY1Mjc1MDU3MCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.W1nv1aLZUx7t6D6wDuy9niFRPrDK99ezFxP3x2ecpMgIqOpV8bF9XOpaPAxZ5AvXh6oDULHaD9yKm3sGoRbDsLdiP3qP__s9iwZmFCnPGPUb10YG1koi4ghoW5vgMsy_IB1aEswARg37Z6Wdb9-VNogb_IN6kp8RtfDPXMBPKCNt-hPECD0fX5jTgYx1vSDVTO3LasXA5LUfsLI3olpJI4dKvYp7BOI8E8g8lZaulQGrQxp8Ug6w522PGXO0-bK5Bs0rmi6b3ST_uNiGhpNT_6GeHNBcSU9ZtazoPb6lcjjLCMKkAPVD96M-PJnGK53kgca_r4HYbkkjFiWQUMTAWQ',
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
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case IS_LOGGED:
      return {
        ...state,
        isLogged: action.bool,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: action.bool,
      };
    default:
      return state;
  }
}
export default mainReducers;
