import {
  SET_SIGN_IN,
  SET_SIGN_UP,
  SAVE_EVENT,
  SET_GO_TO_SLIDE,
  SAVE_TOKEN,
  IS_LOGGED,
  LOG_OUT,
  SET_CONTACT,
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

  contact: {
    name: '',
    surname: '',
    email: '',
    phone: '',
    public: '',
    budget: '',
    message: '',
  },

  events: [],
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTI4NTkyMTgsImV4cCI6MTY1MjkyNDAxOCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.EMFMIFAXmisOF_4Ec1YNRV9I3kgpaw34c9f3iAVy3rd04j6r6iNjHakVd0fmU0vm3eJNMOWlAXwpxwneuWspUAoNeuUIHFy-5EviBCeS69L53EDZ6pJyorqfzP7Uaqj9xedi0Gz-xh-uwAArMAycWGJObYIkWMonIRhGRFcIlCljS6iuFW1G7-ewFM5GfrPP2wplBmp8VglEPxZtELDsV8NuNjZQAty8dXIiAo2dM9t1bKS8zUE7XZBWuL-ipff2WerM-1NDIdTKJTYcAzD_f8OXFc9DY5YbEh2YmESa2c0PZDIwtRpznpaoLG3XKT4NSPSwqkLp6M_LNWD8qGIYGQ',
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
    case SET_CONTACT:
      return {
        ...state,
        contact: {
          ...state.contact,
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
