import { SET_SIGN_IN, SET_SIGN_UP } from '../actions';

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
    default:
      return state;
  }
}

export default mainReducers;
