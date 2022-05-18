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
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTI4Njc0MjQsImV4cCI6MTY1MjkzMjIyNCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.CxWn4e71L7gyDjxk7jLMvLrPV8wwzRjHG5YeIEfcrNl1KITmVVZvQM3cV3r4GhXRqiF-JkztHvLJP8-1147QHcM-H3dgMnjv-Gy4Ei3KlmuF2zA11uwAWMRBzqWL8kzEmDTIRQHWhm4R2wjkQqjblQliCDOHnSfwhZFyVo9eXk7ud6QvgZwO-lhXaq30t1BHIKitzcWPW0zsLC7i0tnvYLxvkFO3fXwhCc2iR_pVDlonO3GwbAgwm-VPvszO950WfvhglBOfb728Z3AAJvGSpkPkDkDLdPfltTSbxCIZkjignMGN3iaf9320UZqGyHBZwp9pZaNRHFdIo49lx2ftTQ',
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
