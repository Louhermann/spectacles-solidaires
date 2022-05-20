import {
  SET_SIGN_IN,
  SET_SIGN_UP,
  SAVE_EVENT,
  SET_GO_TO_SLIDE,
  SAVE_TOKEN,
  SET_IS_LOGGED,
  LOG_OUT,
  SAVE_USER,
} from '../actions';

const initialState = {
  isLogged: false,

  signIn: {
    username: 'admin@admin.com',
    password: 'admin',
  },

  signUp: {
    email: 'a@gmail',
    password: 'azerty',
    lastname: 'azerty',
    firstname: 'azerty',
  },

  user: {
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    avatar: 'https://bootdey.com/img/Content/avatar/avatar7.png',
  },

  slider: {
    goToSlide: 0,
  },

  // contact: {
  //   name: '',
  //   surname: '',
  //   email: '',
  //   phone: '',
  //   public: '',
  //   budget: '',
  //   message: '',
  // },

  events: [],
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTMwMzM4MzIsImV4cCI6MTY1MzA5ODYzMiwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.NFMsQZiSc8AsnvzvMaDlZLlGVPQ0MrzJor2ocActJjAehv9C1M7BlLgQ-BFcD3IiZm_qGcLp9fL3eGqTRvF9tV_Yrnxoqvi8GM90PIphNy4pUPxUr0LhvdppF8vhC7VGoyTvdEQs8aUK7AKSjUZBbjmIkAm77xkzLR0NPM39tArpQ5fFf-feEIswdOLtNQ60gZ7WsQcitlTejqtDPFfv9Oo7AVt2O8RNef8Y5FEBzj3yWG5uvlfoc5ceGh84_rgZyUe4TdaO-FC8Xnpa90uZtBPOhemwUMuqW0CqF4oULXYpC8T-hX0prGoO6G-Alv2FwHJq0f1CvQOwYL3yRGkjAg',
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
      // case SET_CONTACT:
      //   return {
      //     ...state,
      //     contact: {
      //       ...state.contact,
      //       [action.name]: action.value,
      //     },
      //   };

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
    case SET_IS_LOGGED:
      return {
        ...state,
        isLogged: action.bool,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: action.bool,
      };
    case SAVE_USER:
      return {
        ...state,
        user: {
          ...state.user,
        },
      };
    default:
      return state;
  }
}
export default mainReducers;
