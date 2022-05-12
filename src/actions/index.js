// action type email
export const SET_SIGN_UP = 'SET_SIGN_UP';

// action creator email
export const setSignUp = (value, name) => ({
  type: SET_SIGN_UP,
  value,
  name,
});

// ACTION TYPE SET_SIGN_IN
export const SET_SIGN_IN = 'SET_SIGN_IN';

// ACTION CREATOR setSignIn
export const setSignIn = (value, name) => ({
  type: SET_SIGN_IN,
  value,
  name,
});
