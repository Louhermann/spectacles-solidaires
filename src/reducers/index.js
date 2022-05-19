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
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTI5NDQxODUsImV4cCI6MTY1MzAwODk4NSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.IRBLxEveISyGezJaCnxB8qzl-Ufq6QoqsH8t_DJ2_Y8CrYkV6Rw9mSZYQA6_6_zUQ9GV2YHsZlTLS9KSeBC4KplmmaD8Wt48f7S8POWx6ytsXXDmZ3GIU_PxTmY157t8kATFAYtl4qEcXn_59n5ZXM1hG_I_73t_c5C0ffWukfJTYEsl-wdoOFr7IpYLF6Lgw5JqY0-dOmF6yBKtUf3S0lwa5QGea02U6-FvlMkmazpL04CA_zmQtyILop3yVepelTi0kgQbnaBSFlTpKkrSYEY1xmyyCPpTbevmWa_DzEDhEEPw45G0ymCmt9uiCq2Z9spkTL0Wr_Yc8CqW-uou5w',
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
