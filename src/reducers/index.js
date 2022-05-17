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
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTI3NzE3MTYsImV4cCI6MTY1MjgzNjUxNiwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.ctbPkNczURb-oSDH1LOkp-qlDd4tyUm3ga5grh6bvo-kofxyK9LE3IEX6AheaF2m4sRKhBn7W7rG_ekdJYZ4PkuQw5rQDhYeIus11DZ1PqMvbSssSVwShajWhx8hWo9k32AS_gSlPX24B0VWycIUTz5g9-EzeaC-szfqY5kPPj06odrJ-HmZ2kJWWiYxTGuiFEofMmdMq3SgXvguZImOEWaqspX2gGBOW53XLomB3Rej1wW_kzNZTklRowL5m9ip82GnxWouhKQ8zsQ1m-yN3erXPvK1TAGcrlLq_Xk5QvA-J8QpgrD2on5DMqnm7FnVvFOjkPr3WzhfDe5eQ3p4EQ',
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
