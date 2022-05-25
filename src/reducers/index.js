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
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTMzNzU2ODMsImV4cCI6MTY1MzQ0MDQ4Mywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.DLuzEHN9o4CAU8NBIu6YnhdMQirqN4Ui4aPJiVntVm68_WtGfEVynlgBXTfgTjV77mAtUIshq288PpzoPI8t8lCfI_WSJ7p9GPlALGFDNKtmLEUObx7fKGgu4ghLmbUeInKW8DKNatljbEIY-zBG7DFXzzFbXVEg5qh4aMus0Jx-k0qbBTy68_tqe_SZWTwFhmvs_rSqsw19_TebK_EiOMIk7Jc-ogOqxbET90DSe3VORLFxxZBfhYEUSjWyO68izW7b9FVr_TfKKg-1Y03ZBivIo0b9yXkuJLHkTIYb7BH81yjfCqLgw3yziQAI-9iG1uzxg1hNwWDFxurh_KH7cg',
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
