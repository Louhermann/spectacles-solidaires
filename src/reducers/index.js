import { SET_SIGN_IN, SET_SIGN_UP, SAVE_EVENT } from '../actions';

const initialState = {

  signIn: {
    email: '',
    password: '',
    lastName: '',
  },

  signUp: {
    email: '',
    password: '',
  },

  show: [],
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
        show: action.event,
      };
    default:
      return state;
  }
}

export default mainReducers;
