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
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTM0NzY3MTgsImV4cCI6MTY1MzU0MTUxOCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.xqQethvK7y0jvz1WYj_2UUy-VSN4Av8Ctj58J5174ikuYNTUBoKWZCy-aDlLU09_O1zhxmt8TA3YHWGgvGDl2UR-6jyhqlTNpm8zStH1517Y5ucTAt00NGc_XtAUCC3oxE-h2rgmrk6CFD-an3hNrqC_5eZYHLFvRRs7rEefPq9gdm16uf57Yfbidihd3ry8nckLYmueo1lV47gcXR08NohcalClvc8_cZHgABuugX3TP_kHHt60QkW3rkvLRafN0MbM75LB1FGxe-3s0QazQbgXuWNJuu5uaAecMX4bBRWaovF3FFhN6u_k894oe9WzCV8BpnC4ojLned67_h5AbQ',
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
