import {
  SET_SIGN_IN,
  SET_SIGN_UP,
  SAVE_EVENT,
  SET_GO_TO_SLIDE,
  SAVE_TOKEN,
  SET_IS_LOGGED,
  LOG_OUT,
  SAVE_USER,
  SAVE_USER_LOGGED,
} from '../actions';

const initialState = {
  isLogged: false,

  signIn: {
    username: '',
    password: '',
  },

  signUp: {
    email: '',
    password: '',
    lastname: '',
    firstname: '',
  },

  user: {
  },
  avatar: 'https://bootdey.com/img/Content/avatar/avatar7.png',
  users: [],

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
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTMyODk4OTQsImV4cCI6MTY1MzM1NDY5NCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.qjGtmpiJ2lkIajV3x98zNDxiee0uovccZJww6mBAYtc7obbUWDBmdlXtX8iAOgS0UVW1GRSxNnPN9kDzl9Ca8eTebZZX6dFN0I67pE8ZYV1wR8pLRS5DQYVrZXWnvEuk4mxgfMJfj2rwsIXcaRkvyNT-mCAyTp2oOvtLdCyX76bnuOYirSJO1SlVe8b89487GRaP2629R4GY0MNFeAITpH3FFWgH3KccKFF2yb-uTD_osqbffW6g4JzXh2WCnOrXQNnZWMIOhM9L_iR3OCG9xQ_3nAOi5c_GPxJBfuHi6B5v6bUFqTknO9Qd8DNo4HXZQj6K2q-AY7ZfE6FOmyP5ew',
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
      // save all users
    case SAVE_USER:
      return {
        ...state,
        users:
         action.users
        ,
      };
      // save id user
    case SAVE_USER_LOGGED:
      return {
        ...state,
        user: action.user
        ,
      };
    default:
      return state;
  }
}
export default mainReducers;
