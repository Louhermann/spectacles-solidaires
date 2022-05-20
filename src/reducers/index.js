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
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTMwNDAwODIsImV4cCI6MTY1MzEwNDg4Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.okJlOgPo5mtnDycb1X5NXmxEOlj4z3CC65LuQqkVjiub-28V5pti-n6Hr_ZGBylHau7YkF8Oiql6rE2uahV5vsjCP6ZcTXPJNLhfegc1IWCmYVh0uvpOd_dzNe2shCvhk5t2VHjY5h0zwWf_kSDxz0cyby1vFZJiiA7paYUJ9ynovICu-4o91XpzGTm0nyY-gj60uSwlsXmwf6aTLCmgLnltLR1c9UpuaVtVAxsaK0b9_Vbovke71Tnk3PWkbZVe1HcywveOZMXYYqMHKlEjqHs5WbeoBgJ2ZPSJVRR-H7sTHod5U5IzVgsp_VRDp7CEo_AwdM6xhfqtAB8g3Cd-ww',
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
